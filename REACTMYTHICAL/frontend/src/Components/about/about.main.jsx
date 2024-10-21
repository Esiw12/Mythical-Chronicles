import React from 'react'
import styles from '../../Styles/about/about.module.css'

function About() {
  return (
    <>

<main className={styles.Main}>
  <div className={styles.MainContainer}> 
    <h1 className={styles.MainContainer__h1}>About us</h1>  
    <p className={styles.First__p}>The Mystical Chronicles company was created specifically to help players relax after a hard day. The purpose of our project is to provide<br />services of any level of complexity. We provide our clients with the opportunity to save their time and get what they want without<br />additional effort. We are always ready to help our clients master any game plots, levels, skills and achievements. The Mystical Chronicles<br />project helps clients master all levels of PvE and PvP content. Daily marketing research allows us to set fair prices for our products.</p>
    <p className={styles.Second__p}>We have assembled a small team of professional boosters, which allows us to start fulfilling any order. Each employee is verified through<br />our service and tested using a test task, so that we can guarantee 100% security of your accounts and minimize force majeure.</p>
    <p className={styles.Third__p}>Our company started its journey in 2024, and now, having gained experience, we are able to provide even the most complex services,<br />share tips and help solve game difficulties. Our professionalism will bring you only positive emotions and complete satisfaction from the<br />services received. We will continue to develop, so we are constantly expanding our product range and will soon begin to provide you<br />with services in other online games. Each of your feedback motivates us to develop, so do not forget to leave comments after your order<br />so that we can make our service even better.</p>
  </div>
</main>


    </>
  )
}

export default About
