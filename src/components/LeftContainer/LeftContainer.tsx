import React, { useEffect, useState } from 'react'
import {Parallax } from 'react-scroll-parallax'
import {query, ref, orderByChild} from 'firebase/database' 
import { db } from '../../utils/firebase'
import styles from './LeftContainer.module.scss'

import { collection, getDocs } from "firebase/firestore"; 


export function LeftContainer(){
  const [memory, setMemory] = useState()
  useEffect(() => {
    getData()
  }, [])
  
  async function getData(){
    const querySnapshot = await getDocs(collection(db, "memories"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
    });
  }

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