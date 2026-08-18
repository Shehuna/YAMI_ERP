import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ placeholder = 'Search...' }) => {
  return (
    <div style={{
      background: '#f2f5fa',
      borderRadius: '60px',
      padding: '6px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid #e2e8f0'
    }}>
      <FaSearch style={{ color: '#7a8aa0', fontSize: '0.9rem' }} />
      <input
        type="text"
        placeholder={placeholder}
        style={{
          border: 'none',
          background: 'transparent',
          padding: '6px 0',
          fontSize: '0.9rem',
          width: '200px',
          outline: 'none',
          fontFamily: 'Inter, sans-serif'
        }}
      />
    </div>
  );
};

export default SearchBar;