import React, { useState, useEffect } from 'react';
import styles from "../../Styles/Igra/igra.module.css";
import hollowLogo from "../../Images/Game/hollowlogo.svg";
import zvezdi from "../../Images/Game/zvezdi.svg";
import russia from "../../Images/Game/russia.svg";
import kz from "../../Images/Game/kz.svg";
import china from "../../Images/Game/china.svg";
import faction1 from "../../Images/Game/faction1.svg";
import faction2 from "../../Images/Game/faction2.svg";
import coronca220 from "../../Images/Game/coronka220.svg";
import warzone from "../../Images/Game/warzone.svg";
import dota2 from "../../Images/Game/dota2.svg";
import hollow from "../../Images/Game/hollow.svg";
import gensh from "../../Images/Game/gensh.svg";
import Notification from '../Igra/Notification';

function Igra() {
  const [notification, setNotification] = useState(false); //состояние
  //Хук 
  useEffect(() => {
    const donationRange = document.getElementById('donationRange');
    const donationValue = document.getElementById('donationValue');

    if (donationRange && donationValue) {
      donationRange.addEventListener('input', () => {
        donationValue.textContent = donationRange.value;
      });
    }

    const flags = document.querySelectorAll(`.${styles.flags} .${styles.flag}`);
    const factions = document.querySelectorAll(`.${styles.factions} .${styles.faction}`);

    if (flags) {
      flags.forEach(flag => {
        flag.addEventListener('click', () => {
          flags.forEach(f => f.classList.remove(styles.selected));
          flag.classList.add(styles.selected);
        });
      });
    }

    if (factions) {
      factions.forEach(faction => {
        faction.addEventListener('click', () => {
          factions.forEach(f => f.classList.remove(styles.selected));
          faction.classList.add(styles.selected);
        });
      });
    }
  }, []);
  // функция устанавливает состояние notification в true
  const handleAddToCart = () => {
    setNotification(true);
  };
  //Закрывает
  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <>
     {notification && (
        <Notification
          message="Деньги будут списаны со счета, а игра добавлена в библиотеку."
          onClose={handleCloseNotification}
        />
      )}
      <main className={styles.container}>
        <div className={styles.content}>
          <img src={zvezdi} alt="Stars" />
          <h1>HEROIC DUNGEON KEYS</h1>
          <section className={styles.description}>
            <h2>Description</h2>
            <p>
              WoW TBC Heroic Dungeon Keys Unlock Boost - A service to help you
              access Burning Crusade dungeons on heroic difficulty. Our team
              will go through areas like Caverns of Time, Tempest Keep,
              Auchindoun, Coilfang Reservoir, Hellfire Citadel to get the keys
              to unlock all dungeons of Heroic difficulty. Buying WoW TBC Heroic
              Dungeon Keys Unlock Boost you free yourself from farm repetitions
              for this attunement, and get access in no time with a guarantee.
            </p>
          </section>
          <section className={styles.details}>
            <h2>You Will Get</h2>
            <ul>
              <li>Access to heroic mode in selected dungeons</li>
              <li>
                Reputation progress with TBC factions based on selected dungeons
              </li>
              <li>Gold and items received during the boost</li>
            </ul>
            <h2>Requirements</h2>
            <ul>
              <li>Account sharing (only login and password)</li>
              <li>70 level character</li>
              <li>Active WoW TBC Subscription</li>
            </ul>
          </section>
          <section className={styles.faq}>
            <h1>Questions & Answers</h1>
            <details>
              <summary>How can I write to you?</summary>
              <p>
                You can write to us in Skype / live chat / discord / email or
                here is a link to all contacts.
              </p>
            </details>
            <details>
              <summary>How to get Gladiator title in WoW Shadowlands?</summary>
              <p>Details about getting Gladiator title in WoW Shadowlands.</p>
            </details>
            <details>
              <summary>
                What do I get for the Gladiator achievement in WoW Shadowlands?
              </summary>
              <p>
                Details about Gladiator achievement rewards in WoW Shadowlands.
              </p>
            </details>
            <details>
              <summary>
                Why should I buy a WoW Gladiator title boost in Shadowlands?
              </summary>
              <p>
                Details about the benefits of buying a WoW Gladiator title boost
                in Shadowlands.
              </p>
            </details>
          </section>
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.product}>
            <img src={hollowLogo} alt="Hollow Knight" />
          </div>
          <div className={styles.options}>
            <h3>Your Region</h3>
            <div className={styles.flags}>
              <a href="#" className={styles.flag} data-region="ru">
                <img src={russia} alt="Russia" />
              </a>
              <a href="#" className={styles.flag} data-region="us">
                <img src={china} alt="China" />
              </a>
              <a href="#" className={styles.flag} data-region="eu">
                <img src={kz} alt="Kazakhstan" />
              </a>
            </div>
            <h3>Your Faction</h3>
            <div className={styles.factions}>
              <a href="#" className={styles.faction} data-faction="alliance">
                <img src={faction1} alt="Alliance" />
              </a>
              <a href="#" className={styles.faction} data-faction="horde">
                <img src={faction2} alt="Horde" />
              </a>
            </div>
            <h3>Option Buy</h3>
            <form>
              <label>
                <input type="radio" name="option" defaultValue="me" /> For Me
              </label>
              <br />
              <label>
                <input type="radio" name="option" defaultValue="friend" /> For
                Friend
              </label>
              <br />
              <label>
                <input type="radio" name="option" defaultValue="key" /> Key
              </label>
            </form>
            <h3>Option User Feedback</h3>
            <form>
              <label>
                <input type="radio" name="feedback" defaultValue="feedback" />{" "}
                Feedback
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="feedback"
                  defaultValue="no_feedback"
                />{" "}
                No Feedback
              </label>
              <br />
              <label>
                <input type="radio" name="feedback" defaultValue="later" />{" "}
                Later
              </label>
            </form>
            <h3>Make a Donation</h3>
            <div className={styles.donation}>
              <input
                type="range"
                min={1}
                max={2000}
                defaultValue={1500}
                id="donationRange"
              />
              <span id="donationValue">1500</span>
            </div>
            <div className={styles.addbuy}>
              <span>220</span>
              <img src={coronca220} alt="Currency" />
              <button className={styles.add_to_cart} onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </aside>
        <section className={styles.recommended}>
          <h2>RECOMMENDED PRODUCTS</h2>
          <div className={styles.product_list}>
            <div className={styles.product}>
              <a href="#">
                <img src={hollow} alt="Product 1" />
              </a>
            </div>
            <div className={styles.product}>
              <a href="#">
                <img src={warzone} alt="Product 2" />
              </a>
            </div>
            <div className={styles.product}>
              <a href="#">
                <img src={dota2} alt="Product 3" />
              </a>
            </div>
            <div className={styles.product}>
              <a href="#">
                <img src={gensh} alt="Product 4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Igra;
