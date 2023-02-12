import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxProvider,Parallax } from 'react-scroll-parallax'
import styles from './Header.module.scss'

const Wrapper = (props) => (
  <ParallaxProvider>
    <div style={{ height: '300vh' }} className="vertical">
      <div className={styles.bannerContainer}>{props.children}</div>
      <div className = {styles.line}></div>
    </div>
  </ParallaxProvider>
);

export function Header(){
  const a = [0, window.innerWidth / 2];
  return(
    <Wrapper>
      <Parallax 
      translateX= {[0,100]}
      startScroll={0}
      endScroll={100}
      className = {styles.headerText}>
            <h1>Parallax</h1>
      </Parallax>
    </Wrapper>)
};

export default Header