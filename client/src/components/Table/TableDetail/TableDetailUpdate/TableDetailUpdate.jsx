import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../TableDetail.module.css';

export default function TableDetailUpdate() {
  const navigate = useNavigate();
  const { category } = useSelector((store) => store.categoryReducer);
  const { detail } = useSelector((store) => store.detailReducer);
  const [position, setPosition] = useState([]);
  const [form, setForm] = useState({
    id: '',
    detail: '',
    price: '',
    categoryID: '',
  });

  useEffect(() => {
    setForm({
      id: detail?.id,
      detail: detail?.detail,
      price: detail?.price,
      categoryID: detail?.categoryID,
    });
  }, [detail]);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/:id', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json());
    setForm({
      id: detail?.id,
      detail: detail?.detail,
      price: detail?.price,
      categoryID: detail?.categoryID,
    });
    navigate('/table');
  };

  const handleDeleteLot = (e) => {
    const { id } = detail;
    e.preventDefault();
    fetch('http://localhost:3001/delete', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'удалено') {
          setPosition(position.filter((el) => el.id !== +id));
          setForm({
            id: '',
            detail: '',
            price: '',
            categoryID: '',
          });
        }
      })
      .catch(console.log);
    navigate('/table');
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Link to="/table">
          <button className={styles.close}>❌</button>
        </Link>
        <input className={styles.input} type="text" name="detail" value={form?.detail || ''} onChange={handleInput} />
        <input className={styles.input} type="number" step="1" min="1" max="100000" name="price" value={form?.price || ''} onChange={handleInput} />
        <select className={styles.input} name="categoryID" value={form.categoryID} onChange={handleInput}>
          {category?.map((el) => <option key={el.id} value={el.id}>{el.category}</option>)}
        </select>
        <div className={styles.formButtonUpdate}>
          <button className={styles.buttonUpdate} type="submit">Submit</button>
          <button className={styles.buttonDelete} type="button" onClick={handleDeleteLot}>Delete</button>
        </div>
      </form>
    </div>

  );
}
