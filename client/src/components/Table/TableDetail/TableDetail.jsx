import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, {
  useState, useRef, useEffect, useMemo, useCallback,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useDispatch } from 'react-redux';
import { updatedDetail, detailRendering } from '../../../store/actions/detailAction';
import { Link } from 'react-router-dom';
import styles from './TableDetail.module.css';

export default function TableDetail() {
  const dispatch = useDispatch();
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'detail', filter: true },
    { field: 'price', filter: true },
    { field: 'categoryID', filter: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = (event) => {
    dispatch(updatedDetail(event.data));
  };

  useEffect(() => {
    fetch('http://localhost:3001/detail', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(detailRendering(res.detail));
        setRowData(res.detail);
      });
  }, []);

  const buttonReboot = () => fetch('http://localhost:3001/detail', {
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((res) => {
      setRowData(res.detail);
    });

  return (
    <div className={styles.detailContainer}>
      <div className="ag-theme-alpine-dark" style={{ width: 603, height: 450 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
        />
      </div>
      <div className={styles.containerButton}>
        <button className={styles.buttonReboot} onClick={buttonReboot}> 🔄 Reboot Table</button>
        <Link to="/table/createDetail">
          <button className={styles.button} type="button">Create</button>
        </Link>
        <Link to="/table/editingDetail">
          <button className={styles.button} type="button">Editing</button>
        </Link>
      </div>
    </div>
  );
}
