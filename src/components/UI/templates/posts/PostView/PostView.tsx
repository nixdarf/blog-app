import React from 'react';
import { PostType, usePostStore } from '@store/usePostStore.hook';
import { Typography } from '@UI/atoms/Typography/Typography';
import { ImageHero } from '@UI/molecules/ImageHero/ImageHero';
import Button from '@UI/atoms/Button/Button';
import { formatDate } from '@utils/formatDate';
import { useRoutes } from '@utils/useRoutes.hook';
import { ButtonGroup } from '@UI/atoms/ButtonGroup/ButtonGroup';
import HtmlContent from '@UI/molecules/HtmlContent/HtmlContent';
import { StyledPostWrapper, StyledBox, StyledContent } from './PostView.styles';
import { EditIcon } from '@UI/atoms/Icons/EditIcon';
import { DeleteIcon } from '@UI/atoms/Icons/DeleteIcon';
import { Divider } from '@UI/atoms/Divider/Divider';

interface PostViewPropsType {
  post: PostType;
}

export const PostView = ({ post }: PostViewPropsType) => {
  const { from, goTo } = useRoutes();
  const { removePost } = usePostStore();

  return (
    <StyledPostWrapper>
      <ImageHero imgUrl={post.imgUrl} />

      <StyledContent>
        <Typography variant='title'>{post.title}</Typography>

        <Divider />

        <StyledBox>
          <HtmlContent content={post.content} />
        </StyledBox>

        <Typography variant='caption'>
          Posted on {formatDate(post.createdAt)} {post.author && <Typography variant='note'>{post.author}</Typography>} {post.updatedAt && `(Last update on ${formatDate(post.createdAt)})`}
        </Typography>

        <Divider />

        <StyledBox>
          <ButtonGroup>
            <Button onClick={() => goTo(`/post/edit/${post.id}`)}>Edit <EditIcon /></Button>
            <Button onClick={() => {
              removePost(post.id);
              goTo(from);
            }}>Delete <DeleteIcon /></Button>
          </ButtonGroup>
        </StyledBox>
      </StyledContent>
    </StyledPostWrapper>
  );
};