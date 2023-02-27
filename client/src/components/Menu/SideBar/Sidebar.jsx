import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.area}>
      <nav className={styles.main_menu}>
        <div className={styles.Logo}>
          Dashboard
        </div>
        <ul>
          <li>
            <Link className={styles.Link} to="/">
              <button className={styles.button} type="button">Home</button>
            </Link>
          </li>
          <li className={styles.has_subnav}>
            <Link className={styles.Link} to="/table">
              <button className={styles.button} type="button">Table</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
