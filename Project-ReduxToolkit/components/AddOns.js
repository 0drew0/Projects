import React from 'react'
import styles from '../styles/Home.module.css'
import { Checkbox } from '@nextui-org/react'

const AddOns = () => {
  return (
    <div className={styles.styleInfo}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div className={styles.plansLines}>
        <div className={styles.planAddons}>
          <Checkbox defaultSelected>Option</Checkbox>
          <h1>Online Service</h1>
          <p>Access to multiplayer games</p>
        </div>
        <div className={styles.planAddons}>
          <Checkbox defaultSelected>Option</Checkbox>
          <h1>Large storage</h1>
          <p>Extra 1TB cloud save</p>
        </div>
        <div className={styles.planAddons}>
          <Checkbox defaultSelected>Option</Checkbox>
          <h1>Customizable profile</h1>
          <p>Custom theme on your profile</p>
        </div>
      </div>
      <div className={styles.switchDiv}></div>
      <div>
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  )
}

export default AddOns
