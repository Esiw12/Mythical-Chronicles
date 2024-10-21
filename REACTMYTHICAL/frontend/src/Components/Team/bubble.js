import styles from '../../Styles/team/team.module.css';

export const createBubble = () => {
    const bubble = document.createElement('div'); 
    bubble.className = styles.bubble; 
    const size = Math.random() < 0.5 ? '50px' : '75px';
    bubble.style.width = size; 
    bubble.style.height = size; 
    bubble.style.left = Math.random() * 100 + '%'; 

    const colors = [styles.yellow, styles.orange, styles.lightyellow]; 
    bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    document.querySelector('main').appendChild(bubble); 

    setTimeout(() => { 
        bubble.remove();
    }, 10000);
};
