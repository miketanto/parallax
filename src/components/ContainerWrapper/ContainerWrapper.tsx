import React from 'react'
import styles from './ContainerWrapper.module.scss'

function ContainerWrapper(props){
  return(
      <div className = {styles.containerWrapper}>
        {props.children}
      </div>
      )
};

export default ContainerWrapper