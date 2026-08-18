import React from 'react';

const Company = () => {
  return (
    <div>
      <h2 style={{ 
        fontSize: '1.3rem', 
        fontWeight: '600', 
        color: '#1a2636',
        marginBottom: '20px'
      }}>
        Company
      </h2>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
        border: '1px solid #eef2f8'
      }}>
        <p style={{ color: '#6c819e' }}>Company settings module coming soon...</p>
      </div>
    </div>
  );
};

export default Company;