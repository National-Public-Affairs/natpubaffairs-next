import React from 'react';
import type { WindowDimensions } from '@/hooks/useWindowDimensions';

export default function WelcomeReel({ width, height }: WindowDimensions) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        padding: 0,
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/779360122?h=2190b8bd96&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen={undefined}
        title="NPA: Your campaign doesn't stop. Neither do we."
        data-ready="true"
        className="elementor-background-video-embed"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%)',
          zIndex: '9',
        }}
      />
    </div>
  );
}
