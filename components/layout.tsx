import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';
// add footer import here

type Props = {
  children?: ReactNode,
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}