import React, { useEffect, useState } from 'react'
import {Parallax } from 'react-scroll-parallax'
import styles from './LeftContainer.module.scss'

export function LeftContainer(){
  return(
    <div>
        <Parallax 
        translateX={['-48vw', '90vw']}
        opacity = {[-1,4]}
        easing="easeInQuad"
        className = {styles.boxContainer}>
        <div className = {styles.imageBox}></div>
        <div className = {styles.textBox}></div>
        </Parallax>
    </div>
      )
};

export default LeftContainer