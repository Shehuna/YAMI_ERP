import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaChartBar, 
  FaUsers, 
  FaTruck, 
  FaBoxes, 
  FaUniversity, 
  FaBuilding,
  FaUserTie
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: FaChartBar, label: 'Business Status', path: '/', color: '#2c6bff' },
    { icon: FaUsers, label: 'Customer & Sales', path: '/customers', color: '#7c3aed' },
    { icon: FaTruck, label: 'Vendors & Purchases', path: '/vendors', color: '#059669' },
    { icon: FaBoxes, label: 'Inventory and Services', path: '/inventory', color: '#d97706' },
    { icon: FaUserTie, label: 'Employee & Payroll', path: '/employee', color: '#ec4899' },
    { icon: FaUniversity, label: 'Banking', path: '/banking', color: '#dc2626' },
    { icon: FaBuilding, label: 'Company', path: '/company', color: '#7c3aed' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{
      background: 'white',
      color: '#1a2636',
      padding: '16px 12px',
      width: '260px',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #eef2f8',
      boxShadow: '2px 0 8px rgba(0,0,0,0.02)'
    }}>
      <nav style={{ flex: 1 }}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <div
              key={index}
              onClick={() => handleNavigation(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px 14px',
                borderRadius: '8px',
                color: isActive ? '#1a2636' : '#4f6580',
                background: isActive ? '#f0f4ff' : 'transparent',
                fontWeight: isActive ? '700' : '600',
                fontSize: '0.85rem',
                marginBottom: '2px',
                cursor: 'pointer',
                transition: 'all 0.15s',
                borderLeft: isActive ? '3px solid #2c6bff' : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = '#f5f7fb';
                  e.currentTarget.style.color = '#1a2636';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#4f6580';
                }
              }}
            >
              <Icon style={{
                width: '20px',
                fontSize: '1.1rem',
                color: isActive ? '#2c6bff' : item.color
              }} />
              <span style={{ flex: 1 }}>{item.label}</span>
            </div>
          );
        })}
      </nav>

    </div>
  );
};

export default Sidebar;