import React, {
  useState, useRef, useEffect, useMemo, useCallback,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import styles from './TableCategory.module.css';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useDispatch } from 'react-redux';
import { tableCategory } from '../../../store/actions/categoryAction';

export default function TableCategory() {
  const gridRef = useRef();
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'id', filter: true },
    { field: 'category', filter: true },
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(rowData);
        dispatch(tableCategory(rowData));
      })
      .catch(console.log);
  }, []);

  return (
    <div className={styles.containerCategory}>
      <div className="ag-theme-alpine-dark" style={{ width: 405, height: 450 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows
          rowSelection="multiple"
        />
      </div>
    </div>
  );
}
