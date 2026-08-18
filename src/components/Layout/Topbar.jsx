import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBell, FaSync, FaPrint, FaCalendarAlt } from 'react-icons/fa';

const Topbar = () => {
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

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

  // Format date: "MM/dd/yy"
  const formatDateMMDDYY = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
  };

  // Format period date: "MM/dd/yy"
  const formatPeriodDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
  };

  // Get current month number (1-12)
  const getMonthNumber = () => {
    return currentDate.getMonth() + 1;
  };

  // Get period start date (first day of current month)
  const getPeriodStart = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1);
  };

  // Get period end date (last day of current month)
  const getPeriodEnd = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0);
  };

  // Get period display: "Period 8 (08/01/26 - 08/31/26)"
  const getPeriodDisplay = () => {
    const start = getPeriodStart();
    const end = getPeriodEnd();
    return `Period ${getMonthNumber()} (${formatPeriodDate(start)} - ${formatPeriodDate(end)})`;
  };

  return (
    <div style={{
      background: '#ffffff',
      borderBottom: '1px solid #e9edf4',
      padding: '8px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      minHeight: '50px',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h2 style={{ 
          fontSize: '1rem', 
          fontWeight: '600',
          color: '#1a2636',
          letterSpacing: '-0.2px'
        }}>
          {getPageTitle()}
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Notification Bell */}
        <div style={{
          background: '#f2f5fa',
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <FaBell style={{ fontSize: '0.8rem' }} />
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

        {/* Refresh/Sync Icon */}
        <div style={{
          background: '#f2f5fa',
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}>
          <FaSync style={{ fontSize: '0.75rem' }} />
        </div>

        {/* Print Icon */}
        <div style={{
          background: '#f2f5fa',
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d4e66',
          border: '1px solid #e2e8f0',
          cursor: 'pointer'
        }}>
          <FaPrint style={{ fontSize: '0.8rem' }} />
        </div>

        {/* System Date Display */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          borderRadius: '6px',
          background: '#f8faff',
          border: '1px solid #e2e8f0',
          height: '32px'
        }}>
          <FaCalendarAlt style={{ fontSize: '0.7rem', color: '#7a8aa0' }} />
          <span style={{ 
            fontSize: '0.7rem', 
            color: '#1a2636',
            fontWeight: '500',
            lineHeight: '1'
          }}>
            {formatDateMMDDYY(currentDate)}
          </span>
        </div>

        {/* Period Display with Start and End Dates */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 12px',
          borderRadius: '6px',
          background: '#f0f4ff',
          border: '1px solid #dce3ef',
          height: '32px'
        }}>
          <span style={{ 
            fontSize: '0.7rem', 
            color: '#2c6bff',
            fontWeight: '600',
            lineHeight: '1'
          }}>
            {getPeriodDisplay()}
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default Topbar;