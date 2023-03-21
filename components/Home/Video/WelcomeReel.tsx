import React from 'react';

export default function WelcomeReel() {
  return (
    <iframe
      src="https://player.vimeo.com/video/779360122?h=2190b8bd96&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
      width="426"
      height="240"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen={undefined}
      title="[NPA] Website Reel v12.mp4"
      data-ready="true"
      className="elementor-background-video-embed"
      style={{
        width: '100%', height: '1000px',
      }}
      // "width: 667.954px; height: 376.312px;"
    />
  );
}
