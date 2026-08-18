import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatsCards = () => {
  const stats = [
    { label: 'Total Revenue', value: '$128,430', trend: '+12.5%', up: true },
    { label: 'Outstanding', value: '$34,280', trend: '-3.2%', up: false },
    { label: 'Orders (MTD)', value: '342', trend: '+8.1%', up: true },
    { label: 'Inventory Value', value: '$97,200', trend: '+2.4%', up: true },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '18px',
      marginBottom: '28px'
    }}>
      {stats.map((stat, index) => (
        <div key={index} style={{
          background: 'white',
          borderRadius: '18px',
          padding: '20px 22px',
          border: '1px solid #eef2f8',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
        }}>
          <div style={{ 
            color: '#5a6f88', 
            fontSize: '0.8rem', 
            fontWeight: '500',
            letterSpacing: '0.3px',
            marginBottom: '6px'
          }}>
            {stat.label}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between'
          }}>
            <span style={{
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#0b1a2b'
            }}>
              {stat.value}
            </span>
            <span style={{
              background: stat.up ? '#e5f3e8' : '#fde8e8',
              color: stat.up ? '#1b7c4a' : '#b33a3a',
              padding: '3px 10px',
              borderRadius: '40px',
              fontSize: '0.7rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              {stat.up ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;