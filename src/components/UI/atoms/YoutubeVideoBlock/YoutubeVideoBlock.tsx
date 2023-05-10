import React from 'react';

interface YoutubeVideoPlayerPropsType {
  src: string;
}

export const YoutubeVideoPlayer = ({ src }: YoutubeVideoPlayerPropsType) => {
  return (
    <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
      { /* eslint-disable-next-line */ }
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
