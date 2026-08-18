import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      overflow: 'hidden',
      background: '#f5f7fb'
    }}>
      {/* NavBar - Fixed at top */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        flexShrink: 0
      }}>
        <NavBar />
      </div>
      
      {/* Main content area with sidebar and content */}
      <div style={{ 
        display: 'flex', 
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* Sidebar - Fixed on left */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: 'calc(100vh - 38px)', /* 38px is the navbar height */
          flexShrink: 0,
          overflowY: 'auto',
          zIndex: 100,
          background: 'white'
        }}>
          <Sidebar />
        </div>
        
        {/* Right content area with Topbar and Main content */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden',
          minWidth: 0
        }}>
          {/* Topbar - Fixed below NavBar */}
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 99,
            flexShrink: 0,
            background: 'white'
          }}>
            <Topbar />
          </div>
          
          {/* Main content - Scrollable */}
          <main style={{
            flex: 1,
            overflowY: 'auto',
            padding: '28px 32px',
            background: '#f9fafc'
          }}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;