import React from 'react'
import styles from '../styles/Home.module.css'

const Finishing = () => {
  return (
    <div className={styles.styleInfo}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirm</p>
      <div className={styles.plansLines}>
        <div className={styles.planAddons}>
          <h1>Arcade (Monthly)</h1>
          <p>Access to multiplayer games</p>
        </div>
        <div className={styles.planAddons}>
          <h1>Large storage</h1>
          <p>Extra 1TB cloud save</p>
        </div>
        <div className={styles.planAddons}>
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

export default Finishing
