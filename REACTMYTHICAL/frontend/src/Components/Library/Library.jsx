import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Library/library.module.css';
import genshin from '../../Images/Library/image 33.svg';
import Dota2 from '../../Images/Library/dota2.svg';
import phasma from '../../Images/Library/Phasma.svg';
import atomic from '../../Images/Library/Atomic.svg';
import Terraria from '../../Images/Library/Terraria.svg';
import cube from '../../Images/Library/cube.png';
import hollow from '../../Images/Library/logo_hollow.svg';

const games = [
    { name: 'Hollow Knight', image: hollow , path: '/'},
    { name: 'Genshin Impact', image: genshin },
    { name: 'Dota 2', image: Dota2 },
    { name: 'Phasmophobia', image: phasma },
    { name: 'Atomic Heart', image: atomic},
    { name: 'Terraria', image: Terraria }
  ];
  
  function GameList() {
    return (
        
            <div className={styles.main_container}>
              <div className={styles.sidebar_library}>
                <input type="text" placeholder="search" className={styles.search_bar} />
                <div className={styles.list_title}>LIST</div>
                <ul className={styles.game_list}>
                  {games.map((game, index) => (
                    <li key={index} className={styles.list_item}>
                      <img src={cube} alt="cube" className={styles.cube_icon} />
                      {game.path ? (
                        <Link to={game.path} className={styles.game_link}>
                          {game.name}
                        </Link>
                      ) : (
                        game.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.game_container}>
                <div className={styles.game_title}>My games</div>
                <div className={styles.game_grid}>
                  {games.map((game, index) => (
                    <div key={index} className={styles.game_card}>
                      {game.path ? (
                        <Link to={game.path}>
                          <img src={game.image} alt={game.name} className={styles.game_image} />
                        </Link>
                      ) : (
                        <img src={game.image} alt={game.name} className={styles.game_image} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        
  
  export default GameList;