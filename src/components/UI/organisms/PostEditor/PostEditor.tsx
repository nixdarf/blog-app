import { Box } from '@UI/atoms/Box/Box';
import Button from '@UI/atoms/Button/Button';
import { ButtonGroup } from '@UI/atoms/ButtonGroup/ButtonGroup';
import { CancelIcon } from '@UI/atoms/Icons/CancelIcon';
import { SaveIcon } from '@UI/atoms/Icons/SaveIcon';
import Input from '@UI/atoms/Input/Input';
import { Textarea } from '@UI/atoms/Textarea/Textarea';
import { Typography } from '@UI/atoms/Typography/Typography';
import { PostType, usePostStore } from '@store/usePostStore.hook';
import { useRoutes } from '@utils/useRoutes.hook';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledBox } from './PostEditor.styles';
import { Divider } from '@UI/atoms/Divider/Divider';
import { dummyImageGenerator } from '@utils/dummyImageGenerator';
import { youtubeVideoGenerator } from '@utils/yutubeVideoGenerator';
import { loremIpsumGenerator } from '@utils/loremIpsumGenerator';

interface PostEditorPropsType {
  post?: PostType;
}

export const PostEditor = ({ post }: PostEditorPropsType) => {
  const { from, goTo } = useRoutes();

  const [id, setId] = useState<string>(post?.id ?? uuidv4());
  const [imgUrl, setImgUrl] = useState<string>(post?.imgUrl ?? '');
  const [videoUrl, setVideoUrl] = useState<string>(post?.videoUrl ?? '');
  const [title, setTitle] = useState<string>(post?.title ?? '');
  const [overview, setOverview] = useState<string>(post?.overview ?? '');
  const [content, setContent] = useState<string>(post?.content.__html ?? '');
  const [createdAt, setCreatedAt] = useState<Date>(post?.createdAt ?? new Date());
  const [author, setAuthor] = useState<string>(post?.author ?? '');

  const { addPost, updatePost } = usePostStore();

  useEffect(() => {
    if (post) {
      setId(post.id);
      setImgUrl(post.imgUrl);
      setVideoUrl(post.videoUrl);
      setTitle(post.title);
      setOverview(post.overview);
      setContent(post.content.__html);
      setCreatedAt(post.createdAt);
    }
  }, [post]);

  const handleSubmit = () => {
    const updatedPost: PostType = {
      id,
      imgUrl: imgUrl !== '' ? imgUrl : dummyImageGenerator(1200, 400),
      videoUrl: videoUrl !== '' ? videoUrl : youtubeVideoGenerator(),
      title: title !== '' ? title : loremIpsumGenerator(12),
      overview: overview !== '' ? overview : loremIpsumGenerator(50),
      content: { __html: content !== '' ? content : loremIpsumGenerator(300) },
      createdAt,
      author: author !== '' ? author : 'John Doe',
      ...(post && { updatedAt: new Date() })
    };

    post ? updatePost(id, updatedPost) : addPost(updatedPost);
    goTo(`/post/view/${id}`);
  };

  return (
    <Box>
      <Typography variant='h2'>{post ? 'Edit post' : 'Add post'}</Typography>

      <Divider />

      <StyledBox>
        <Input label='Post title' value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </StyledBox>

      <StyledBox>
        <Input label='Main image url' value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)} />
      </StyledBox>

      <StyledBox>
        <Input label='Youtube (embed) video url' value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)} />
      </StyledBox>

      <StyledBox>
        <Textarea label="Overview" rows={3} value={overview}
          onChange={(e) => setOverview(e.target.value)} />
      </StyledBox>

      <StyledBox>
        <Textarea label="Content (Html Editor)" rows={10}
          value={content} onChange={(e) => setContent(e.target.value)} />
      </StyledBox>

      <StyledBox>
        <Input label='Author' value={author}
          onChange={(e) => setAuthor(e.target.value)} />
      </StyledBox>

      <ButtonGroup>
        <Button onClick={handleSubmit}>Save <SaveIcon /></Button>
        <Button onClick={() => goTo(from)}>Cancel <CancelIcon /></Button>
      </ButtonGroup>
    </Box>
  );
};
