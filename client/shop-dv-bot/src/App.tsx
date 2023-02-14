import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemsListPage } from './pages/ItemsListPage';
import { CartPage } from './pages/CartPage';
import { FinishPage } from './pages/FinishPage';
import { ErrorPage } from './pages/ErrorPage';
import { Navbar } from './features/Navbar/Navbar';

export function App() {
  return (
    <Box className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemsListPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/finish" element={<FinishPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </Box>
  );
};