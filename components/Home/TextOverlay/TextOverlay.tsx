import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { animated, useTrail } from '@react-spring/web';
import useStore from '@/lib/store';
import { motto } from './textData';
import styles from './TextOverlay.module.css';

export default function TextOverlay() {
  const blendModes = [
    'hard-light',
    // 'multiply',
    // 'normal',
    // 'screen',
    'darken',
  ];

  // gettting animation trigger state from global store
  const mottoTrigger = useStore((state) => state.mottoTrigger);

  // this will trigger the animation in-sync with the blend mode interval
  const springs = useTrail(7, {
    opacity: mottoTrigger ? 1 : 0,
  });

  // this cycles through the blend modes at every each set interval
  const [blendMode, setBlendMode] = useState<number>(0);
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
      style={{
        // mixBlendMode: blendModes[blendMode],
        mixBlendMode: 'hard-light',
      }}
    >
      <div className={styles.textWrapper}>
        {
          springs.map((props, idx) => (
            <animated.span
              key={uuidv4()}
              style={{ ...props, color: motto[idx].color }}
            >
              {motto[idx].text}
            </animated.span>
          ))
        }
      </div>
    </div>
  );
}
