import React, { useState } from 'react';
import { animated, config, useSpring } from '@react-spring/web';

type Props = {
  toggle: boolean,
  data: string,
  fillColor: string,
}

export default function PartTwo({ toggle, data, fillColor }: Props) {
  const [length, setLength] = useState<number>(0);

  const strokeStyle = useSpring({
    strokeDasharray: 'length',
    strokeDashoffset: toggle ? 0 : length,
    config: config.slow,
  });

  const fillStyle = useSpring({
    fill: `rgba(30, 60, 84, ${toggle ? '1' : '0'})`,
    delay: 350,
    config: config.molasses,
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
