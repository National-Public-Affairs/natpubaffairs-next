import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { animated, useTrail } from '@react-spring/web';
import useStore from '@/lib/store';
import useWindowSize from '@/hooks/useWindowDimensions';
import { motto } from './textData';
import styles from './TextOverlay.module.css';

export default function TextOverlay() {
  const { width, height } = useWindowSize();
  const dimensionsFlag = Boolean(width && height && width >= height);

  // gettting animation trigger state from global store
  const mottoTrigger = useStore((state) => state.mottoTrigger);

  // this will trigger the animation in-sync with the blend mode interval
  const springs = useTrail(6, {
    opacity: mottoTrigger ? 1 : 0,
  });

  return (
    <div
      className={styles.wrapper}
      style={{ mixBlendMode: 'hard-light' }}
    >
      <div
        className={styles.textWrapper}
        style={{
          width: dimensionsFlag ? '60%' : '85%',
        }}
      >
        {
          springs.map((props, idx) => (
            <>
              <animated.span
                key={uuidv4()}
                style={{ ...props, color: motto[idx].color }}
              >
                {motto[idx].text}
              </animated.span>
              <br key={uuidv4()} />
            </>
          ))
        }
      </div>
    </div>
  );
}
