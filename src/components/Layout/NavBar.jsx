import React from 'react';

const NavBar = () => {
  const navItems = [
    'File', 'Edit', 'List', 'Maintain', 'Tasks', 
    'Analysis', 'Options', 'Reports & Forms', 'Service', 'Help'
  ];

  return (
    <div style={{
      background: '#1e2a3a',
      padding: '0 24px',
      borderBottom: '1px solid #0f1a2a',
      display: 'flex',
      alignItems: 'center',
      height: '38px',
      width: '100%',
      gap: '4px',
      flexShrink: 0
    }}>
      <span style={{
        color: '#7aa9ff',
        fontWeight: '600',
        fontSize: '0.8rem',
        marginRight: '24px',
        letterSpacing: '0.5px'
      }}>
        SAGE 50
      </span>

      {navItems.map((item, index) => (
        <div
          key={index}
          style={{
            color: '#b0c8e0',
            fontSize: '0.75rem',
            fontWeight: '500',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'default',
            transition: 'all 0.15s',
            letterSpacing: '0.3px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2c3d52';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#b0c8e0';
          }}
        >
          {item}
          {['File', 'List', 'Tasks', 'Reports & Forms'].includes(item) && (
            <span style={{
              marginLeft: '4px',
              fontSize: '0.6rem',
              color: '#6f85a0'
            }}>
              ▼
            </span>
          )}
        </div>
      ))}

      <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
        <span style={{
          color: '#8a9bb5',
          fontSize: '0.7rem',
          padding: '2px 10px',
          borderRadius: '3px',
          cursor: 'default'
        }}>
          —
        </span>
        <span style={{
          color: '#8a9bb5',
          fontSize: '0.7rem',
          padding: '2px 10px',
          borderRadius: '3px',
          cursor: 'default'
        }}>
          □
        </span>
        <span style={{
          color: '#8a9bb5',
          fontSize: '0.7rem',
          padding: '2px 10px',
          borderRadius: '3px',
          cursor: 'default'
        }}>
          ✕
        </span>
      </div>
    </div>
  );
};

export default NavBar;