import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import BusinessStatus from './pages/BusinessStatus';
import Customers from './pages/Customers';
import Vendors from './pages/Vendors';
import Inventory from './pages/Inventory';
import Employee from './pages/Employee';
import Banking from './pages/Banking';
import Company from './pages/Company';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<BusinessStatus />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </MainLayout>
  );
}

export default App;