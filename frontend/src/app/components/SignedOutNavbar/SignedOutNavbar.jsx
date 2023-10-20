import React from 'react'
import styles from './SignedOutNavbar.module.css';

const SignedOutNavbar = () => {
  
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="Logo.png"></img>
      <div className={styles.links}>
        <a className={styles.link} href="/login">Log in</a>
        <a className={styles.link} href="/signup">Sign up</a>
        <div className={styles.link}>About us</div>
      </div>
    </div>
  )
}

export default SignedOutNavbar;