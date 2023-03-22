import React, { useEffect, useState } from 'react';
import styles from './TextOverlay.module.css';

export default function TextOverlay() {
  const blendModes = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'hard-light',
    'soft-light',
    'hue',
    'color',
    'luminosity',
  ];

  const [blendMode, setBlendMode] = useState<number>(4);
  useEffect(() => {
    function incrementBlendMode() {
      if (blendMode === (blendModes.length - 1)) {
        setBlendMode(0);
      } else {
        setBlendMode(() => blendMode + 1);
      }
    }

    const interval = setInterval(incrementBlendMode, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={styles.wrapper}
      style={{ mixBlendMode: blendModes[blendMode] }}
    >
      <div className={styles.motto}>
        Your campaign doesn&apos;t stop.
        <br />
        <span style={{ color: 'var(--red)' }}>
          Neither do we.
        </span>
      </div>
    </div>
  );
}
