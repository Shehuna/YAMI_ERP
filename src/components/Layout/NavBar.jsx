import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const navItems = [
    'File', 'Edit', 'List', 'Maintain', 'Tasks', 
    'Analysis', 'Options', 'Reports & Forms', 'Service', 'Help'
  ];

  // Maintain dropdown items from the image
  const maintainItems = [
    'Customers/Prospects...',
    'Vendors...',
    'Employees/Sales Reps...',
    'Payroll',
    'Chart of Accounts...',
    'Budgets...',
    'Inventory Items...',
    'Item Prices...',
    'Job Costs',
    'Fixed Assets',
    'Company Information...',
    'Memorized Transactions',
    'Default Information',
    'Sales Taxes...',
    'Users'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleMenuItemClick = (item) => {
    console.log(`Clicked: ${item}`);
    setOpenMenu(null);
  };

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
      flexShrink: 0,
      position: 'relative',
      zIndex: 1000
    }}>
     
      {navItems.map((item, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
            display: 'inline-block'
          }}
          ref={item === 'Maintain' ? menuRef : null}
        >
          <div
            style={{
              color: '#b0c8e0',
              fontSize: '0.75rem',
              fontWeight: '500',
              padding: '4px 12px',
              borderRadius: '4px',
              cursor: 'default',
              transition: 'all 0.15s',
              letterSpacing: '0.3px',
              position: 'relative',
              background: openMenu === item ? '#2c3d52' : 'transparent',
              color: openMenu === item ? 'white' : '#b0c8e0'
            }}
            onMouseEnter={(e) => {
              if (openMenu !== item) {
                e.currentTarget.style.background = '#2c3d52';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (openMenu !== item) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#b0c8e0';
              }
            }}
            onClick={() => {
              if (item === 'Maintain') {
                toggleMenu(item);
              }
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
            {item === 'Maintain' && (
              <span style={{
                marginLeft: '4px',
                fontSize: '0.6rem',
                color: '#6f85a0'
              }}>
                ▼
              </span>
            )}
          </div>

          {/* Dropdown Menu for Maintain */}
          {item === 'Maintain' && openMenu === 'Maintain' && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                marginTop: '2px',
                background: '#1e2a3a',
                minWidth: '220px',
                borderRadius: '6px',
                padding: '6px 0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                border: '1px solid #2c3d52',
                zIndex: 2000
              }}
            >
              {maintainItems.map((menuItem, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '6px 18px',
                    color: '#c8d8e8',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.1s',
                    fontWeight: '400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2c3d52';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#c8d8e8';
                  }}
                  onClick={() => handleMenuItemClick(menuItem)}
                >
                  <span>{menuItem}</span>
                  {menuItem.includes('...') && (
                    <span style={{
                      fontSize: '0.6rem',
                      color: '#6f85a0',
                      marginLeft: '12px'
                    }}>
                      ›
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default NavBar;