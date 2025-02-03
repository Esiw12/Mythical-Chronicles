import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./App.css";

// JSON-сервер
const API_URL = "http://localhost:3001/seminars";

Modal.setAppElement("#root");

function App() {
  // Состояния
  const [seminars, setSeminars] = useState([]); // Данные семинаров
  const [selectedSeminar, setSelectedSeminar] = useState(null); // Выбранный семинар для редактирования
  const [modalIsOpen, setModalIsOpen] = useState(false); // Состояние модального окна
  const [confirmDelete, setConfirmDelete] = useState(null); // ID семинара для удаления
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Ошибка загрузки

  // Загружаем список семинаров при монтировании компонента
  useEffect(() => {
    setLoading(true);
    axios.get(API_URL)
      .then(response => {
        setSeminars(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка загрузки:", error);
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, []);

  //  Открытие модального окна редактирования
  const openEditModal = (seminar) => {
    setSelectedSeminar(seminar);
    setModalIsOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSeminar(null);
  };

  //  Обновление данных семинара
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSeminar(prev => ({ ...prev, [name]: value }));
  };

  //  Сохранение изменений семинара
  const saveChanges = () => {
    if (!selectedSeminar) return;

    axios.put(`${API_URL}/${selectedSeminar.id}`, selectedSeminar)
      .then(() => {
        setSeminars(seminars.map(s => s.id === selectedSeminar.id ? selectedSeminar : s));
        closeModal();
      })
      .catch(error => {
        console.error("Ошибка сохранения:", error);
        setError("Ошибка при сохранении изменений");
      });
  };

  // Подтверждение удаления семинара
  const confirmDeleteSeminar = (id) => {
    setConfirmDelete(id);
  };

  // Удаление семинара
  const deleteSeminar = () => {
    axios.delete(`${API_URL}/${confirmDelete}`)
      .then(() => {
        setSeminars(seminars.filter(s => s.id !== confirmDelete));
        setConfirmDelete(null);
      })
      .catch(error => {
        console.error("Ошибка удаления:", error);
        setError("Ошибка при удалении семинара");
      });
  };

  return (
    <div className="container">
      <h1>📅 Семинары</h1>

      {/*Обработка загрузки и ошибок */}
      {loading && <p className="loading">Загрузка...</p>}
      {error && <p className="error">{error}</p>}

      {/*Отображение списка семинаров */}
      <div className="seminar-list">
        {seminars.map(seminar => (
          <div key={seminar.id} className="seminar-card">
            <img src={seminar.photo} alt={seminar.title} />
            <h2>{seminar.title}</h2>
            <p>{seminar.description}</p>
            <p><strong>Дата:</strong> {seminar.date} | <strong>Время:</strong> {seminar.time}</p>
            <button className="edit-btn" onClick={() => openEditModal(seminar)}>✏️ Редактировать</button>
            <button className="delete-btn" onClick={() => confirmDeleteSeminar(seminar.id)}>🗑 Удалить</button>
          </div>
        ))}
      </div>

      {/* Модальное окно редактирования */}
      {modalIsOpen && selectedSeminar && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
          <h2>Редактирование семинара</h2>
          <input type="text" name="title" value={selectedSeminar.title} onChange={handleInputChange} placeholder="Название" />
          <textarea name="description" value={selectedSeminar.description} onChange={handleInputChange} placeholder="Описание" />
          <input type="date" name="date" value={selectedSeminar.date} onChange={handleInputChange} />
          <input type="time" name="time" value={selectedSeminar.time} onChange={handleInputChange} />
          <button className="save-btn" onClick={saveChanges}>💾 Сохранить</button>
          <button className="cancel-btn" onClick={closeModal}>❌ Отмена</button>
        </Modal>
      )}

      {/*Окно подтверждения удаления */}
      {confirmDelete !== null && (
  <div className="confirm-modal-overlay">
    <div className="confirm-modal">
      <p>Вы уверены, что хотите удалить этот семинар?</p>
      <div className="confirm-modal-buttons">
        <button className="confirm-btn" onClick={deleteSeminar}>✅ Да</button>
        <button className="cancel-btn" onClick={() => setConfirmDelete(null)}>❌ Нет</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
