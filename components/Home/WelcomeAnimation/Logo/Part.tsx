import { useState } from 'react';
import { animated, config, useSpring } from '@react-spring/web';
import type { SpringRef } from '@react-spring/web';

type Props = {
  partNum: 1 | 2 | 3,
  strokeRef: SpringRef,
  fillRef: SpringRef,
  changeFillRef: SpringRef,
  data: string,
  strokeColor: 'white' | 'other',
  setStrokeColor: Function | null,
  fillColor: string,
  setDisplayBg: Function | null,
}

export default function Part({
  partNum,
  strokeRef,
  fillRef,
  changeFillRef,
  data,
  strokeColor,
  setStrokeColor,
  fillColor,
  setDisplayBg,
}: Props) {
  const [length, setLength] = useState<number>(0);

  const strokeStyle = useSpring({
    ref: strokeRef,
    from: {
      strokeDasharray: length,
      strokeDashoffset: length,
      config: config.slow,
    },
    to: {
      strokeDasharray: length,
      strokeDashoffset: 0,
      config: config.slow,
    },
  });

  const fillStyle = useSpring({
    ref: fillRef,
    from: {
      fill: 'rgba(255, 255, 255, 0)',
      delay: 350,
      config: config.molasses,
    },
    to: {
      fill: 'rgba(255, 255, 255, 1)',
      delay: 350,
      config: config.molasses,
    },
    onResolve: () => {
      if (setDisplayBg && setStrokeColor) {
        setDisplayBg(false);
        setStrokeColor('other');
      }
    },
  });

  const changeFillStyle = useSpring({
    ref: changeFillRef,
    from: {
      fill: 'rgba(255, 255, 255, 1)',
    },
    to: {
      fill: strokeColor !== 'white' && partNum !== 3
        ? 'rgba(30, 60, 84, 1)'
          : strokeColor !== 'white' && partNum === 3
            ? 'rgba(209, 63, 63, 1)'
            : 'rgb(255, 255, 255, 1)',
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
      style={{ ...strokeStyle, ...fillStyle, ...changeFillStyle }}
      stroke={
        strokeColor !== 'white' && partNum !== 3
          ? '#1E3C54'
          : strokeColor !== 'white' && partNum === 3
            ? '#D13F3F'
            : '#FFF'
      }
      strokeWidth="1px"
    />
  );
}
