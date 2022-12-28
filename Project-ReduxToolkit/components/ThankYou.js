import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const ThankYou = () => {
  return (
    <div className={styles.styleInfo}>
      <div className={styles.plansLines}>
        <div className={styles.planAddons}>
          <Image
            className={styles.firstImage}
            width="50"
            height="100"
            src="/icon-thank-you.svg"
            alt="image"
          ></Image>
        </div>
        <div className={styles.planAddons}>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
