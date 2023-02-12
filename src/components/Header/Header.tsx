import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxProvider,Parallax } from 'react-scroll-parallax'
import styles from './Header.module.scss'


export function Header(){
  const a = [0, window.innerWidth / 2];
  return(
      <Parallax 
      translateX= {[0,-100]}
      startScroll={0}
      endScroll={100}
      className = {styles.headerText}>
            <h1>{"Us so far <3"}</h1>
      </Parallax>)
};

export default Header