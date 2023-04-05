import React from 'react';

export default function Animation() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '250px',
        height: '250px',
        margin: '400px auto',
        border: '1px solid orange',
        display: 'grid',
        gridTemplate: '100% / 100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          zIndex: 0,
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundColor: 'var(--blue-sec-3)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '65%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundColor: 'rgba(193, 208, 220, 1)',
          border: '1px solid #acc0d0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '-185%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundColor: 'rgba(193, 208, 220, 0.5)',
          border: '1px solid #acc0d0',
        }}
      />
    </div>
  );
}
