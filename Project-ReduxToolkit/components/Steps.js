import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StepsJumps from './StepsJumps'
import Info from './Info'
import Plan from './Plan'
import AddOns from './AddOns'
import ThankYou from './ThankYou'

const stepsCircles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']
const stepsNum = ['1', '2', '3', '4']
const Steps = () => {
  const [state, setState] = useState(1)
  return (
    <div className={styles.mainStyle}>
      {state === 0 ? (
        <div className={styles.styleInfo}>
          <Info />
        </div>
      ) : (
        ''
      )}
      {state === 2 ? <Plan /> : ''}
      <ThankYou />
      <div className={styles.firstImageForm}>
        <Image
          className={styles.firstImage}
          width="300"
          height="700"
          src="/bg-sidebar-desktop.svg"
          alt="image"
        ></Image>
        {stepsCircles.map((item, index) => {
          return <StepsJumps step={item} key={index} num={stepsNum[index]} />
        })}
      </div>
    </div>
  )
}

export default Steps
