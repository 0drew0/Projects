import React from 'react'
import styles from '../styles/Home.module.css'
import { Switch, Spacer } from '@nextui-org/react'

const Plan = () => {
  return (
    <div className={styles.styleInfo}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div className={styles.plansLine}>
        <div className={styles.planS}>
          <h1>Arcade</h1>
          <p>9$/mo</p>
        </div>
        <div className={styles.planS}>
          <h1>Advanced</h1>
          <p>12$/mo</p>
        </div>
        <div className={styles.planS}>
          <h1>Pro</h1>
          <p>15$/mo</p>
        </div>
      </div>
      <div className={styles.switchDiv}>
        <p className={styles.switchDivText}>Monthly</p>
        <Spacer />
        <Switch checked={true} />
        <p className={styles.switchDivText}> Yearly</p>
      </div>
      <div>
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  )
}

export default Plan
