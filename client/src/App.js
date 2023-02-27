import Table from './components/Table/Table';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import TableDetailCreate from './components/Table/TableDetail/TableDetailCreate/TableDetailCreate';
import TableDetailUpdate from './components/Table/TableDetail/TableDetailUpdate/TableDetailUpdate';
import Home from './components/Home/Home';
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="table" element={<Table />}>
          <Route path="createDetail" element={<TableDetailCreate />} />
          <Route path="editingDetail" element={<TableDetailUpdate />} />
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
