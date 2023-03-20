import { animated, useTransition, useSpring } from '@react-spring/web';
import styles from './Background.module.css';

export default function TopBackground({
  refOne,
  refTwo,
  refThree,
  refFour,
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

  const heightSpring = useSpring({
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

  const translateSpring = useSpring({
    ref: refFour,
    from: {
      left: '0',
    },
    to: {
      left: '-1000px',
    },
  });

  return transitions((style, item) => (
    item && (
      <animated.div
        className={styles.top}
        style={{
          ...style,
          ...heightSpring,
          ...rotateSpring,
          ...translateSpring,
        }}
      />
    )
  ));
}
