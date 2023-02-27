import React, {
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../TableDetail.module.css';

export default function TableDetailCreate() {
  const [formDirty, setFormDirty] = useState('Заполните все поля');
  const [formError, setFormError] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();
  const { category } = useSelector((store) => store.categoryReducer);
  const [form, setForm] = useState({
    detail: '',
    price: '',
    categoryID: '',
  });

  useEffect(() => {
    if (formError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [formError]);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/detailCreate', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        setForm(res);
      })
      .catch(console.log);
    setForm({
      detail: '',
      price: '',
      categoryID: '',
    });
    navigate('/table');
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Link to="/table">
          <button className={styles.close}>❌</button>
        </Link>
        {(formError) && (
        <div style={{ color: 'red' }}>
          {formDirty}
        </div>
        )}
        <input className={styles.input} type="text" name="detail" value={form.detail || ''} onChange={(e) => handleInput(e)} />
        <input className={styles.input} type="number" step="1" min="1" max="100000" name="price" value={form.price || ''} onChange={(e) => handleInput(e)} />
        <select className={styles.input} name="categoryID" value={form.categoryID || ''} onChange={(e) => handleInput(e)}>
          <option>Категории</option>
          {category?.map((el) => <option key={el.id} value={el.id}>{el.category}</option>)}
        </select>
        <button disabled={!formValid} className={styles.button} type="submit">Submit</button>
      </form>
    </div>

  );
}
