import { dummyDataCreator } from '@utils/dummyDataCreator';
import { useState } from 'react';

// Key used to store posts in local storage
const POSTS_STORAGE_KEY = 'blog-posts';

export interface PostType {
  id: string;
  imgUrl: string;
  videoUrl: string;
  title: string;
  overview: string;
  content: {
    __html: string;
  };
  createdAt: Date;
  updatedAt?: Date;
  author: string;
}

interface GetPostOptions {
  limit?: number;
  order?: 'asc' | 'desc';
}

export interface UseStoreType {
  addPost: (post: PostType) => void;
  updatePost: (postId: PostType['id'], updatedPost: PostType) => void;
  removePost: (postId: PostType['id']) => void;
  getPostById: (postId: PostType['id']) => PostType | undefined;
  getPosts: (options: GetPostOptions) => PostType[];
}

// Custom hook to manage the state of the post store
export const usePostStore = (): UseStoreType => {
  // Retrieve posts from local storage, or initialize as an empty array
  const [posts, setPosts] = useState<PostType[]>(() => {
    const storedPosts = localStorage.getItem(POSTS_STORAGE_KEY);
    return storedPosts
      ? JSON.parse(storedPosts)
      : localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(dummyDataCreator()));
  });

  // Add a new post to the store
  const addPost = (post: PostType) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  // Update a post in the store by its ID
  const updatePost = (postId: PostType['id'], updatedPost: PostType) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...updatedPost, id: postId };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  // Remove a post from the store by its ID
  const removePost = (postId: PostType['id']) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  // Retrieve a post from the store by its ID
  const getPostById = (postId: PostType['id']) => {
    return posts.find(post => post.id === postId);
  };

  // Retrieve all posts in the store, with optional limit and sorting order
  const getPosts = ({ limit, order }: GetPostOptions) => {
    const allPosts = [...posts];
    allPosts.sort((a, b) => {
      const diff = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return order === 'asc' ? diff : -diff;
    });

    return allPosts.slice(0, limit && limit > 0 ? limit : allPosts.length);
  };

  return { addPost, updatePost, removePost, getPostById, getPosts };
};
