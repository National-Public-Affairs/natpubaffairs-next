import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { animated, useTrail, useSpringRef, useChain } from '@react-spring/web';
import useStore from '@/lib/store';
import useWindowSize from '@/hooks/useWindowDimensions';
import Motto from './Motto';
import styles from './TextOverlay.module.css';

export default function TextOverlay() {
  // gettting animation trigger state from global store
  const mottoTrigger = useStore((state) => state.mottoTrigger);

  // refs keep track of animation steps
  const mottoRef = useSpringRef();
  const descRef = useSpringRef();
  // orchestrates animation steps
  useChain([mottoRef, descRef]);

  return (
    <div
      className={styles.wrapper}
      style={{ mixBlendMode: 'hard-light' }}
    >
      <Motto ref={mottoRef} />
    </div>
  );
}
