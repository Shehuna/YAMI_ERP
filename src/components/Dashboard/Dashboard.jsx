import React from 'react';
import StatsCards from './StatsCards';
import RecentOrders from './RecentOrders';

const Dashboard = () => {
  return (
    <div>
      <StatsCards />
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <h3 style={{ 
            fontSize: '1rem', 
            fontWeight: '600', 
            color: '#1f2a3c' 
          }}>
            Recent Orders
          </h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{
              background: 'white',
              border: '1px solid #dce3ef',
              padding: '4px 14px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#3d4e66',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Export
            </button>
            <button style={{
              background: '#2c6bff',
              border: 'none',
              padding: '4px 16px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              New Order
            </button>
          </div>
        </div>
        <RecentOrders />
      </div>

      <div style={{
        marginTop: '20px',
        color: '#6f83a0',
        fontSize: '0.7rem',
        borderTop: '1px solid #e2eaf2',
        paddingTop: '16px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>© 2026 Sage 50 Clone · ERP Demo</span>
        <span>Last updated: August 16, 2026 · 2:34 PM</span>
      </div>
    </div>
  );
};

export default Dashboard;