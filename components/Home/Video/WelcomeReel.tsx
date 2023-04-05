import React from 'react';

export default function WelcomeReel() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        padding: 0,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '177.77777778vh',
          minWidth: '100%',
          height: '100%',
          minHeight: '56.25vw',
        }}
      >
        <source src="/npa-reel.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
