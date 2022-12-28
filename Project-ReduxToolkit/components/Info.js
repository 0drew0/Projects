import React from 'react'
import styles from '../styles/Home.module.css'

const Info = () => {
  return (
    <div className={styles.infoStyle}>
      <h1>Personel Info</h1>
      <p>Please provide your name, email address and phone number</p>
      <form>
        <lable>Name </lable>
        <input placeholder="Name"></input> <br />
        <lable>Email Address </lable>
        <input placeholder="email"></input> <br />
        <label>Phone Number </label>
        <input placeholder="e.g. 8-900-300-43-53"></input> <br />
        <button>Next Step</button>
      </form>
    </div>
  )
}

export default Info
