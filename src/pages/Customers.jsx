import React from 'react';
import { 
  FaUsers, FaBriefcase, FaPercent, FaFileAlt, FaClock, 
  FaShoppingCart, FaFileInvoice, FaChartLine, FaMoneyBillWave,
  FaUniversity, FaEnvelope, FaUndo, FaChartPie, 
  FaSearch, FaEdit, FaTrash, FaEye, FaPlus,
  FaChevronRight
} from 'react-icons/fa';

const Customers = () => {
  // Dummy customer data
  const customers = [
    { id: 1, name: 'Acme Corporation', email: 'contact@acme.com', phone: '(555) 123-4567', balance: '$12,450.00', status: 'Active' },
    { id: 2, name: 'TechStart Inc', email: 'info@techstart.com', phone: '(555) 234-5678', balance: '$8,230.50', status: 'Active' },
    { id: 3, name: 'GreenLeaf Co', email: 'sales@greenleaf.com', phone: '(555) 345-6789', balance: '$3,675.25', status: 'Active' },
    { id: 4, name: 'BlueWave Ltd', email: 'info@bluewave.com', phone: '(555) 456-7890', balance: '$1,240.00', status: 'Overdue' },
    { id: 5, name: 'RedRock Partners', email: 'partners@redrock.com', phone: '(555) 567-8901', balance: '$5,890.75', status: 'Active' },
  ];

  // Recent reports
  const reports = [
    'Aged Receivables',
    'Customer Ledger',
    'Sales Journal',
    'Customer Transaction History',
    'Customer Contact List',
  ];

  // Card width - smaller and consistent for all cards
  const CARD_WIDTH = '110px';
  const CARD_HEIGHT = '70px';

  // Card data with labels only (no values)
  const row1Cards = [
    { icon: FaUsers, label: 'Customers', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaBriefcase, label: 'Jobs', color: '#b45a1c', bg: '#fef1e0' },
    { icon: FaPercent, label: 'Sales Tax', color: '#1a7642', bg: '#e1f3e8' },
  ];

  const row2Cards = [
    { icon: FaFileAlt, label: 'Quotes & Proposals', color: '#4f6580', bg: '#e8edf5' },
    { icon: FaClock, label: 'Time & Expense', color: '#b45a1c', bg: '#fef1e0' },
  ];

  const row3Cards = [
    { icon: FaShoppingCart, label: 'Sales Orders', color: '#2c6bff', bg: '#e3edfb' },
  ];

  const row4Cards = [
    { icon: FaFileInvoice, label: 'Sales Invoices', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaChartLine, label: 'Finance Charges', color: '#b45a1c', bg: '#fef1e0' },
    { icon: FaMoneyBillWave, label: 'Receive Money', color: '#1a7642', bg: '#e1f3e8' },
  ];

  const row5Cards = [
    { icon: FaUniversity, label: 'Bank Deposits', color: '#4f6580', bg: '#e8edf5' },
  ];

  const row6Cards = [
    { icon: FaEnvelope, label: 'Statements', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaUndo, label: 'Credit & Returns', color: '#b45a1c', bg: '#fef1e0' },
    { icon: FaChartPie, label: 'Reports', color: '#4f6580', bg: '#e8edf5' },
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
          fontSize: '0.62rem',
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
          gap: '6px'
        }}>
          {/* Row 1: Customers, Jobs, Sales Tax */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row1Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2: Quotes and Proposals, Time and Expense Tickets */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row2Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 3: Sales Orders */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row3Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 4: Sales Invoices, Finance Charges, Receive Money */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row4Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 5: Bank Deposits */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row5Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 6: Customer Statement, Credit and returns, Reports */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row6Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Customer Table */}
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
                  Customers
                </h3>
               
              </div>
              {/* <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#f5f7fb',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0'
                }}>
                  <FaSearch style={{ color: '#8a9bb5', fontSize: '0.7rem' }} />
                  <input
                    type="text"
                    placeholder="Search..."
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: '3px 6px',
                      fontSize: '0.75rem',
                      outline: 'none',
                      width: '120px',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>
                <button style={{
                  background: '#2c6bff',
                  border: 'none',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <FaPlus size={10} />
                  Add
                </button>
              </div> */}
            </div>

            <div style={{ overflow: 'auto', maxHeight: '260px' }}>
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
                      Customer
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
                      Email
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
                      Balance
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
                      Status
                    </th>
                   {/*  <th style={{
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
                      Actions
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontWeight: '500',
                        fontSize: '0.8rem'
                      }}>
                        {customer.name}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {customer.email}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'right',
                        color: '#1b273a',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}>
                        {customer.balance}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          background: customer.status === 'Active' ? '#e1f3e8' : '#fee8e8',
                          color: customer.status === 'Active' ? '#1a7642' : '#b33a3a',
                          padding: '2px 8px',
                          borderRadius: '40px',
                          fontSize: '0.6rem',
                          fontWeight: '600'
                        }}>
                          {customer.status}
                        </span>
                      </td>
                      {/* <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: '4px'
                        }}>
                          <button style={{
                            background: 'none',
                            border: 'none',
                            color: '#2c6bff',
                            cursor: 'pointer',
                            padding: '2px'
                          }}>
                            <FaEye size={12} />
                          </button>
                          <button style={{
                            background: 'none',
                            border: 'none',
                            color: '#2c6bff',
                            cursor: 'pointer',
                            padding: '2px'
                          }}>
                            <FaEdit size={12} />
                          </button>
                          <button style={{
                            background: 'none',
                            border: 'none',
                            color: '#dc3545',
                            cursor: 'pointer',
                            padding: '2px'
                          }}>
                            <FaTrash size={12} />
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Section: Reports and Aged Receivables */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {/* Recently Used Customer Reports */}
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
                Recently Used Customer Reports
              </div>
              <div style={{ padding: '4px 0' }}>
                {reports.map((report, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 16px',
                      color: '#3d4e66',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f0f4ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span style={{ flex: 1 }}>{report}</span>
                    <FaChevronRight style={{ 
                      fontSize: '0.5rem', 
                      color: '#b0c0d4' 
                    }} />
                  </div>
                ))}
              </div>
              <div style={{
                padding: '8px 16px',
                borderTop: '1px solid #eef2f8',
                fontSize: '0.7rem'
              }}>
                <a href="#" style={{
                  color: '#2c6bff',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  View All Customer Reports →
                </a>
              </div>
            </div>

            {/* Aged Receivables with Graph */}
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
                Aged Receivables
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>0 - 30 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$8,450</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '65%',
                        height: '100%',
                        background: '#2c6bff',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>31 - 60 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$3,240</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '45%',
                        height: '100%',
                        background: '#f59e0b',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>61 - 90 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$1,875</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '30%',
                        height: '100%',
                        background: '#f97316',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>Over 90 days</span>
                      <span style={{ fontWeight: '600', color: '#b33a3a' }}>$2,120</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '25%',
                        height: '100%',
                        background: '#dc3545',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: '#f8faff',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}>
                  <span style={{ fontSize: '0.65rem', color: '#6c819e' }}>Total Receivables</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1a2636' }}>$15,685</span>
                </div>

                <a href="#" style={{
                  color: '#2c6bff',
                  textDecoration: 'none',
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  display: 'block',
                  textAlign: 'center'
                }}>
                  View Aged Receivables Report →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;