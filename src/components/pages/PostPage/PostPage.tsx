import { PostEditor } from "@UI/organisms/PostEditor/PostEditor";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import { PostView } from "@UI/templates/posts/PostView/PostView";
import { usePostStore } from "@store/usePostStore.hook";
import React from "react";
import { useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { PostNotFound } from "@UI/templates/textBlocks/PostNotFound";

enum ModeType {
  New = 'new',
  Edit = 'edit',
  View = 'view',
};

export const PostPage = () => {
  const { mode, id } = useParams<{ mode: string; id: string; }>();
  const { getPostById } = usePostStore();

  const post = getPostById(id as string);

  return (
    <PageView>
      {
        match(true)
          .with(mode === ModeType.New && Boolean(!post), () => <PostEditor />)
          .with(mode === ModeType.Edit && Boolean(post), () => post && <PostEditor post={post} />)
          .with(mode === ModeType.View && Boolean(post), () => post && <PostView post={post} />)
          .otherwise(() => <PostNotFound />)
      }
    </PageView>
  );
};

