import TableCategory from './TableCategory/TableCategory';
import TableDetail from './TableDetail/TableDetail';
import styles from './Table.module.css';
import { Outlet } from 'react-router-dom';

export default function Table() {
  return (
    <div className={styles.main}>
      <div className={styles.containertTable}>
        <TableCategory />
        <TableDetail />
        <Outlet />
      </div>
    </div>
  );
}
