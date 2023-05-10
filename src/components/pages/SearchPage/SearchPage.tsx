import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import { LinkView } from "@UI/templates/posts/LinkView/LinkView";
import { usePostStore } from "@store/usePostStore.hook";
import React from "react";
import { useParams } from "react-router-dom";
import { NoSearchResults } from "@UI/templates/textBlocks/NoSearchResults";

export const SearchPage = () => {
  const { term } = useParams();
  const { getPosts } = usePostStore();

  const posts = getPosts({});
  const filteredPosts = posts && term ? posts.filter(post => post.title.toLowerCase().includes(term.toLowerCase())) : [];

  return (
    <PageView>
      <Typography variant="h1">Search results</Typography>
      {filteredPosts.length > 0 && filteredPosts.map((post) => (
        <LinkView key={post.id} post={post} />
      ))}

      {!filteredPosts.length && <NoSearchResults />}
    </PageView>
  );
};

