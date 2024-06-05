import React from 'react'
import styles from '../../Styles/contact/contact.module.css'

function Contact() {
  return (
    <>
<main>
  <h1>Contacts</h1>
  <div className={styles.contactcontainer}>
    <div className={styles.contactinfo}>
      <h2>The address of our office:</h2>
      <p>143026 Moscow, street General Belova. 6</p>
      <h2>Phone:</h2>
      <p>+7 (800) 112-28-93</p>
      <h2>Email:</h2>
      <p>info@mystical.ru <span className={styles.note}>(complaints and suggestions)</span></p>
      <p>chief@mystical.ru <span className={styles.note}>(write to the head)</span></p>            
      <h2>Operating mode of operators:</h2>
      <p>Mon – Fri 08:00 before 22:00 in Moscow</p>
      <p>Sat–Sun 10:00 before 20:00 in Moscow</p>
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2bb5db2eacf4658b71b4a7d9b405afc1e74ac65fcf51b5cb65d8b035709007df&source=constructor" width={869} height={493} frameBorder={0} />
  </div>
</main>


    </>
  )
}

export default Contact
