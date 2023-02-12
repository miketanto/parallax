import React, { useEffect, useState } from 'react'
import {Parallax } from 'react-scroll-parallax'
import styles from './RightContainer.module.scss'

export function RightContainer(){
  return(
    <div>
      <Parallax 
        translateX={['108vw', '-21vw']}
        opacity = {[0.01,2]}
        easing="easeInQuad"
      className = {styles.boxContainer}>
        <div className = {styles.imageBox}></div>
        <div className = {styles.textBox}></div>
      </Parallax>
    </div>
      )
};

export default RightContainer