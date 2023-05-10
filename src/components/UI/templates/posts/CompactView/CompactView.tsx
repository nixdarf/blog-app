import React from 'react';
import { PostType } from '@store/usePostStore.hook';
import { Typography } from '@UI/atoms/Typography/Typography';
import { ImageHero } from '@UI/molecules/ImageHero/ImageHero';
import Button from '@UI/atoms/Button/Button';
import { Divider } from '@UI/atoms/Divider/Divider';
import { formatDate } from '@utils/formatDate';
import { useRoutes } from '@utils/useRoutes.hook';
import { StyledBox, StyledPostWrapper } from './CompactView.styles';
import { ChevronRightIcon } from '@UI/atoms/Icons/ChevronRightIcon';
import { ButtonGroup } from '@UI/atoms/ButtonGroup/ButtonGroup';

interface CompactViewPropsType {
  post: PostType;
}

export const CompactView = ({ post }: CompactViewPropsType) => {
  const { goTo } = useRoutes();

  return (
    <StyledPostWrapper>
      <Typography variant='title'>{post.title}</Typography>
      
      <Typography variant='caption'>
        Posted on {formatDate(post.createdAt)} {post.author && <Typography variant='note'>{post.author}</Typography>} {post.updatedAt && `(Last update on ${formatDate(post.createdAt)})`}
      </Typography>
      
      <Divider />
      
      <StyledBox>
        <ImageHero imgUrl={post.imgUrl} />
      </StyledBox>

      <StyledBox>
        <Typography variant='body'>{post.overview}</Typography>
      </StyledBox>

      <ButtonGroup>
        <Button onClick={() => goTo(`/post/view/${post.id}`)} rounded>Read more <ChevronRightIcon /></Button>
      </ButtonGroup>
    </StyledPostWrapper>
  );
};