import { PageView } from "@UI/templates/pages/PageView/PageView";
import React from "react";
import { usePostStore } from "@store/usePostStore.hook";
import { ThumbnailView } from "@UI/templates/posts/ThumbnailView/ThumbnailView";
import { VideoView } from "@UI/templates/posts/VideoView/VideoView";
import { HeroView } from "@UI/templates/posts/HeroView/HeroView";
import { Grid } from "@UI/atoms/Grid/Grid";
import { Box } from "@UI/atoms/Box/Box";
import { ImageView } from "@UI/templates/posts/ImageView/ImageView";

export const HomePage = () => {
  const { getPosts } = usePostStore();
  const posts = getPosts({ order: 'asc' });

  return (
    <PageView>
      {posts[0] && <HeroView post={posts[0]} />}

      <Grid>
        <Box>
          {posts[1] && <VideoView post={posts[1]} />}
        </Box>
        <Box>
          {posts[2] && <ImageView post={posts[2]} />}
          <ThumbnailView posts={posts} />
        </Box>
      </Grid>
    </PageView>
  );
};
