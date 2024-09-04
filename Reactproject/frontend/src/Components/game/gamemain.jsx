import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProgressContext from "../ProgressContext";
import styles from "../../Style/game/main.module.css";
function GameMain() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  // Моковые данные для демонстрации
  const level = "Junior";
  const progress = 50; // Прогресс в процентах
  const items = [
    { id: 1, name: 'Книга "React для начинающих"', cost: 100 },
    // Другие предметы...
  ];

  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);
  const { completionPercentage, setCompletionPercentage } =
    useContext(ProgressContext);
  const [tasks, setTasks] = useState([
    "Напиши esiw",
    "Напиши wise",
    "Напиши esiw_yar",
    //
  ]);

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    const savedIndex = localStorage.getItem("currentTaskIndex");
    const savedCompletionPercentage = localStorage.getItem(
      "completionPercentage"
    );

    if (savedIndex) {
      setCurrentTaskIndex(parseInt(savedIndex, 10));
    }
    if (savedCompletionPercentage) {
      setCompletionPercentage(parseFloat(savedCompletionPercentage));
    }
  }, []);

  const executeCommand = (command) => {
    let outputText;
    let isValidCommand = false;

    if (command === "esiw" || command === "wise" || command === "esiw_yar") {
      outputText = "Ваяя";
      isValidCommand = true;
    } else {
      outputText = `Ответ не верен: ${command}`;
    }

    return { outputText, isValidCommand };
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const command = event.target.value;
      setInputValue("");

      const { outputText, isValidCommand } = executeCommand(command);

      setOutput((prevOutput) => [...prevOutput, `$ ${command}`, outputText]);

      if (isValidCommand) {
        setCurrentTaskIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % tasks.length;
          const newCompletionPercentage = (newIndex / tasks.length) * 100;

          // Сохраняем прогресс в localStorage
          localStorage.setItem("currentTaskIndex", newIndex.toString());
          localStorage.setItem(
            "completionPercentage",
            newCompletionPercentage.toString()
          );

          setCompletionPercentage(newCompletionPercentage);

          return newIndex;
        });
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftpanel}>
          <div className={styles.terminal}>
            <div className={styles.output}>
              {output.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>

            <div className={styles.inputcontainer}>
              <span>$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </div>
          </div>
          <div className={styles.taskpanel}>
            <h2>Задание</h2>
            <ul>
              <li>{tasks[currentTaskIndex]}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        {/* Переключатель между прогрессом и магазином */}
        <button onClick={() => setIsShopOpen(!isShopOpen)}>
          {isShopOpen ? "Показать прогресс" : "Открыть магазин"}
        </button>

        {/* Отображение прогресса */}
        {!isShopOpen && (
          <div className={styles.progressSection}>
            <h1>Уровень: {level}</h1>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Отображение магазина */}
        {isShopOpen && (
          <div className={styles.shopSection}>
            <h1>Магазин</h1>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.cost} очков
                  <button>Купить</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default GameMain;
