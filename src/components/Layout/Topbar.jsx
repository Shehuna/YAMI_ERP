import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaBell, FaQuestionCircle, FaChevronDown, FaSync, FaDownload } from 'react-icons/fa';
import SearchBar from '../common/SearchBar';

const Topbar = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    switch(path) {
      case '/':
        return 'Business Status';
      case '/customers':
        return 'Customer & Sales';
      case '/vendors':
        return 'Vendors & Purchases';
      case '/inventory':
        return 'Inventory and Services';
      case '/employee':
        return 'Employee & Payroll';
      case '/banking':
        return 'Banking';
      case '/company':
        return 'Company';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      borderBottom: '1px solid #e9edf4',
      padding: '10px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      minHeight: '60px',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h2 style={{ 
          fontSize: '1.1rem', 
          fontWeight: '600',
          color: '#1a2636',
          letterSpacing: '-0.2px'
        }}>
          {getPageTitle()}
        </h2>
        <span style={{
          background: '#eef2f8',
          padding: '2px 12px',
          borderRadius: '40px',
          fontSize: '0.65rem',
          color: '#5a6f88',
          fontWeight: '500'
        }}>
          Q1 2026
        </span>
        <span style={{
          background: '#e8edf5',
          padding: '2px 10px',
          borderRadius: '4px',
          fontSize: '0.6rem',
          color: '#4f6580',
          fontWeight: '600',
          letterSpacing: '0.3px'
        }}>
          DEMO
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <SearchBar placeholder="Quick search..." />

        <div style={{
          background: '#f2f5fa',
          width: '34px',
          height: '34px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <FaBell style={{ fontSize: '0.85rem' }} />
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            background: '#dc3545',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            border: '2px solid white'
          }} />
        </div>

        <div style={{
          background: '#f2f5fa',
          width: '34px',
          height: '34px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}>
          <FaSync style={{ fontSize: '0.8rem' }} />
        </div>

        <div style={{
          background: '#f2f5fa',
          width: '34px',
          height: '34px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}>
          <FaDownload style={{ fontSize: '0.8rem' }} />
        </div>

        <div style={{
          background: '#f2f5fa',
          width: '34px',
          height: '34px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}>
          <FaQuestionCircle style={{ fontSize: '0.85rem' }} />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          padding: '3px 8px 3px 10px',
          borderRadius: '6px',
          background: '#f8faff',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            background: '#1e2a3a',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.7rem'
          }}>
            JD
          </div>
          <FaChevronDown style={{ fontSize: '0.6rem', color: '#7a8aa0' }} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;