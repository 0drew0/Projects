import React from 'react'
import styles from '../styles/Home.module.css'
import { BsCircleFill } from 'react-icons/bs'

const StepsJumps = ({ step, num }) => {
  return (
    <div className={styles.fullCirc}>
      <div className={styles.blockCirc}>
        <BsCircleFill className={styles.BsCircle} />
        <h1 className={styles.textIN}>{num}</h1>
        <p className={styles.textCirc}> {step} </p>
      </div>
    </div>
  )
}
export default StepsJumps
