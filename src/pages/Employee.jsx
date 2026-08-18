import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, FaUserCog, FaFileAlt, FaCog,
  FaClock, FaMoneyBillWave, FaUniversity, FaPrint,
  FaChartBar, FaUndo,
} from 'react-icons/fa';

const Employee = () => {
  // Dummy employee data
  const employees = [
    { id: 'EMP-001', firstName: 'John', lastName: 'Doe', phone: '(555) 123-4567', payMethod: 'Direct Deposit' },
    { id: 'EMP-002', firstName: 'Jane', lastName: 'Smith', phone: '(555) 234-5678', payMethod: 'Check' },
    { id: 'EMP-003', firstName: 'Robert', lastName: 'Johnson', phone: '(555) 345-6789', payMethod: 'Direct Deposit' },
    
  ];

  // Dummy 1099 vendors data
  const vendors1099 = [
    { id: 'VND-001', name: 'ABC Consulting', phone: '(555) 678-9012', lastPayment: '$5,450.00' },
    { id: 'VND-002', name: 'XYZ Services', phone: '(555) 789-0123', lastPayment: '$3,280.00' },
    { id: 'VND-003', name: 'Tech Solutions', phone: '(555) 890-1234', lastPayment: '$7,150.00' },
    { id: 'VND-004', name: 'Creative Designs', phone: '(555) 901-2345', lastPayment: '$2,890.00' },
  ];

  // Recent reports
  const reports = [
    'Payroll Register',
    'Payroll Check Register',
    'Tax Liability Report',
   
  ];

  // Card width - consistent for all cards
  const CARD_WIDTH = '110px';
  const CARD_HEIGHT = '70px';
  const CARD_GAP = '12px'; // Space between cards in a row

  // Card data with labels
  const row1Cards = [
    { icon: FaUsers, label: 'Employees', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaUserCog, label: 'Users', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaFileAlt, label: '1099s', color: '#059669', bg: '#d1fae5' },
    { icon: FaCog, label: 'Payroll Setup', color: '#d97706', bg: '#fef3c7' },
  ];

  const row2Cards = [
    { icon: FaClock, label: 'Time & Expense Tickets', color: '#d97706', bg: '#fef3c7' },
  ];

  const row3Cards = [
    { icon: FaMoneyBillWave, label: 'Pay Employees', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaUniversity, label: 'Direct Deposit', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaPrint, label: 'Print Payroll Checks', color: '#059669', bg: '#d1fae5' },
  ];

  const row4Cards = [
    { icon: FaChartBar, label: 'Reports', color: '#dc2626', bg: '#fee2e2' },
    { icon: FaUndo, label: 'Void Checks', color: '#d97706', bg: '#fef3c7' },
  ];

  const renderCard = (card) => {
    const Icon = card.icon;
    return (
      <div
        style={{
          background: 'white',
          borderRadius: '8px',
          padding: '8px 6px',
          border: '1px solid #eef2f8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          height: CARD_HEIGHT,
          width: CARD_WIDTH,
          flexShrink: 0,
          position: 'relative'
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'}
        onClick={() => console.log(`Clicked: ${card.label}`)}
      >
        <div style={{
          background: card.bg,
          borderRadius: '6px',
          padding: '4px',
          color: card.color,
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '4px'
        }}>
          <Icon size={12} />
        </div>
        <div style={{
          fontSize: '0.7rem',
          fontWeight: '500',
          color: '#1a2636',
          textAlign: 'center',
          lineHeight: '1.2'
        }}>
          {card.label}
        </div>
        {/* Small triangle indicator at bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '0',
          height: '0',
          borderLeft: '10px solid transparent',
          borderBottom: '10px solid #dce3ef',
          opacity: 0.5
        }} />
      </div>
    );
  };

  return (
    <div>
   

      {/* Two Column Layout - Equal width */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN - Workflow */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px'
        }}>
          {/* Row 1: Employees, Users, 1099s, Payroll Setup */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: CARD_GAP,
            width: '100%',
            maxWidth: '478px'
          }}>
            {row1Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2: Time and Expense Tickets */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: '478px',
            position: 'relative'
          }}>
            {row2Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
            {/* Vertical line from Time & Expense Tickets to Pay Employees */}
            <div style={{
              position: 'absolute',
              left: '55px',
              bottom: '-14px',
              width: '2px',
              height: '14px',
              background: '#d0d8e4',
              zIndex: 1
            }} />
          </div>

          {/* Row 3: Pay Employees, Direct Deposit, Print Payroll Checks */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: CARD_GAP,
            width: '100%',
            maxWidth: '478px',
            position: 'relative'
          }}>
            {row3Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
            {/* Horizontal line from Pay Employees to Direct Deposit */}
            <div style={{
              position: 'absolute',
              left: '110px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '2px',
              background: '#d0d8e4',
              zIndex: 1
            }} />
            {/* Horizontal line from Direct Deposit to Print Payroll Checks */}
            <div style={{
              position: 'absolute',
              left: '232px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '2px',
              background: '#d0d8e4',
              zIndex: 1
            }} />
          </div>

          {/* Row 4: Reports, Void Checks */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: CARD_GAP,
            width: '100%',
            maxWidth: '478px'
          }}>
            {row4Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Row 1: Employee Table */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <div style={{
              padding: '12px 18px',
              borderBottom: '1px solid #eef2f8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  color: '#1f2a3c' 
                }}>
                  Employees
                </h3>
               
              </div>
            </div>

            <div style={{ overflow: 'auto', maxHeight: '200px' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.8rem'
              }}>
                <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Employee ID
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      First Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Last Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Phone
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Pay Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {employee.id}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontSize: '0.8rem'
                      }}>
                        {employee.firstName}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontSize: '0.8rem'
                      }}>
                        {employee.lastName}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {employee.phone}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          background: employee.payMethod === 'Direct Deposit' ? '#e1f3e8' : '#fef1e0',
                          color: employee.payMethod === 'Direct Deposit' ? '#1a7642' : '#b45a1c',
                          padding: '2px 8px',
                          borderRadius: '40px',
                          fontSize: '0.6rem',
                          fontWeight: '600'
                        }}>
                          {employee.payMethod}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 2: 1099 Vendors Table */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <div style={{
              padding: '12px 18px',
              borderBottom: '1px solid #eef2f8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  color: '#1f2a3c' 
                }}>
                  1099 Vendors
                </h3>
               
              </div>
            </div>

            <div style={{ overflow: 'auto', maxHeight: '160px' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.8rem'
              }}>
                <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Vendor ID
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Vendor Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Phone
                    </th>
                    <th style={{
                      textAlign: 'right',
                      padding: '8px 16px',
                      background: '#f8faff',
                      color: '#3f556b',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #eef2f8'
                    }}>
                      Last Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendors1099.map((vendor) => (
                    <tr key={vendor.id}>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {vendor.id}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontSize: '0.8rem'
                      }}>
                        {vendor.name}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {vendor.phone}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'right',
                        color: '#1b273a',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}>
                        {vendor.lastPayment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 3: Recently Used Employee Reports */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '12px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.75rem',
              color: '#1a2636'
            }}>
              Recently Used Employee Reports
            </div>
            <div style={{ padding: '4px 0' }}>
              {reports.map((report, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 16px',
                    color: '#3d4e66',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    borderBottom: index < reports.length - 1 ? '1px solid #f0f2f6' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f0f4ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span style={{ flex: 1 }}>{report}</span>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    fontSize: '0.65rem'
                  }}>
                    <Link 
                      to={`/reports/${report.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        color: '#2c6bff',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      View
                    </Link>
                    <span style={{ color: '#dce3ef' }}>|</span>
                    <Link 
                      to={`/reports/${report.toLowerCase().replace(/\s+/g, '-')}/print`}
                      style={{
                        color: '#2c6bff',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      Print
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8',
              fontSize: '0.7rem'
            }}>
              <Link 
                to="/reports/employee"
                style={{
                  color: '#2c6bff',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                View All Employees & Payroll Reports →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;