import styles from '../../Styles/team/team.module.css';

export const createBubble = () => {
    const bubble = document.createElement('div'); //Создание пузыря
    bubble.className = styles.bubble; //Создание пузыря
    const size = Math.random() < 0.5 ? '50px' : '75px';
    bubble.style.width = size; //Установка размера пузыря
    bubble.style.height = size; //Установка размера пузыря
    bubble.style.left = Math.random() * 100 + '%'; //Установка позиции пузыря

    const colors = [styles.yellow, styles.orange, styles.lightyellow]; //Установка случайного цвета
    bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    document.querySelector('main').appendChild(bubble); //Добавление пузыря на страницу

    setTimeout(() => { //Удаление пузыря через 10 секунд
        bubble.remove();
    }, 10000);
};
