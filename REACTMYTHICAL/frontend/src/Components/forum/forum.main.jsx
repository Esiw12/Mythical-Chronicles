import React from 'react';
import styles from '../../Styles/forum/forum.module.css';
import fox from '../../Images/Avaforum.svg';

function Forum() {
  return (
    <main className={styles.forum_main}>
      <div className={styles.search__bar}>
        <div className={styles.title}>Make a request</div>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.forum_header}>Forum</div>
          <div className={styles.forum_post}>
            <div className={styles.post_header}>
              <div className={styles.post_avatar}>
                <img src={fox} className={styles.forum_avatar} alt="Avatar" />
              </div>
              <div className={styles.post_info}>
                <div className={styles.post_author}>Faifox</div>
                <div className={styles.post_role}>Heal for player</div>
                <div className={styles.post_timestamp}>21.05.2024 22:59</div>
                <div className={styles.post_likes}>1000 likes 235 answers</div>
              </div>
            </div>
            <div className={styles.line_block} />
            <div className={styles.post_content}>
              <h3>How do I find a game?</h3>
              <p>So, the peak of despair has come, when it's time to nag the post, hoping to find what you've been looking for for more than 13 years. And I'm looking for a computer game that has incredible childhood memories associated with it.</p>
            </div>
          </div>
          <div className={styles.forum_post}>
            <div className={styles.post_header}>
              <div className={styles.post_avatar}>
                <img src={fox} className={styles.forum_avatar} alt="Avatar" />
              </div>
              <div className={styles.post_info}>
                <div className={styles.post_author}>Faifox</div>
                <div className={styles.post_role}>Heal for player</div>
                <div className={styles.post_timestamp}>21.05.2024 22:59</div>
                <div className={styles.post_likes}>1000 likes 235 answers</div>
              </div>
            </div>
            <div className={styles.line_block} />
            <div className={styles.post_content}>
              <h3>How do I find a game?</h3>
              <p>So, the peak of despair has come, when it's time to nag the post, hoping to find what you've been looking for for more than 13 years. And I'm looking for a computer game that has incredible childhood memories associated with it.</p>
            </div>
          </div>
          <div className={styles.forum_post}>
    <div className={styles.post_header}>
        <div className={styles.post_avatar}>
            <img src={fox} className={styles.forum_avatar} alt="Avatar" />
        </div>
        <div className={styles.post_info}>
            <div className={styles.post_author}>Faifox</div>
            <div className={styles.post_role}>Heal for player</div>
            <div className={styles.post_timestamp}>21.05.2024 22:59</div>
            <div className={styles.post_likes}>1000 likes 235 answers</div>
        </div>
    </div>
    <div className={styles.line_block} />
    <div className={styles.post_content}>
        <h3>How do I find a game?</h3>
        <p>So, the peak of despair has come, when it's time to nag the post, hoping to find what you've been looking for for more than 13 years. And I'm looking for a computer game that has incredible childhood memories associated with it.</p>
    </div>
</div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebar_section}>
            <h3>Recent</h3>
            <div className={styles.user}>
              <div className={styles.user_avatar_fair} />
              <div>Faifox</div>
            </div>
            <div className={styles.user}>
              <div className={styles.user_avatar_kup} />
              <div>HeroNoName</div>
            </div>
            <div className={styles.user}>
              <div className={styles.user_avatar_god} />
              <div>NikitaGod</div>
            </div>
          </div>
          <div className={styles.sidebar_section}>
            <h3>Popular queries</h3>
            <div className={styles.query}>How to find the main villain in the game...???</div>
            <div className={styles.query}>What stones are the best to sharpen a piece of clothing??</div>
            <div className={styles.query}>Will the main character die?</div>
            <div className={styles.query}>Will the 6th part of GTA be released</div>
            <div className={styles.query}>How to find the main villain in the game...???</div>
            <div className={styles.query}>What stones are the best to sharpen a piece of clothing??</div>
            <div className={styles.query}>Will the main character die?</div>
            <div className={styles.query}>Will the 6th part of GTA be released</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Forum;
