import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTruck, FaMoneyCheck, FaFileAlt, FaClock, FaShoppingCart,
  FaFileInvoice, FaCreditCard, FaUndo, FaChartPie,
} from 'react-icons/fa';

const Vendors = () => {
  // Dummy vendor data
  const vendors = [
    { id: 1, name: 'SupplyCo Inc', email: 'orders@supplyco.com', phone: '(555) 567-8901', balance: '$12,450.00', status: 'Active' },
    { id: 2, name: 'Global Parts Ltd', email: 'sales@globalparts.com', phone: '(555) 678-9012', balance: '$8,230.50', status: 'Active' },
    { id: 3, name: 'Quality Materials', email: 'info@qualitymat.com', phone: '(555) 789-0123', balance: '$15,670.00', status: 'Active' },
    { id: 4, name: 'Fast Logistics', email: 'dispatch@fastlog.com', phone: '(555) 890-1234', balance: '$3,245.75', status: 'Overdue' },
    { id: 5, name: 'Premier Supplies', email: 'info@premiersupplies.com', phone: '(555) 901-2345', balance: '$6,890.00', status: 'Active' },
  ];

  // Recent reports
  const reports = [
    'Aged Payables',
    'Cash Disbursements Journal',
    'Purchase Journal',
    'Check Register',
    'Vendor Transaction History',
  ];

  // Card width - consistent for all cards
  const CARD_WIDTH = '110px';
  const CARD_HEIGHT = '70px';

  // Card data with labels only (no values)
  const row1Cards = [
    { icon: FaTruck, label: 'Vendors', color: '#059669', bg: '#d1fae5' },
    { icon: FaMoneyCheck, label: 'Write Checks', color: '#059669', bg: '#d1fae5' },
    { icon: FaFileAlt, label: '1099s', color: '#059669', bg: '#d1fae5' },
  ];

  const row2Cards = [
    { icon: FaShoppingCart, label: 'Purchase Orders', color: '#d97706', bg: '#fef3c7' },
    { icon: FaClock, label: 'Time & Expense', color: '#d97706', bg: '#fef3c7' },
  ];

  const row3Cards = [
    { icon: FaFileInvoice, label: 'Enter Bills', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaCreditCard, label: 'Pay Bills', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaMoneyCheck, label: 'Electronic Bill Pay', color: '#7c3aed', bg: '#ede9fe' },
  ];

  const row4Cards = [
    { icon: FaUndo, label: 'Void Checks', color: '#dc2626', bg: '#fee2e2' },
    { icon: FaFileAlt, label: 'Credits & Returns', color: '#dc2626', bg: '#fee2e2' },
    { icon: FaChartPie, label: 'Reports', color: '#dc2626', bg: '#fee2e2' },
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
          {/* Row 1: Vendors, Write Checks, 1099s */}
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

          {/* Row 2: Purchase Orders, Time and Expense Tickets */}
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

          {/* Row 3: Enter Bills, Pay Bills, Electronic Bill Pay */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '6px',
            width: '100%',
            maxWidth: '360px'
          }}>
            {row3Cards.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card)}
              </React.Fragment>
            ))}
          </div>

          {/* Row 4: Void Checks, Credits and Returns, Reports */}
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
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Vendor Table */}
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
                  Vendors
                </h3>
              </div>
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
                      Vendor
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
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.id}>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontWeight: '500',
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
                        {vendor.email}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'right',
                        color: '#1b273a',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}>
                        {vendor.balance}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          background: vendor.status === 'Active' ? '#d1fae5' : '#fee2e2',
                          color: vendor.status === 'Active' ? '#059669' : '#dc2626',
                          padding: '2px 8px',
                          borderRadius: '40px',
                          fontSize: '0.6rem',
                          fontWeight: '600'
                        }}>
                          {vendor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Section: Recently Used Vendor Reports and Aged Payables */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {/* Recently Used Vendor Reports */}
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
                Recently Used Vendor Reports
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
                  to="/reports/vendor"
                  style={{
                    color: '#2c6bff',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  View All Vendor Reports →
                </Link>
              </div>
            </div>

            {/* Aged Payables with Graph */}
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
                Aged Payables
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>0 - 30 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$6,230</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '55%',
                        height: '100%',
                        background: '#059669',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>31 - 60 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$4,180</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#eef2f8',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '40%',
                        height: '100%',
                        background: '#f59e0b',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>61 - 90 days</span>
                      <span style={{ fontWeight: '600', color: '#1a2636' }}>$2,450</span>
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
                        background: '#f97316',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#6c819e' }}>
                      <span>Over 90 days</span>
                      <span style={{ fontWeight: '600', color: '#dc2626' }}>$3,890</span>
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
                        background: '#dc2626',
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
                  <span style={{ fontSize: '0.65rem', color: '#6c819e' }}>Total Payables</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1a2636' }}>$16,750</span>
                </div>

                <Link 
                  to="/reports/aged-payables"
                  style={{
                    color: '#2c6bff',
                    textDecoration: 'none',
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    display: 'block',
                    textAlign: 'center'
                  }}
                >
                  View Aged Payables Report →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;