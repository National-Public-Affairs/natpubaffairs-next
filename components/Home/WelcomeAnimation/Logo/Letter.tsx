import React, { useState } from 'react';
import type { SpringRef } from '@react-spring/web';
import { animated, config, useSpring } from '@react-spring/web';

type Props = {
  strokeRef: SpringRef,
  data: string,
  strokeColor: 'white' | 'other',
  fillColor: string,
}

export default function Letter({
  strokeRef,
  data,
  strokeColor,
  fillColor,
}: Props) {
  const [length, setLength] = useState<number>(0);

  const strokeStyle = useSpring({
    ref: strokeRef,
    from: {
      strokeDasharray: length,
      strokeDashoffset: length,
      fill: 'rgba(30, 60, 84, 0)',
      config: config.slow,
    },
    to: {
      strokeDasharray: length,
      strokeDashoffset: 0,
      fill: 'rgba(30, 60, 84, 1)',
      config: config.slow,
    },
  });

  const fillStyle = useSpring({
    ref: strokeRef,
    from: {
      fill: 'rgba(30, 60, 84, 0)',
      delay: 350,
      config: config.molasses,
    },
    to: {
      fill: 'rgba(30, 60, 84, 1)',
      delay: 350,
      config: config.molasses,
    },
  });

  return (
    <animated.path
      ref={(ref) => {
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }}
      d={data}
      style={{ ...strokeStyle, ...fillStyle }}
      stroke={fillColor}
      strokeWidth="1px"
    />
  );
}
