import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <Menu />
      <div className={styles.containerMain}>
        <Outlet />
      </div>
    </>

  );
}
