import React, { useEffect, useState } from 'react'
import {Parallax } from 'react-scroll-parallax'
import {query, ref, orderByChild} from 'firebase/database' 
import { db } from '../../utils/firebase'
import styles from './LeftContainer.module.scss'

export function LeftContainer(){
  const [memory, setMemory] = useState()
  useEffect(() => {
    const memories = query(ref(db, 'memories'), orderByChild('title'));
    console.log(memories)
  }, [])
  
  

  return(
    <div>
        <Parallax 
        translateX={['-48vw', '90vw']}
        opacity = {[-1,4]}
        easing="easeInQuad"
        className = {styles.boxContainer}>
        <div className = {styles.imageBox}></div>
        <div className = {styles.textBox}></div>
        <div className = {styles.dateBox}></div>
        </Parallax>
    </div>
      )
};

export default LeftContainer