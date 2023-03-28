import React from 'react';
import Part from './Part';
import Letter from './Letter';
import styles from './Logo.module.css';

function Logo({
  // logo stroke color
  strokeColor,
  setStrokeColor,
  // trigger background unmount
  setDisplayBg,
  // main NPA logo
  logoRefOneStroke,
  logoRefOneFill,
  logoRefOneChangeFill,
  logoRefTwoStroke,
  logoRefTwoFill,
  logoRefTwoChangeFill,
  logoRefThreeStroke,
  logoRefThreeFill,
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
}: any) {
  return (
    <svg
      id="Original_Logo"
      className={styles.wrapper}
      data-name="Original Logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1529.13 1181.6"
    >
      <Part
        partNum={1}
        strokeRef={logoRefOneStroke}
        fillRef={logoRefOneFill}
        changeFillRef={logoRefOneChangeFill}
        data="m268.63,765.79c-.06-1.85-.17-3.7-.17-5.54-.01-96.63-.02-193.25-.02-289.88l1.03-1.83c18.47,0,36.93-.02,55.4-.02.07,7.86.13,15.72.21,23.59.02,1.69.09,3.39.13,5.08-.05.72-.09,1.45-.19,3.11.94-1.21,1.34-1.71,1.73-2.21,1.07-.94,2.15-1.88,3.22-2.83,0,0,.09.42.09.42l-.03-.42c.35.02.54-.14.57-.48.29.05.43-.08.44-.37.27.03.42-.09.44-.36.21-.2.42-.39.64-.59h.23s.05-.23.05-.23c.26-.23.51-.45.77-.68,1.1-.91,2.2-1.82,3.31-2.73,0,0-.04.15-.04.15l.08-.18c.29.04.47-.08.53-.37.22-.19.45-.38.68-.57,2.08-1.53,4.15-3.06,6.23-4.6,0,0-.09.11-.09.11l.08-.13c.27.06.44-.04.52-.31.26-.2.53-.41.79-.61.51-.28,1.03-.57,1.54-.85,0,0-.13.02-.13.02v-.07c.28.04.48-.08.58-.35.26-.2.53-.39.79-.59.5-.31,1.01-.61,1.51-.92,0,0-.1.11-.1.11l.11-.14c.24.09.4,0,.47-.24.3-.21.6-.43.89-.64.64-.37,1.29-.74,1.93-1.1.48-.28.97-.57,1.45-.85l.24.04s.12-.21.12-.21c.32-.21.64-.42.96-.63,3.4-1.65,6.8-3.3,10.2-4.96.51-.24,1.02-.48,1.53-.72,1.65-.66,3.29-1.31,4.94-1.97.6-.24,1.21-.49,1.81-.73,2.18-.7,4.36-1.4,6.54-2.1.61-.22,1.23-.44,1.84-.66.64-.14,1.28-.28,1.92-.41.57-.18,1.14-.36,1.7-.54,1.91-.41,3.82-.83,5.72-1.24.84-.21,1.68-.41,2.52-.62,3.86-.32,7.73-.6,11.58-.99,2.68-.27,5.34-.68,8.01-1.02,3.42,0,6.84,0,10.26-.01,4.19-.32,8.25,2.2,12.5.63,2.01,1.87,4.5,1.47,6.9,1.45.59.18,1.18.36,1.77.53,2.88.72,5.76,1.45,8.65,2.17.51.2,1.03.39,1.54.59,3.52,1.34,7.04,2.67,10.56,4.01.53.26,1.07.52,1.6.78,0,0,.32.12.32.12.49.25.99.5,1.48.75.91.42,1.83.84,2.74,1.26.33.21.67.43,1,.64,0,0,.34.14.34.14.49.28.98.56,1.47.84,3.45,2.22,6.9,4.43,10.36,6.65.27.22.54.44.82.66l.11.24s.27,0,.27,0,.08.26.08.26l.23-.07c1.08.87,2.16,1.73,3.24,2.6.23.2.47.4.7.61.02.26.16.37.42.32,0,0,.06.26.06.26l.23-.07c4.06,4.05,8.12,8.11,12.18,12.16,0,0-.16.03-.16.03l.23.07c-.04.29.09.47.38.51.19.22.38.43.57.65,0,0,.2.26.2.26.23.27.47.55.7.82.61.78,1.21,1.56,1.82,2.34,0,0-.15-.04-.15-.04l.19.09c-.06.27.04.43.31.49.2.26.41.51.61.77.53.73,1.06,1.47,1.6,2.2,0,0-.02.32-.02.32l.3.13s.16.28.16.28c.23.32.47.64.7.96,1.19,1.93,2.38,3.85,3.57,5.78,0,0-.08.28-.08.28l.28.14s.11.25.11.25c.23.37.46.73.69,1.1,2.64,6.15,5.28,12.3,7.92,18.45.14.32.29.64.43.96.31,1,.61,2,.92,3,0,0-.14.24-.14.24l.24.2c.19.72.38,1.44.58,2.16-.04.11-.15.25-.12.32.1.2.26.37.39.55.75,4.3,1.58,8.59,2.23,12.91.65,4.3,1.11,8.62,1.66,12.94-.12.9-.23,1.8-.35,2.7-6.99,6.9-13.97,13.8-20.97,20.69-9.96,9.8-19.94,19.59-29.9,29.39-.28.28-.55.55-.83.83,0,0-.07.07-.07.07-.52-.29-1.04-.59-1.56-.88-.08-6,.01-12-.27-17.99-.45-9.49-.76-19-1.86-28.42-.77-6.59-1.27-13.39-4.35-19.52,0,0,.09-.39.09-.39l-.31-.27c-.99-2.51-1.98-5.01-2.98-7.52-.26-.54-.51-1.07-.77-1.61-.91-1.62-1.81-3.24-2.72-4.85-.33-.54-.66-1.08-1-1.62,0,0-.1-.19-.1-.19-.24-.32-.49-.65-.73-.97,0,0,0-.01,0-.01-.34-.5-.69-.99-1.03-1.49l.02-.24s-.23-.07-.23-.07c-.22-.26-.43-.52-.65-.79-2.51-2.52-5.03-5.05-7.54-7.57-.26-.22-.53-.44-.79-.66l-.08-.22s-.24.02-.24.02c-.49-.34-.99-.68-1.48-1.02,0,0-.04-.02-.03-.02-.31-.23-.62-.46-.94-.69,0,0-.26-.13-.26-.13-.52-.31-1.05-.63-1.57-.94-1.88-.94-3.76-1.89-5.64-2.83-.59-.24-1.18-.48-1.76-.73-4.25-1.23-8.32-3.25-12.92-3.01-.95-.26-1.89-.52-2.84-.79-1.22-.06-2.43-.11-3.65-.17-4.99-1.49-9.98-1.45-14.96,0-.91.07-1.81.13-2.72.2-1.25.25-2.51.51-3.76.76-3.24-.13-6.39.18-9.2,2-.89.28-1.77.55-2.66.83-.97.36-1.94.72-2.91,1.09-.6.24-1.2.49-1.81.73-3.1,1.56-6.21,3.12-9.31,4.68-.53.32-1.05.63-1.58.95,0,0-.24.12-.24.12-.33.23-.67.46-1,.69-.92.62-1.84,1.23-2.75,1.85-.51.35-1.01.7-1.52,1.05,0,0-.27.17-.26.16-.29.23-.57.46-.86.69-.36.28-.71.56-1.07.84-.48.36-.96.73-1.44,1.09h-.25s-.08.25-.08.25c-.24.21-.49.42-.73.64,0,0-.2.15-.2.15-.28.25-.55.49-.83.74-1.61,1.48-3.22,2.96-4.84,4.44-.95.96-1.91,1.93-2.86,2.89-1.17,1.3-2.35,2.61-3.52,3.91-.24.28-.48.55-.72.83,0,0-.17.23-.17.23-.19.23-.39.45-.59.68l-.27.11s-.03.28-.03.28c-.35.47-.7.94-1.04,1.42-.91,1.27-1.83,2.55-2.74,3.82-.22.29-.44.58-.65.87l-.22.09s.03.24.03.24c-.31.49-.62.98-.93,1.48-.35.6-.71,1.19-1.06,1.79-.23.35-.45.69-.68,1.04,0,0-.12.27-.12.27-.29.51-.58,1.02-.88,1.53-2.53,4.07-4.84,8.25-5.69,13.05-.34.15-.42.38-.24.69-.23.71-.45,1.41-.68,2.12,0,0-.28.26-.28.26l.11.35c-.27.97-.55,1.93-.82,2.9-.11.31-.22.62-.33.93-3.45,9.34-3.66,19.19-4.12,28.91-.69,14.63-.93,29.3-.98,43.95-.13,35.95-.03,71.91-.04,107.86,0,1.23-.11,2.46-.17,3.69-.27.25-.54.51-.81.76h-54.66c-.27-.25-.54-.51-.81-.76Z"
        strokeColor={strokeColor}
        setStrokeColor={null}
        fillColor="#1e3d54"
        setDisplayBg={null}
      />

      <Part
        partNum={2}
        strokeRef={logoRefTwoStroke}
        fillRef={logoRefTwoFill}
        changeFillRef={logoRefTwoChangeFill}
        data="m675.21,537.95c-1.01.87-2.02,1.73-3.03,2.6,0,0-.24-.06-.24-.06l-.06.27c-.27-.03-.42.09-.43.36-.21.19-.41.39-.62.58,0,0-.28.2-.28.2-.26.25-.52.49-.79.74,0,0-.15.13-.15.13-.28.26-.56.52-.83.78-2.25,2.09-4.57,4.1-6.74,6.27-12.97,12.94-25.91,25.9-38.86,38.87-.64.64-1.2,1.38-1.79,2.07-.55.32-1.1.64-1.64.96-7.47,7.41-14.95,14.83-22.42,22.24-.56.61-1.12,1.22-1.68,1.82-1.8,1.88-3.55,3.8-5.4,5.63-18.92,18.87-37.86,37.72-56.8,56.58-.18.26-.36.52-.54.78-.1,1.68-.28,3.35-.28,5.03-.02,25.65,0,51.29-.02,76.94,0,1.68-.12,3.37-.19,5.05-.28.26-.57.51-.85.77-5.97.05-11.94.15-17.91.14-12.25-.02-24.49-.11-36.74-.17-.25-.25-.5-.5-.75-.76,0-36.74.02-73.47.02-110.21.22-.34.44-.68.66-1.02,7.23-7.34,14.46-14.67,21.68-22.01,1.83-1.86,3.61-3.77,5.41-5.65.56-.61,1.12-1.21,1.67-1.82.58-.7,1.1-1.46,1.73-2.09,21.1-21,42.2-42,63.32-62.98.95-.95,2.14-1.65,3.22-2.47.72-.61,1.43-1.23,2.15-1.84,0,0,.11-.11.11-.11.27-.27.54-.54.81-.8,0,0,.12-.12.12-.12.27-.27.54-.53.8-.8,0,0,.12-.12.12-.12.27-.27.53-.53.8-.8,0,0,.13-.13.13-.12.27-.27.53-.53.8-.8,0,0,.13-.13.13-.13.27-.27.53-.53.8-.8,0,0,.13-.13.13-.13.27-.27.53-.53.8-.8,0,0,.13-.13.13-.13.27-.27.53-.54.8-.81,0,0,.12-.13.12-.12.22-.4.45-.79.67-1.19-.05-10.16-.12-20.32-.14-30.48-.02-14.63-.01-29.26,0-43.89,0-1.69.14-3.37.21-5.06,18.53.01,37.05.03,55.58.04,0,0,.34.05.34.05l.35-.02c.05,8.16.08,16.33.15,24.49.01,1.69.12,3.38.19,5.07-.03.64-.07,1.28-.1,1.92.32,0,.64.02.96.03.54-.66,1.09-1.33,1.63-1.99,1.75-1.5,3.5-3,5.25-4.5,0,0-.15-.04-.15-.04.23-.19.45-.37.68-.56.31.02.47-.12.5-.43l.28-.03s.1-.27.1-.27c.24-.21.49-.42.73-.63,1.07-.86,2.15-1.73,3.22-2.59,0,0,.23.07.23.07l.07-.26h.28s.11-.26.11-.26c.27-.22.53-.44.8-.65,1.73-1.23,3.47-2.45,5.2-3.68,0,0-.09.12-.09.12l.11-.16c.25.08.4,0,.46-.26.28-.21.57-.43.85-.64.48-.3.95-.61,1.43-.91,0,0-.05.14-.05.14l.13-.18h.28s.15-.23.15-.23c.3-.22.6-.43.9-.65,6.21-3.2,12.42-6.4,18.63-9.6.49-.23.97-.45,1.46-.68,1.06-.4,2.12-.79,3.18-1.19.5-.22,1-.44,1.5-.66,2.3-.75,4.61-1.5,6.91-2.25.48-.17.96-.35,1.44-.52,1.34-.35,2.67-.7,4.01-1.05.63-.24,1.26-.47,1.89-.71.94-.14,1.88-.28,2.82-.43.79-.2,1.58-.4,2.38-.6,4.42-.68,8.85-1.36,13.27-2.04,0,0,.42.15.42.15l.44-.02c3.69-.28,7.39-.57,11.08-.85,0,0,.03-.11.03-.11,4.98.01,9.96.02,14.95.03,0,0,.01.11.01.11,3.38.3,6.76.6,10.15.9.31.08.62.17.93.25,1.51.25,3.03.5,4.54.75.64.06,1.29.11,1.93.17.93.24,1.86.48,2.79.73.92.06,1.85.13,2.77.19.96.21,1.92.43,2.88.64.23-.09.45-.2.67-.32.36.2.72.4,1.08.6.7.21,1.41.42,2.11.63l1.58-.09s0,.36,0,.36c.71.22,1.42.44,2.13.66.82.04,1.64.09,2.46.13.62.22,1.24.45,1.86.67,1.87.76,3.74,1.53,5.61,2.29.62.23,1.23.46,1.85.69,4.26,1.72,8.66,3.15,12.75,5.21,31.81,16.08,55.58,40.24,71.8,71.89,1.04,2.02,1.78,4.2,2.66,6.3.24.33.49.65.73.98,1.87,5.5,3.75,11,5.62,16.49l.37.95c.17,1.58.34,3.16.52,4.74-.25.32-.5.64-.74.96,0,0-.14.14-.14.14-.26.26-.53.53-.79.79,0,0-.13.13-.13.13-.26.26-.53.53-.79.79,0,0-.13.13-.13.13-.26.26-.53.53-.79.79,0,0-.14.14-.13.13-.26.26-.53.53-.79.79,0,0-.14.14-.13.13-.26.26-.53.53-.79.79,0,0-.14.14-.13.13-.26.26-.53.53-.79.79,0,0-.13.13-.13.13-.26.26-.53.53-.79.79,0,0-.13.13-.13.13-.26.26-.53.53-.79.79,0,0-.13.13-.13.13-.27.26-.53.53-.8.79,0,0-.13.13-.13.13-.27.27-.54.53-.8.8,0,0-.12.12-.12.12-.27.27-.54.53-.81.8,0,0-.12.12-.12.12-.27.27-.54.54-.81.81,0,0-.12.12-.12.12-.27.27-.54.54-.81.81,0,0-.12.12-.12.12-.27.27-.54.54-.81.81,0,0-.11.11-.11.11-1.01.62-2.17,1.07-2.99,1.88-8.72,8.61-17.4,17.28-26.06,25.96-.46.46-.66,1.18-.98,1.77-1.71,1.68-3.42,3.35-5.13,5.03-.59.26-1.17.52-1.76.78-.32-.16-.64-.32-.97-.48,1.44-12.16-.61-24.03-3-35.87-.14-.35-.28-.71-.42-1.06-.29-.64-.57-1.28-.86-1.93-.17-.28-.34-.56-.5-.84-.14-.64-.27-1.29-.41-1.93l-.47-.98c-4.18-13.07-11.07-24.6-20.04-34.89-9.13-10.48-19.99-18.76-32.71-24.48-3.03-1.36-6.22-2.37-9.33-3.53-.62-.24-1.23-.48-1.85-.71-.32-.07-.64-.14-.95-.2-.92-.25-1.84-.51-2.76-.76-1.48-.39-2.96-.77-4.44-1.16-1.3-.26-2.6-.51-3.9-.77-.9-.03-1.81-.07-2.71-.1-.95-.26-1.89-.52-2.84-.78-1.52-.05-3.05-.11-4.57-.16-5.29-1.53-10.59-1.38-15.88,0l-2.73.21c-1.26.24-2.51.48-3.77.72-.91.07-1.81.13-2.72.2-1.2.26-2.4.51-3.6.77-1.27.34-2.53.68-3.8,1.02-.94.26-1.87.53-2.81.79-.3.07-.61.13-.91.2-.63.24-1.26.48-1.89.72-.3.07-.6.15-.9.22-.6.25-1.19.49-1.79.74-.94.37-1.89.75-2.83,1.12-.59.25-1.17.5-1.76.75-3.12,1.56-6.24,3.12-9.35,4.68-.54.31-1.07.62-1.61.93,0,0-.22.1-.22.1-.35.23-.7.47-1.05.7-.58.35-1.17.71-1.75,1.06-.49.31-.98.63-1.47.94l-.25-.03s-.11.22-.11.22c-.28.22-.57.43-.86.65,0,0-.1.06-.1.06-.47.32-.94.64-1.41.95h-.29s-.13.26-.13.26c-.25.2-.5.4-.75.6-.38.29-.77.59-1.15.88-.47.35-.95.69-1.42,1.04h-.27s-.1.27-.1.27c-.24.2-.48.41-.72.61,0,0-.21.15-.21.15-.29.25-.58.49-.87.74Z" 
        strokeColor={strokeColor}
        setStrokeColor={null}
        fillColor="#1e3c54"
        setDisplayBg={null}
      />

      <Part
        partNum={3}
        strokeRef={logoRefThreeStroke}
        fillRef={logoRefThreeFill}
        changeFillRef={logoRefThreeChangeFill}
        data="m1198.64,595.36c0-.95,0-1.89,0-2.84,1.22-1.4.12-1.59-.94-1.79-1.08-3.99-1.75-8.14-3.29-11.93-10.13-24.79-27.3-43.04-51.66-54.21-5.21-2.39-11.02-3.47-16.55-5.15-.91-.26-1.82-.52-2.72-.78l-1.91-.15c-.91-.25-1.81-.5-2.72-.76-1.85-.07-3.69-.13-5.54-.2-.93-.25-1.87-.5-2.8-.75-5.57,0-11.15.01-16.72.02-.3-.14-.59-.12-.88.05-.65.05-1.29.09-1.94.14-.3.18-.6.36-.9.55-1.27-.96-2.47-.1-3.69.16-.58.08-1.17.16-1.75.24-1.27.25-2.55.5-3.82.75-.49.19-.97.38-1.46.57-5.95.34-11.27,2.83-16.61,5.08-8.14,3.43-15.54,8.12-22.59,13.46-4.68,3.55-8.6,7.78-12.72,11.91-46.25,46.31-92.61,92.5-139,138.67-8.29,8.25-16.86,16.22-25.21,24.4-2.18,2.13-4.01,4.61-6.08,6.87-1.14,1.25-2.38,2.42-3.65,3.55-1.48,1.31-3.22,2.37-4.54,3.82-17.25,19.14-38.43,32.05-62.85,39.86-.88.28-1.74.64-2.61.96-.44.19-.88.37-1.32.56-3.27.73-6.53,1.47-9.8,2.2-.92.24-1.84.48-2.76.72-.62.06-1.24.12-1.86.18-.29.04-.59.07-.88.11-1.56.26-3.12.52-4.68.77-.95.25-1.89.51-2.84.76-2.14.07-4.28.14-6.42.21-.3-.14-.6-.12-.89.05-7.43.02-14.87.03-22.3.05-.59-.03-1.19-.07-1.78-.1-2.16-.06-4.32-.13-6.47-.19-.93-.26-1.86-.52-2.79-.78-1.34-.13-2.68-.25-4.02-.38-.52-.18-1.03-.35-1.54-.53-1.04-.12-2.08-.24-3.12-.35-.5-.19-1.01-.37-1.51-.56-.77-.1-1.55-.21-2.32-.31-.77-.23-1.55-.46-2.32-.68l-.42-.18s-.45.05-.45.05c-.63-.22-1.26-.45-1.89-.67-1.72-.43-3.44-.86-5.16-1.29-.44-.2-.89-.39-1.33-.59-13.76-4.77-26.82-10.94-38.68-19.48-3.5-2.52-6.86-5.24-10.32-7.83-1.21-.91-2.52-1.68-3.79-2.5-.46-.57-.91-1.16-1.8-2.3v3.19c-.06.61-.18,1.22-.18,1.83,0,42.84.02,85.69.04,128.53-1.69.08-3.38.22-5.07.22-17.12.02-34.24,0-51.37,0-.07-1.69-.21-3.38-.22-5.07-.01-66.28.03-132.55-.09-198.83,0-4.04,1.21-6.82,4.09-9.61,11.84-11.47,23.43-23.22,35.16-34.81,4.58-4.52,9.3-8.89,13.96-13.33.67-.04,1.35-.09,2.02-.13-2.55,24.86,1.7,48.4,15.61,69.33,13,19.56,31.35,32.44,54.16,38.61,5.89,1.59,11.84,3.15,18.04,2.9.25.01.5.03.75.04,6.52.05,13.04.1,19.56.15.29-.02.59-.03.88-.05.95-.05,1.9-.1,2.85-.16.24-.02.46-.09.66-.21,1.01-.17,2.01-.34,3.02-.51.29-.03.59-.06.88-.09,6.07-1.73,12.24-3.15,18.18-5.24,13.5-4.74,24.69-13.18,35.02-22.83,6.26-5.85,12.38-11.87,18.42-17.95,17.57-17.67,35.09-35.4,52.59-53.14,6.38-6.47,12.55-13.14,19-19.55,32.49-32.26,64.97-64.53,97.6-96.65,8.09-7.96,17.36-14.41,27.16-20.25,12.18-7.26,25.05-12.58,38.79-15.83,7.63-1.8,15.32-3.41,23.25-3.45,2.41-.01,4.8-.77,7.22-.95,9.93-.74,19.76.59,29.61,1.6.31.01.55-.11.73-.36.96.24,1.92.48,2.89.72.33.25.66.51.99.76,3.1.55,6.2,1.09,9.3,1.64.3.01.53-.11.7-.36,5.34,1.77,10.69,3.54,16.03,5.32.28.26.55.52.83.78,2.77,1.11,5.59,2.1,8.3,3.35,3.5,1.61,6.9,3.43,10.34,5.17.26.21.53.41.79.62,2.58,1.64,5.16,3.27,7.74,4.91.52.29,1.05.59,1.57.88,3.14,2.49,6.28,4.99,9.42,7.48.25.23.49.46.74.69,2.1,1.7,4.21,3.39,6.31,5.09.2.21.41.42.61.63l.3-1.16c.07-8.26.14-16.52.23-24.78.02-1.83.12-3.66.18-5.5.24-.24.47-.48.71-.72,14.65-.06,29.31-.13,43.96-.18,3.68-.01,7.36,0,11.49,0,.09,2.51.24,4.77.24,7.03.01,96.58,0,193.16,0,289.75,0,.77-.09,1.54-.14,2.31-.3.1-.61.2-.91.31-16.39-.04-32.79-.07-49.18-.12-1.83,0-3.66-.15-5.49-.23-.22-.27-.45-.54-.67-.8-.06-7.75-.12-15.5-.19-23.25-.02-1.82-.11-3.64-.17-5.46-.11-.49-.23-.99-.34-1.48-.52.46-1.04.91-1.57,1.37-7.98,5.69-15.91,11.44-23.98,17.01-2.24,1.55-4.88,2.51-7.33,3.75-.29.21-.59.43-.88.64,0,0-.01.02-.01.02-.62.3-1.24.6-1.86.9,0,0,0,0,0,0-.35.29-.7.59-1.05.88-7.99,2.86-15.98,5.71-23.97,8.57-.28.08-.56.15-.85.23-.96.24-1.92.48-2.87.72-.67.21-1.33.42-2,.63-2.11.38-4.22.76-6.33,1.14-.94.25-1.88.51-2.82.76-1.22.07-2.44.14-3.66.21-.51.15-1.02.3-1.53.45-2.27.15-4.54.3-6.8.46-.6.03-1.2.07-1.8.1-7.44.01-14.88.03-22.33.04-.9-.05-1.8-.11-2.7-.16-3.73-.35-7.45-.7-11.18-1.06-.9-.25-1.81-.5-2.71-.75-11.03-2.08-21.76-5.19-32.07-9.65-15.22-6.59-28.72-15.78-41.18-26.7-13.71-12.02-24.44-26.29-33.45-41.99-.53-.93-1.15-1.8-1.72-2.7-.1-.3-.31-.52-.61-.63-1.64-3.93-3.26-7.87-4.91-11.8-.59-1.41-1.25-2.8-1.88-4.19-.07-.3-.24-.52-.51-.66-.12-.68-.25-1.35-.37-2.03-.2-.25-.4-.51-.6-.76-.11-.67-.22-1.33-.33-2-.19-.26-.39-.52-.58-.78-.65-2.83-1.3-5.66-1.9-8.27,17.17-17.17,34.37-34.37,51.7-51.7,0,3.12-.08,6.36.02,9.6.1,3.23.28,6.47.59,9.69.33,3.37.71,6.75,1.34,10.08.6,3.17,1.47,6.3,2.38,9.4.94,3.23,1.95,6.45,3.13,9.6,1.12,2.98,2.51,5.86,3.78,8.79.22.24.44.47.66.71,3.82,5.76,7.36,11.74,11.54,17.23,6.32,8.31,14.05,15.23,22.8,20.96.88.58,1.72,1.23,2.58,1.84.35.21.69.43,1.04.64,5.88,2.73,11.7,5.64,17.67,8.15,8.24,3.47,16.88,5.29,25.87,5.21.62.02,1.25.05,1.87.07,2.77,0,5.54,0,8.3.01.32-.01.64-.03.96-.04,16.76-.38,32.02-5.74,46.38-14.05.59-.31,1.17-.63,1.76-.94,2.25-1.55,4.5-3.09,6.75-4.64.29-.07.49-.24.62-.51.6-.45,1.21-.9,1.81-1.36.33-.22.66-.44.99-.67,5.91-3.86,10.52-9.09,14.83-14.53,2.87-3.63,5.13-7.75,7.66-11.65.22-.23.45-.45.67-.68,1.63-3.48,3.26-6.96,4.89-10.44.23-.28.47-.56.7-.84.12-.65.23-1.3.35-1.95.29-.14.47-.37.55-.68.76-2.55,1.51-5.11,2.27-7.66.18-.26.37-.51.55-.77.09-.65.17-1.3.26-1.94,1.12-.24,2.02-.58.76-1.82.01-.94.03-1.88.04-2.82,1.07-.2,2.15-.4.93-1.79,1.43-9.06,2.32-18.16,1.72-27.33-.34-5.15-1.11-10.28-1.68-15.42,1.18-1.4.09-1.58-.96-1.78Z"
        strokeColor={strokeColor}
        setStrokeColor={setStrokeColor}
        fillColor="#d13f3f"
        setDisplayBg={setDisplayBg}
      />

      {/* N1 in NATIONAL */}
      <Letter
        strokeRef={nOneNatRef}
        data="m300.18,424.84c-1.95-3.36-3.9-6.72-5.85-10.08-.3-.54-.59-1.07-.89-1.61,0,0-.08-.19-.08-.19-.23-.38-.46-.75-.7-1.13-4.04-7.63-8.08-15.25-12.13-22.88-.31.09-.61.19-.92.28-.12,11.87-.24,23.74-.37,35.61-3.45,0-6.91,0-10.36,0-.08-5.06-.22-10.12-.22-15.18,0-13.36.05-26.73.08-40.09,4.2,0,8.39,0,12.59-.01,6.13,11.04,12.26,22.09,18.38,33.13.38.68.77,1.36,1.15,2.04.09.46.19.92.28,1.38.07.23.15.46.22.69.11-.2.23-.4.34-.61.1-7.17.21-14.34.29-21.51.05-5.04.06-10.08.09-15.12,3.55,0,7.09,0,10.64,0-.02,18.42-.04,36.84-.07,55.25-4.16,0-8.32,0-12.49,0Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* A1 in NATIONAL */}
      <Letter
        strokeRef={aOneNatRef}
        data="m353.69,375.04c.15.61.3,1.21.46,1.82.15.33.3.67.46,1,2.15,9.49,5.69,18.54,8.84,27.72.15.32.29.64.44.97,1.36,4.53,2.74,9.06,4.08,13.59.47,1.57.87,3.17,1.3,4.75-3.92,0-7.85.02-11.77.03-.26-.36-.52-.72-.78-1.07.2-.29.13-.53-.2-.69-.15-.65-.29-1.31-.44-1.96-.14-.33-.28-.66-.42-.99-.62-2.12-1.23-4.25-1.85-6.37.12-.31.09-.6-.08-.89-.5-.3-.99-.86-1.49-.86-5.03-.07-10.06-.1-15.08-.02-.61,0-1.22.68-1.83,1.05-.05.53-.09,1.06-.14,1.58-.12.31-.25.62-.37.92-.5,1.83-1.01,3.66-1.51,5.48-.15.34-.3.69-.45,1.03-.45.95-.9,1.89-1.34,2.84-3.96-.02-7.93-.04-11.89-.06,2.6-7.53,5.22-15.06,7.8-22.59.24-.71.29-1.49.43-2.24.15-.33.3-.66.45-.99.15-.61.31-1.23.46-1.84.14-.31.28-.62.41-.92,2.97-8.94,5.95-17.88,8.92-26.82,4.53.03,9.05.06,13.58.09.53,1.5,1.06,3,1.59,4.5.15.32.29.64.44.96Zm-8.55,7.76c-.24-.05-.47-.09-.71-.14-1.88,6.22-3.77,12.43-5.74,18.95h11.9c-1.88-6.49-3.67-12.65-5.45-18.81Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* T in NATIONAL */}
      <Letter
        strokeRef={tNatRef}
        data="m382.67,424.77c-.03-13.07-.05-26.13-.09-39.2,0-1.69-.13-3.37-.19-5.06-.89-.33-1.77-.9-2.67-.94-3.99-.18-7.99-.21-11.99-.3.04-3.23.09-6.47.13-9.7,1.84-.06,3.68-.18,5.52-.18,11.68-.04,23.37-.06,35.05-.08-.02,3.43-.04,6.86-.06,10.29-3.93-.02-7.86-.09-11.79-.02-.75.01-1.5.59-2.25.9-.1,4.13-.26,8.26-.28,12.39-.06,10.58-.06,21.17-.08,31.75-3.77.05-7.53.1-11.3.14Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* I in NATIONAL */}
      <Letter
        strokeRef={iNatRef}
        data="m428.48,369.6c.01,18.39.03,36.78.04,55.16-3.76-.04-7.53-.09-11.29-.13-.02-18.31-.04-36.62-.06-54.93,3.77-.03,7.54-.07,11.31-.1Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* O in NATIONAL */}
      <Letter
        strokeRef={oNatRef}
        data="m476.77,370.51c.66.67,1.32,1.34,1.99,2.01,0,0-.13-.07-.13-.07l.16.07c-.06.28.04.45.31.53.2.29.41.59.61.88.36,2.41.99,4.81,1.02,7.23.11,10.75-.1,21.5.11,32.24.12,6.39-2.44,10.58-8.54,12.55-8.03,0-16.07.02-24.1.03-.31-.04-.61-.08-.92-.12-.62-.25-1.23-.49-1.85-.74,0,0-.28-.09-.28-.09-.52-.32-1.04-.63-1.56-.95-3.12-2.93-4.27-6.56-4.24-10.79.09-10.63-.05-21.25.08-31.88.04-2.96-.14-5.94,1.96-8.7,1.4-1.85,2.74-3.02,4.95-3.3,9.03-.03,18.05-.05,27.07-.08.52.03,1.04.06,1.57.09.35.22.7.45,1.05.67,0,0,.3.15.3.15,0,0,.14.29.14.29l.31-.03Zm-24.05,8.92c-2.17.69-1.88,2.51-1.88,4.16-.01,9.15-.05,18.3.04,27.44.01,1.25.68,2.5,1.05,3.75.51.29,1.01.81,1.52.82,4.36.08,8.73.1,13.09.03.65-.01,1.29-.61,1.94-.93.34-.97.97-1.94.97-2.92.07-9.64.03-19.28.05-28.92,0-1.47-.23-2.75-1.76-3.39-5-1.24-10.01-1.18-15.02-.04Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* N2 in NATIONAL */}
      <Letter
        strokeRef={nTwoNatRef}
        data="m502.19,389.85c-.03,10.01-.06,20.02-.11,30.03,0,1.69-.12,3.38-.19,5.07-3.37,0-6.74,0-10.11,0-.07-8.88-.18-17.76-.18-26.64,0-9.65.09-19.3.14-28.94,4.03,0,8.05.02,12.08.02,2.74,4.72,5.47,9.43,8.21,14.15,0,0-.11.23-.11.23l.26.12c1.82,3.3,3.64,6.6,5.46,9.9,0,0-.14.15-.14.15l.25.12s.13.31.13.31c.23.36.45.72.68,1.08,1.6,3.03,3.2,6.07,4.8,9.1.34.6.69,1.21,1.03,1.81.17-.06.35-.12.52-.18-.03-.55-.06-1.11-.09-1.66.03-10.02.06-20.05.11-30.07,0-1.69.1-3.39.15-5.08,3.38.02,6.76.05,10.14.07.07,7.55.2,15.11.19,22.66,0,10.95-.12,21.9-.18,32.85-4.03.01-8.05.03-12.08.04-.33-.32-.66-.64-.99-.96-.29-.53-.59-1.06-.88-1.59,0,0-.09-.21-.09-.21-.23-.37-.46-.74-.69-1.12-4.69-8.6-9.39-17.2-14.08-25.8-.29-.53-.59-1.07-.88-1.6,0,0-.08-.2-.08-.2-.23-.37-.46-.75-.69-1.12-.4-.85-.79-1.7-1.19-2.55-.33-.57-.66-1.15-1.53-2.67.09,1.63.11,2.15.14,2.68Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* A2 in NATIONAL */}
      <Letter
        strokeRef={aTwoNatRef}
        data="m551.51,399.09l.46-1.84c.14-.31.28-.62.41-.92,2.97-8.94,5.95-17.88,8.92-26.82,4.53.03,9.05.06,13.58.09.53,1.5,1.06,3,1.59,4.5.15.32.29.64.44.96.15.61.3,1.21.46,1.82.15.33.3.67.46,1,2.15,9.49,5.69,18.54,8.84,27.72.15.32.29.64.44.97,1.36,4.53,2.74,9.06,4.08,13.59.47,1.57.87,3.17,1.3,4.75-3.92.01-7.85.02-11.77.03-.26-.36-.52-.71-.78-1.07.2-.29.13-.53-.2-.69-.15-.65-.29-1.31-.44-1.96-.14-.33-.28-.66-.42-.99-.62-2.12-1.23-4.25-1.85-6.37.12-.31.09-.6-.08-.89-.5-.3-.99-.86-1.49-.86-5.03-.07-10.06-.1-15.08-.02-.61,0-1.22.68-1.83,1.05-.05.53-.09,1.06-.14,1.58-.12.31-.25.62-.37.92-.5,1.83-1.01,3.66-1.51,5.48-.15.34-.3.69-.45,1.03l-1.34,2.84c-3.96-.02-7.93-.04-11.89-.06,2.6-7.53,5.22-15.06,7.8-22.59.24-.71.29-1.49.43-2.24.15-.33.3-.66.45-.99Zm22.04,2.57c-1.69-8.69-4.18-16.11-6.2-18.36-1.79,6.1-3.55,12.09-5.39,18.36h11.6Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* L in NATIONAL */}
      <Letter
        strokeRef={lNatRef}
        data="m600.98,425.2c-.15-1.19-.42-2.38-.42-3.57-.02-17.31,0-34.61,0-51.92,3.77-.03,7.54-.07,11.31-.1.04,13.06.07,26.13.13,39.19,0,1.68.13,3.37.2,5.05.29.26.58.51.88.77h22.29c0,3.8,0,7.1,0,10.4-11.46.06-22.93.12-34.39.18Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* P in PUBLIC */}
      <Letter
        strokeRef={pPubRef}
        data="m674.54,406.5c-.12,6.14-.25,12.29-.37,18.43-3.64-.02-7.27-.04-10.91-.06-.06-12.77-.13-25.55-.16-38.32-.01-5.69.07-11.39.1-17.08,10.49-.06,20.98-.13,31.48-.19,3.74,1.04,6.47,3.28,8.11,6.82,0,0-.11.34-.11.34l.27.26c.04,5.33-.06,10.67.17,15.99.26,5.98-1.61,10.61-8.54,12.84-5.81-.02-11.62-.08-17.43,0-.87.01-1.74.64-2.61.98Zm-.07-12.31c.57.36,1.14,1.03,1.72,1.04,4.21.09,8.43.08,12.64,0,.66-.01,1.3-.59,1.95-.91,1.43-3.37,1.45-10.4.04-13.8-.2-.22-.4-.63-.6-.63-5.12-.05-10.23-.06-15.35-.03-.12,0-.23.49-.35.75-.02,4.53-.04,9.06-.06,13.59Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* U in PUBLIC */}
      <Letter
        strokeRef={uPubRef}
        data="m739.88,414.7c.34-1.75.96-3.49.98-5.24.13-13.05.15-26.1.2-39.15.26-.26.53-.51.79-.77,3.37-.04,6.75-.08,10.12-.12.07,11.86.14,23.72.2,35.59.01,2.77-.13,5.56.03,8.32.36,6.41-2.37,10.64-8.51,12.62-7.72,0-15.45.02-23.17.03-.3-.04-.61-.08-.91-.12-.62-.25-1.23-.49-1.85-.74,0,0-.28-.09-.28-.09-.52-.32-1.04-.63-1.57-.95-3.32-3.01-4.25-6.86-4.23-11.19.07-14.4.03-28.79.04-43.19,3.77-.03,7.54-.07,11.31-.1.04,13.34.04,26.68.17,40.03.02,1.72.69,3.44,1.05,5.15.5.29,1.01.81,1.52.82,4.06.08,8.12.1,12.18.03.65-.01,1.29-.6,1.94-.93Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* B in PUBLIC */}
      <Letter
        strokeRef={bPubRef}
        data="m794.72,369.27c.38.01.76.03,1.15.04.48.2.96.4,1.45.6.35.14.69.28,1.04.42.31.23.62.45.93.68,0,0,.28.18.28.18.22.2.44.39.66.59l.07.28s.28.07.28.07c.2.2.39.41.59.61v.24s.22.07.22.07c.22.33.43.66.65.99,2.05,6.5,2.21,12.99.01,19.49-.24.29-.49.59-.73.88,0,0-.15.17-.14.17-.62.72-2.79.86-.95,2.51,0,0,.09.06.09.06.28.23.56.47.85.7,0,0,.24.2.23.2.23.24.47.47.7.71,0,0,.17.22.17.22.24.31.48.61.71.92,1.73,6.79,1.62,13.57-.03,20.36-.24.34-.48.68-.72,1.03,0,0-.13.21-.13.21-.21.24-.42.48-.64.72l-.26.06s-.05.26-.05.26c-.21.2-.42.4-.63.61h-.24s-.07.22-.07.22c-.29.22-.58.44-.88.66-1.19.35-2.37.7-3.56,1.05-1.22-.04-2.44-.11-3.66-.12-9.32-.06-18.64-.11-27.96-.16-.12-.18-.28-.22-.48-.12-.03-17.72-.06-35.43-.07-53.15,0-.74.26-1.49.4-2.23,10.24-.01,20.48-.03,30.72-.04Zm-19.46,21.44c.77.29,1.56.86,2.32.83,4.52-.18,9.03-.49,13.55-.76,1.75-3.01.72-6.25.61-9.38-.02-.62-1.48-1.67-2.3-1.69-4.72-.16-9.45-.08-14.17-.08v11.08Zm15.78,10.93c-5.18-1.31-10.38-1.05-15.59-.16-.1.02-.17.24-.26.36,0,4.31-.01,8.62-.02,12.93,3.15,1.25,12.02,1.34,15.8.15,1.9-.92,2.01-2.67,1.75-4.36-.45-2.91,1.35-6.15-1.27-8.73-.1-.1-.28-.13-.42-.2Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* L in PUBLIC */}
      <Letter
        strokeRef={lPubRef}
        data="m849.95,415.73c.02,3.05.03,6.09.05,9.14-11.35-.01-22.69-.02-34.04-.04-.27-.27-.53-.54-.8-.81v-53.71c.26-.26.53-.51.79-.77,3.37-.04,6.75-.08,10.12-.12.05,15.01.1,30.02.15,45.03.9,1.86,2.63,1.2,4.05,1.22,6.56.07,13.13.05,19.69.05Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* I in PUBLIC */}
      <Letter
        strokeRef={iPubRef}
        data="m869.59,369.43c.07,7.86.2,15.72.19,23.59,0,10.64-.12,21.28-.18,31.92-3.37-.04-6.74-.08-10.12-.12-.27-.26-.54-.52-.8-.79v-53.71c.26-.26.53-.51.79-.77,3.37-.04,6.75-.08,10.12-.12Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* C in PUBLIC */}
      <Letter
        strokeRef={cPubRef}
        data="m908.53,414.72c2.2-2.47.44-5.56,1.28-8.25,3.65-.03,7.3-.06,10.95-.08.06,3.22.19,6.44.15,9.66-.03,3.3-1.88,5.77-4.04,8.03-.52.32-1.04.63-1.56.95,0,0-.29.09-.29.09-.62.25-1.23.49-1.85.74-.31.04-.61.08-.92.12-7.72,0-15.44.01-23.17.02-1.93-.96-3.86-1.92-5.78-2.89-.26-.51-.53-1.03-.79-1.54,0,0-.15-.28-.15-.28-.22-.34-.44-.68-.66-1.02-.32-2.73-.88-5.45-.91-8.18-.11-10.61-.09-21.22-.02-31.83.03-5.92,2.05-8.82,7.29-10.89,8.38,0,16.76,0,25.13,0,5.58,1.15,7.26,5.35,7.81,10.26.32,2.87.25,5.78.35,8.68-3.93.09-7.86.18-11.79.27-.22-2.74-.43-5.48-.65-8.22-.43-.23-.85-.46-1.28-.7,0,0,.06-.24.06-.24-4.68-1.11-9.35-1.27-14.02.09,0,0,.04.24.04.24-.29.24-.57.49-.86.73-.28.98-.79,1.96-.79,2.94-.06,9.16-.1,18.32.03,27.47.02,1.33.95,2.65,1.46,3.98,3.72.25,7.43.59,11.16.69,1.26.03,2.54-.54,3.82-.84Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* A1 in AFFAIRS */}
      <Letter
        strokeRef={aOneAffRef}
        data="m985.37,393.6c2.21,9.47,5.6,18.57,8.84,27.71.15.32.29.64.44.97.06.61.12,1.21.19,1.82-3.86,1.81-7.9.58-11.86.69-.23-.58-.47-1.16-.7-1.73-.16-.37-.31-.74-.47-1.11-.24-.89-.47-1.78-.71-2.67-.1-.28-.2-.56-.29-.84-.13-.62-.26-1.24-.39-1.86-.16-.36-.31-.73-.47-1.09-.11-.54-.23-1.08-.34-1.62-.21-.38-.41-.75-.62-1.13-.54-.24-1.07-.68-1.61-.69-4.69-.06-9.38-.08-14.07-.01-.66,0-1.32.54-1.98.83-.08.3-.15.6-.23.89-1.34,1.63-1.74,3.54-1.63,5.6-.11.29-.21.57-.32.86-.57,1.55-1.13,3.09-1.7,4.64-1.63.04-3.28.22-4.9.08-2.15-.18-4.27-.62-6.41-.94.76-2.73,1.52-5.45,2.27-8.18.15-.33.3-.66.45-.99.15-.61.31-1.23.46-1.84l.42-.93c1.3-3.83,2.66-7.65,3.88-11.51,1.71-5.39,3.32-10.82,4.97-16.23.15-.33.3-.66.45-.99.15-.61.31-1.23.46-1.84.14-.31.28-.62.41-.92,1.31-3.93,2.63-7.86,3.94-11.79,4.38.23,8.76.46,13.15.68,2.34,6.79,4.67,13.57,7.01,20.36.15.32.29.64.44.96.15.6.3,1.21.45,1.81.15.34.3.67.46,1.01Zm-21.02,7.96c2.8,1.56,8.32,1.64,11.73.16-1.77-6.34-3.55-12.67-5.32-19.01-2.1,4.56-3.42,8.96-4.75,13.36-.55,1.83-1.1,3.66-1.65,5.49Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* F1 in AFFAIRS */}
      <Letter
        strokeRef={fOneAffRef}
        data="m1003.18,424.03v-53.71c.26-.26.53-.52.79-.79,12.01-.02,24.01-.04,36.02-.06,0,3.33.01,6.65.02,9.98-7.34.03-14.68.02-22.02.14-1.18.02-2.35.65-3.53,1-.05,3.57-.1,7.15-.16,10.72,1.34.4,2.68,1.1,4.03,1.13,5.6.14,11.2.09,16.81.1,0,3.04.02,6.08.02,9.12-5.59.04-11.19.02-16.77.18-1.35.04-2.68.69-4.01,1.06-.09,7.34-.19,14.68-.28,22.02-3.37-.04-6.74-.08-10.11-.12-.27-.26-.54-.52-.8-.79Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* F2 in AFFAIRS */}
      <Letter
        strokeRef={fTwoAffRef}
        data="m1060.48,402.76c-.09,7.34-.18,14.67-.26,22.01-3.76-.04-7.53-.09-11.29-.13-.01-18.3-.03-36.61-.04-54.91,3.66-.12,7.32-.35,10.97-.34,8.71.03,17.42.18,26.13.29.07,3.16.13,6.32.2,9.48-1.51.15-3.03.41-4.54.42-5.98.05-11.96-.02-17.94.06-1.07.02-2.12.57-3.18.88,0,3.39,0,6.78,0,10.17.29.25.58.5.87.75h19.43v10.36c-5.53,0-11.06-.05-16.58.05-1.26.02-2.5.59-3.76.91Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* A2 in AFFAIRS */}
      <Letter
        strokeRef={aTwoAffRef}
        data="m1100.39,413.1c-.05.53-.09,1.06-.14,1.58-.12.31-.25.62-.37.92-.5,1.83-1.01,3.66-1.51,5.48-.15.34-.3.69-.45,1.03-.45.95-.9,1.89-1.34,2.84-3.96-.02-7.93-.04-11.89-.06,2.6-7.53,5.22-15.06,7.8-22.59.24-.71.29-1.49.43-2.24.15-.33.3-.66.45-.99.15-.61.31-1.23.46-1.84.14-.31.28-.62.42-.92,2.97-8.94,5.95-17.88,8.92-26.82,4.53.03,9.05.06,13.58.09.53,1.5,1.06,3,1.59,4.5.15.32.29.64.44.96.15.61.3,1.21.46,1.82.15.33.3.67.46,1,2.15,9.49,5.69,18.54,8.84,27.72.15.32.29.64.44.97,1.36,4.53,2.74,9.06,4.08,13.59.47,1.57.87,3.17,1.3,4.75-3.92.01-7.85.02-11.77.03-.26-.36-.52-.72-.79-1.07.2-.29.13-.53-.2-.69-.15-.65-.29-1.31-.44-1.96-.14-.33-.28-.66-.42-.99-.62-2.12-1.23-4.25-1.85-6.37.12-.31.09-.6-.08-.89-.5-.3-.99-.86-1.49-.86-5.03-.07-10.06-.1-15.08-.02-.61,0-1.22.68-1.83,1.05Zm9.88-29.87l-1.13.24c-1.75,5.99-3.5,11.98-5.32,18.23h11.9c-1.87-6.35-3.66-12.41-5.45-18.47Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* I in AFFAIRS */}
      <Letter
        strokeRef={iAffRef}
        data="m1142.47,424.63c-.02-17.54-.05-35.09-.05-52.63,0-.9.26-1.8.4-2.69,3.64.09,7.29.18,10.93.26,0,18.4,0,36.8,0,55.19-3.76-.04-7.53-.09-11.29-.13Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* R in AFFAIRS */}
      <Letter
        strokeRef={rAffRef}
        data="m1178.16,405.52c-.1,6.42-.21,12.84-.31,19.25-3.77-.04-7.53-.09-11.3-.13-.01-18.31-.03-36.61-.04-54.92,1.67-.12,3.34-.33,5.01-.35,8.71-.08,17.43-.11,26.14-.16,2.93.33,5.02,2.12,7.06,4.02,0,0-.02.31-.02.31l.3.13c2.56,8.78,2.62,17.55-.05,26.32-.24.3-.48.6-.71.9,0,0-.17.22-.17.21-.24.24-.47.48-.71.72,0,0-.23.2-.23.2-.28.23-.56.46-.83.7,0,0-.13.08-.13.08-.52.3-1.05.6-1.58.91,0,0-.23.07-.23.07-2.1.86-.79,1.83-.08,2.77.29.65.57,1.31.86,1.96,0,0-.1.29-.1.29l.27.18,1.98,5.79c.25.32.49.64.74.96.26.36.52.72.77,1.08,0,0-.08.33-.08.33l.29.21c.9,2.54,1.8,5.07,2.7,7.61-3.94-.04-7.88-.08-11.83-.13-1.98-4.29-3.97-8.58-5.95-12.87-.25-.57-.5-1.13-.76-1.7-.67-1.58-1.35-3.17-2.02-4.75-3.04-1.34-6.07-1.34-8.97,0Zm0-25c0,4.31-.01,8.62-.02,12.92,1.38.32,2.77.93,4.14.89,3.9-.12,7.8-.52,11.69-.8,1.92-4.38,1.99-8.76,0-13.14-.37-.23-.75-.67-1.13-.67-4.6-.05-9.21-.06-13.81-.02-.3,0-.59.53-.89.81Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />

      {/* S in AFFAIRS */}
      <Letter
        strokeRef={sAffRef}
        data="m1240.16,403.83c-.91-.07-1.82-.14-2.73-.2-.64-.27-1.28-.54-1.92-.81,0,0-.4-.21-.4-.21,0,0-.45.07-.45.07-.95-.24-1.89-.47-2.84-.71-.35-.05-.7-.1-1.05-.15-1.2-.27-2.39-.55-3.59-.82-.3-.05-.6-.1-.9-.16-.62-.23-1.24-.45-1.86-.68-.93-.39-1.86-.78-2.79-1.17-.32-.22-.64-.44-.96-.66,0,0-.29-.16-.29-.16-.5-.39-.99-.78-1.49-1.17-2.4-2.82-3.34-6.07-3.04-9.77.16-1.98.14-3.98,0-5.96-.3-4.23.97-7.82,4.03-10.77,0,0,.3.03.3.03l.13-.29s.31-.16.31-.16c.35-.22.7-.45,1.05-.67.52-.03,1.04-.06,1.57-.09,8.15,0,16.3,0,24.45.01,5.46,1.25,6.63,5.65,7.26,10.25.29,2.09-.05,4.26-.1,6.39-3.6-.04-7.2-.07-10.8-.11-.26-1.83-.52-3.67-.79-5.5-.43-.24-.86-.47-1.3-.71,0,0,.07-.23.07-.23-4.37-1.12-8.74-1.18-13.11.04,0,0,.07.22.07.22-.35.25-.71.5-1.06.74-.23,2.44-.86,4.94-.52,7.29.15,1.05,2.25,1.82,3.47,2.72.59,0,1.18,0,1.76-.01.64.09,1.27.18,1.91.28.59.17,1.17.35,1.76.53,2.05,1.3,4.32,1.46,6.66,1.3.55.16,1.09.32,1.64.48,1.7.68,3.47,1.22,5.09,2.06,3.99,2.07,6.24,5.3,6.17,9.95-.04,2.45-.15,4.92.02,7.36.49,6.59-1.96,11.28-8.37,13.58-7.72,0-15.45,0-23.17-.01-6.14-1.97-8.92-6.2-8.5-12.6.11-1.69.12-3.38.18-5.07,3.57.04,7.13.08,10.7.12.44,2.11.88,4.23,1.32,6.34,4.81,1.58,9.66,1.09,14.52.27.1-.02.16-.25.23-.38,2.49-2.68,2.52-7.34.06-10.07-.91-.25-1.83-.49-2.74-.74Z"
        strokeColor={strokeColor}
        fillColor="#1e3c54"
      />
    </svg>
  );
}

export default Logo;
