import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { animated, useTrail, SpringRef } from '@react-spring/web';
import useStore from '@/lib/store';
import useWindowSize from '@/hooks/useWindowDimensions';
import { motto } from './textData';
import styles from './TextOverlay.module.css';

type Props = {
  ref: SpringRef;
}

export default function Motto({ ref }: Props) {
  const { width, height } = useWindowSize();
  const dimensionsFlag = Boolean(width && height && width >= height);

  // gettting animation trigger state from global store
  const mottoTrigger = useStore((state) => state.mottoTrigger);

  // this will trigger the animation in-sync with the blend mode interval
  const springs = useTrail(6, {
    ref,
    from: {
      opacity: 0,
    },
    to: {
      opacity: mottoTrigger ? 1 : 0,
    },
  });

  return (
    <div
      className={styles.textWrapper}
      style={{
        width: dimensionsFlag ? '60%' : '85%',
      }}
    >
      {
        springs.map((props, idx) => (
          <div key={uuidv4()}>
            <animated.span
              style={{ ...props, color: motto[idx].color }}
            >
              {motto[idx].text}
            </animated.span>
            <br />
          </div>
        ))
        }
    </div>
  );
}
