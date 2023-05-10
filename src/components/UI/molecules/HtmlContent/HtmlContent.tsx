import { Box } from '@UI/atoms/Box/Box';
import { Typography } from '@UI/atoms/Typography/Typography';
import { PostType } from '@store/usePostStore.hook';
import React from 'react';

interface HtmlContentPropsType {
  content: PostType['content'];
}

const HtmlContent = ({ content }: HtmlContentPropsType) => {
  return (
    <Typography>
      <Box dangerouslySetInnerHTML={content} />
    </Typography>
  );
};

export default HtmlContent;
