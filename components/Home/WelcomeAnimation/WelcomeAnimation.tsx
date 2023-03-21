import React, { useState } from 'react';
import {
  useSpringRef,
  useChain,
  useSpring,
  animated,
} from '@react-spring/web';
import TopBackground from './TopBackground';
import BottomBackground from './BottomBackground';
import Logo from './Logo/Logo';
import welcomeStyles from './Welcome.module.css';

export default function WelcomeAnimation() {
  const [strokeColor, setStrokeColor] = useState<string>('white');
  const [displayBg, setDisplayBg] = useState<boolean>(true);
  // refs for differen animation springs
  // background refs
  const topBgRefOne = useSpringRef();
  const bottomBgRefOne = useSpringRef();
  const topBgRefTwo = useSpringRef();
  const bottomBgRefTwo = useSpringRef();
  const topBgRefThree = useSpringRef();
  const bottomBgRefThree = useSpringRef();
  // NPA main logo refs
  const logoRefOneStroke = useSpringRef();
  const logoRefOneFill = useSpringRef();
  const logoRefOneChangeFill = useSpringRef();
  const logoRefTwoStroke = useSpringRef();
  const logoRefTwoFill = useSpringRef();
  const logoRefTwoChangeFill = useSpringRef();
  const logoRefThreeStroke = useSpringRef();
  const logoRefThreeFill = useSpringRef();
  const logoRefThreeChangeFill = useSpringRef();
  // NPA sub logo refs
  // NATIONAL refs
  const nOneNatRef = useSpringRef();
  const aOneNatRef = useSpringRef();
  const tNatRef = useSpringRef();
  const iNatRef = useSpringRef();
  const oNatRef = useSpringRef();
  const nTwoNatRef = useSpringRef();
  const aTwoNatRef = useSpringRef();
  const lNatRef = useSpringRef();
  // PUBLIC refs
  const pPubRef = useSpringRef();
  const uPubRef = useSpringRef();
  const bPubRef = useSpringRef();
  const lPubRef = useSpringRef();
  const iPubRef = useSpringRef();
  const cPubRef = useSpringRef();
  // AFFAIRS refs
  const aOneAffRef = useSpringRef();
  const fOneAffRef = useSpringRef();
  const fTwoAffRef = useSpringRef();
  const aTwoAffRef = useSpringRef();
  const iAffRef = useSpringRef();
  const rAffRef = useSpringRef();
  const sAffRef = useSpringRef();
  // logo shrink refs
  const shrinkLogoRef = useSpringRef();

  // determines animation order and delay between each
  useChain([
    // background
    topBgRefOne,
    bottomBgRefOne,
    topBgRefTwo,
    bottomBgRefTwo,
    topBgRefThree,
    bottomBgRefThree,
    // main logo
    logoRefOneStroke,
    logoRefTwoStroke,
    logoRefThreeStroke,
    logoRefOneFill,
    logoRefTwoFill,
    logoRefThreeFill,
    logoRefOneChangeFill,
    logoRefTwoChangeFill,
    logoRefThreeChangeFill,
    // NATIONAL
    nOneNatRef,
    aOneNatRef,
    tNatRef,
    iNatRef,
    oNatRef,
    nTwoNatRef,
    aTwoNatRef,
    lNatRef,
    // PUBLIC
    pPubRef,
    uPubRef,
    bPubRef,
    lPubRef,
    iPubRef,
    cPubRef,
    // AFFAIRS
    aOneAffRef,
    fOneAffRef,
    fTwoAffRef,
    aTwoAffRef,
    iAffRef,
    rAffRef,
    sAffRef,
    // logo shrink
    shrinkLogoRef,
  ], [
    // **background**
    0.2, // topBgRefOne width
    0.21, // bottomBgRefOne width
    0.22, // topBgRefTwo height
    0.225, // bottomBgRefTwo height
    0.24, // topBgRefThree rotation
    0.24, // bottomRefThree rotation
    // **main logo**
    0.28, // logoRefOneStroke
    0.285, // logoRefTwoStroke
    0.29, // logoRefThreeStroke
    0.31, // logoRefOneFill
    0.32, // logoRefTwoFill
    0.33, // logoRefThreeFill
    0.34, // logoRefOneFillChange
    0.35, // logoRefTwoFillChange
    0.36, // logoRefThreeFillChange
    // NATIONAL
    0.65, // N1 in NATIONAL
    0.66, // A1 in NATIONAL
    0.67, // T in NATIONAL
    0.68, // I in NATIONAL
    0.69, // O in NATIONAL
    0.7, // N2 in NATIONAL
    0.71, // A2 in NATIONAL
    0.72, // L in NATIONAL
    // PUBLIC
    0.74, // P in PUBLIC
    0.75, // U in PUBLIC
    0.76, // B in PUBLIC
    0.77, // L in PUBLIC
    0.78, // I in PUBLIC
    0.79, // C in PUBLIC
    // AFFAIRS
    0.81, // A1 in AFFAIRS
    0.82, // F1 in AFFAIRS
    0.83, // F2 in AFFAIRS
    0.84, // A2 in AFFAIRS
    0.85, // I in AFFAIRS
    0.86, // R in AFFAIRS
    0.87, // S in AFFAIRS
    // shrink logo size
    1,
  ], 2000);

  const logoShrinkSpring = useSpring({
    ref: shrinkLogoRef,
    from: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    to: {
      width: '15vw',
      height: '15vh',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
  });

  return (
    <animated.div
      className={welcomeStyles.wrapper}
      style={logoShrinkSpring}
    >
      <TopBackground
        refOne={topBgRefOne}
        refTwo={topBgRefTwo}
        refThree={topBgRefThree}
        displayBg={displayBg}
      />
      <BottomBackground
        refOne={bottomBgRefOne}
        refTwo={bottomBgRefTwo}
        refThree={bottomBgRefThree}
        displayBg={displayBg}
      />
      <Logo
        // stroke color
        strokeColor={strokeColor}
        setStrokeColor={setStrokeColor}
        // trigger unmount of backgrounds
        setDisplayBg={setDisplayBg}
        // main NPA logo
        logoRefOneStroke={logoRefOneStroke}
        logoRefOneFill={logoRefOneFill}
        logoRefOneChangeFill={logoRefOneChangeFill}
        logoRefTwoStroke={logoRefTwoStroke}
        logoRefTwoFill={logoRefTwoFill}
        logoRefTwoChangeFill={logoRefTwoChangeFill}
        logoRefThreeStroke={logoRefThreeStroke}
        logoRefThreeFill={logoRefThreeFill}
        logoRefThreeChangeFill={logoRefThreeChangeFill}
        // NATIONAL
        nOneNatRef={nOneNatRef}
        aOneNatRef={aOneNatRef}
        tNatRef={tNatRef}
        iNatRef={iNatRef}
        oNatRef={oNatRef}
        nTwoNatRef={nTwoNatRef}
        aTwoNatRef={aTwoNatRef}
        lNatRef={lNatRef}
        // PUBLIC
        pPubRef={pPubRef}
        uPubRef={uPubRef}
        bPubRef={bPubRef}
        lPubRef={lPubRef}
        iPubRef={iPubRef}
        cPubRef={cPubRef}
        // AFFAIRS
        aOneAffRef={aOneAffRef}
        fOneAffRef={fOneAffRef}
        fTwoAffRef={fTwoAffRef}
        aTwoAffRef={aTwoAffRef}
        iAffRef={iAffRef}
        rAffRef={rAffRef}
        sAffRef={sAffRef}
      />
    </animated.div>
  );
}
