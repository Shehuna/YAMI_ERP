import React from 'react';

const StatusBadge = ({ status, children }) => {
  const getStatusStyle = () => {
    switch(status) {
      case 'paid':
        return { background: '#e1f3e8', color: '#1a7642' };
      case 'pending':
        return { background: '#fef1e0', color: '#b45a1c' };
      case 'overdue':
        return { background: '#fee8e8', color: '#b33a3a' };
      case 'draft':
        return { background: '#eaeef5', color: '#4f617a' };
      default:
        return { background: '#e3edfb', color: '#1f5fba' };
    }
  };

  const style = getStatusStyle();

  return (
    <span style={{
      background: style.background,
      color: style.color,
      padding: '4px 12px',
      borderRadius: '40px',
      fontSize: '0.7rem',
      fontWeight: '600',
      display: 'inline-block',
      textTransform: 'capitalize'
    }}>
      {children || status}
    </span>
  );
};

export default StatusBadge;