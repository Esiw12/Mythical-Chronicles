import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Styles/stream/stream.module.css';
import Reactangle1 from '../../Images/stream/Rectangle 241.svg';
import Reactangle2 from '../../Images/stream/Rectangle 242.svg';
import Reactangle3 from '../../Images/stream/Rectangle 243.svg';
import Reactangle4 from '../../Images/stream/Rectangle 244.svg';
import papich from '../../Images/stream/papich.svg';
import skywhy from '../../Images/stream/skywhy.svg';
import ravshan from '../../Images/stream/ravshan.svg';
import fair from '../../Images/stream/fair.svg';
import Frame546 from '../../Images/stream/Frame 546.svg';
import dota from '../../Images/stream/dota.svg';
import Atomic from '../../Images/stream/Atomic.svg';
import gens from '../../Images/stream/gens.svg';
import gta5 from '../../Images/stream/gta5.svg';
import Phasma from '../../Images/stream/Phasma.svg';
import ter from '../../Images/stream/ter.svg';
import warzone from '../../Images/stream/warzone.svg';

function Stream() {
    const navigate = useNavigate();

    useEffect(() => {
        function updateTime() { //функция обновляет текущее время 
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
        }
    
        function openPanel() {
          document.getElementById('subscriptionsPanel').style.right = '0';
        }
        // функции управляют открытием и закрытием панели подписок.
        function closePanel() {
          document.getElementById('subscriptionsPanel').style.right = '-300px';
        }
    
        setInterval(updateTime, 1000);
        updateTime();
    
        document.getElementById('openPanelButton').addEventListener('click', openPanel);
        document.getElementById('closePanelButton').addEventListener('click', closePanel);
    
        return () => {
          document.getElementById('openPanelButton').removeEventListener('click', openPanel);
          document.getElementById('closePanelButton').removeEventListener('click', closePanel);
        };
      }, []);

    return (
        <>
            <div>
                <main className={styles.stream_main}>
                    <section className={styles.live_stream}>
                        <div className={styles.banner}>
                            <div className={styles.clock}>
                                <div className={styles.date}>22 May</div>
                                <div id="time">13:46:30</div>
                            </div>
                            <h1 className={styles.Live_h1}>Live Stream</h1>
                            <p className={styles.Explore_p}>Explore the game worlds with your favorite streamers</p>
                        </div>
                    </section>
                    <section className={styles.streams}>
                        <div className={styles.stream_card} onClick={() => navigate('/streamuser')}>
                            <img src={Reactangle1} alt="Stream 1" />
                            <img className={styles.streamer_Stream_1} src={papich} alt="Streamer 1" />
                            <img className={styles.In_Live} src={Frame546} alt="Live" />
                            <h3 className={styles.H3_stream}>Let's go play DOTA</h3>
                            <p className={styles.audience_200}>200 audience</p>
                        </div>
                        <div className={styles.stream_card} onClick={() => navigate('/streamuser')}>
                            <img src={Reactangle2} alt="Stream 2" />
                            <img className={styles.streamer_Stream_2} src={ravshan} alt="Streamer 2" />
                            <img className={styles.In_Live} src={Frame546} alt="Live" />
                            <h3 className={styles.H3_stream}>Phasmophobia #16</h3>
                            <p className={styles.audience_200}>200 audience</p>
                        </div>
                        <div className={styles.stream_card} onClick={() => navigate('/streamuser')}>
                            <img src={Reactangle3} alt="Stream 3" />
                            <img className={styles.streamer_Stream_3} src={skywhy} alt="Streamer 3" />
                            <img className={styles.In_Live} src={Frame546} alt="Live" />
                            <h3 className={styles.H3_stream}>Let's go play CS GO</h3>
                            <p className={styles.audience_200}>200 audience</p>
                        </div>
                        <div className={styles.stream_card} onClick={() => navigate('/streamuser')}>
                            <img src={Reactangle4} alt="Stream 4" />
                            <img className={styles.streamer_Stream_4} src={fair} alt="Streamer 4" />
                            <img className={styles.In_Live} src={Frame546} alt="Live" />
                            <h3 className={styles.H3_stream}>Tube Stream</h3>
                            <p className={styles.audience_200}>200 audience</p>
                        </div>
                    </section>
                    <div className={styles.H2_Categories}><h2>Categories</h2></div>
                    <section className={styles.categories}>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={dota} alt="DOTA" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={ter} alt="Terraria" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={warzone} alt="Warzone" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={gens} alt="Genshin Impact" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={Atomic} alt="Atomic" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={Phasma} alt="Phasmophobia" /></div>
                        <div className={styles.category_card} onClick={() => navigate('/streamuser')}><img src={gta5} alt="GTA 5" /></div>
                    </section>
                </main>
                <div className={styles.subscriptions} id="subscriptionsPanel">
                    <button className={styles.close_btn} id="closePanelButton">×</button>
                    <h3 className={styles.my_subscriptions}>My subscriptions</h3>
                    <ul>
                        <li><img src={ravshan} alt="Streamer 1" /> Kuplinov Play</li>
                        <li><img src={fair} alt="Streamer 2" /> FaiFox</li>
                        <li><img src={papich} alt="Streamer 3" /> EvilArthas</li>
                        <li><img src={skywhy} alt="Streamer 4" /> SKYWYHWALKER</li>
                    </ul>
                </div>
                <button className={styles.open_btn} id="openPanelButton">☰</button>
            </div>
        </>
    );
}

export default Stream;
