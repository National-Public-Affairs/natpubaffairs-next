import { animated, useTransition, useSpring } from '@react-spring/web';
import styles from './Background.module.css';

export default function BottomBackground({
  refOne,
  refTwo,
  refThree,
  displayBg,
}: any) {
  const transitions = useTransition(displayBg, {
    ref: refOne,
    from: {
      opacity: 0,
      width: '0%',
      height: '5%'
    },
    enter: {
      opacity: 1,
      width: '300%',
      height: '5%'
    },
    leave: {
      opacity: 0,
      width: '0%',
      height: '5%'
    },
  });

  const springOne = useSpring({
    ref: refTwo,
    from: {
      height: '5%',
    },
    to: {
      height: '300%',
    },
  });

  const rotateSpring = useSpring({
    ref: refThree,
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(-45deg)',
    },
  });

  return transitions((style, item) => (
    item && (
      <animated.div
        className={styles.bottom}
        style={{ ...style, ...springOne, ...rotateSpring }}
      />
    )
  ));
}
