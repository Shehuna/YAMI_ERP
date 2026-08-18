import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBoxes, FaServicestack, FaCubes, FaDollarSign,
  FaShoppingCart, FaWarehouse, FaBoxOpen, FaTruck,
  FaClipboardList, FaAdjust, FaChartBar,
} from 'react-icons/fa';

const Inventory = () => {
  // Dummy inventory data
  const inventoryItems = [
    { id: 'ITEM-001', description: 'Laptop Pro X1', unitsSold: 245, qtyOnHand: 45 },
    { id: 'ITEM-002', description: 'Wireless Mouse', unitsSold: 1890, qtyOnHand: 120 },
    { id: 'ITEM-003', description: 'USB-C Hub', unitsSold: 567, qtyOnHand: 8 },
    { id: 'ITEM-004', description: 'Monitor 27" 4K', unitsSold: 89, qtyOnHand: 0 },
  
  ];

  // Recent reports
  const reports = [
    'Inventory Valuation',
    'Inventory Movement',
    'Stock Status',
    'Reorder Report',
    'Inventory Turnover',
  ];

  // Card width - consistent for all cards
  const CARD_WIDTH = '110px';
  const CARD_HEIGHT = '70px';
  const CARD_GAP = '12px'; // Space between cards in a row

  // Card data with labels
  const row1Cards = [
    { icon: FaBoxes, label: 'Inventory Items', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaServicestack, label: 'Company Services', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaCubes, label: 'Assemblies', color: '#059669', bg: '#d1fae5' },
    { icon: FaDollarSign, label: 'Prices', color: '#d97706', bg: '#fef3c7' },
  ];

  const row2Cards = [
    { icon: FaShoppingCart, label: 'Purchase Orders', color: '#d97706', bg: '#fef3c7' },
  ];

  const row3Cards = [
    { icon: FaWarehouse, label: 'Receive Inventory', color: '#2c6bff', bg: '#e3edfb' },
    { icon: FaBoxOpen, label: 'Ship Packages', color: '#7c3aed', bg: '#ede9fe' },
    { icon: FaTruck, label: 'Track Packages', color: '#059669', bg: '#d1fae5' },
  ];

  const row4Cards = [
    { icon: FaClipboardList, label: 'Inventory Count', color: '#dc2626', bg: '#fee2e2' },
    { icon: FaAdjust, label: 'Inventory Adjustment', color: '#d97706', bg: '#fef3c7' },
    { icon: FaChartBar, label: 'Reports', color: '#4f6580', bg: '#e8edf5' },
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

  // Cost of Sales Trend Chart Component with legend at top
  const CostOfSalesChart = () => {
    // Data from the image
    const chartData = [
      { month: 'Jan', revenue: 0.8, costOfSales: 0.4, grossProfit: 0.1 },
      { month: 'Feb', revenue: 0.9, costOfSales: 0.5, grossProfit: 0.1 },
      { month: 'Mar', revenue: 1.0, costOfSales: 0.6, grossProfit: 0.1 },
      { month: 'Apr', revenue: 1.1, costOfSales: 0.7, grossProfit: 0.1 },
      { month: 'May', revenue: 1.2, costOfSales: 0.8, grossProfit: 0.1 },
      { month: 'Jun', revenue: 1.3, costOfSales: 0.9, grossProfit: 0.1 },
      { month: 'Jul', revenue: 1.4, costOfSales: 1.0, grossProfit: 0.1 },
    ];

    const maxValue = 1.5;
    const chartHeight = 180;
    const chartWidth = 420;
    const padding = { top: 5, bottom: 30, left: 40, right: 15 };
    const graphHeight = chartHeight - padding.top - padding.bottom;
    const graphWidth = chartWidth - padding.left - padding.right;

    const lines = [
      { key: 'revenue', label: 'Revenue', color: '#2c6bff' },
      { key: 'costOfSales', label: 'Cost of Sales', color: '#dc3545' },
      { key: 'grossProfit', label: 'Gross Profit', color: '#059669' },
    ];

    const getPoints = (dataKey) => {
      return chartData.map((d, i) => {
        const x = padding.left + (i / (chartData.length - 1)) * graphWidth;
        const y = chartHeight - padding.bottom - (d[dataKey] / maxValue) * graphHeight + 5;
        return `${x},${y}`;
      }).join(' ');
    };

    return (
      <div style={{ width: '100%' }}>
        {/* Legend - At the top, horizontal, compact */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '16px',
          paddingBottom: '4px',
          flexWrap: 'nowrap'
        }}>
          {lines.map((line) => (
            <div key={line.key} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              fontSize: '0.65rem',
              color: '#4f6580',
              fontWeight: '500'
            }}>
              <span style={{ 
                display: 'inline-block', 
                width: '16px', 
                height: '3px', 
                background: line.color,
                borderRadius: '2px'
              }} />
              <span>{line.label}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ overflow: 'hidden' }}>
          <svg width="100%" height="200" viewBox={`0 0 ${chartWidth} ${chartHeight + 5}`}>
            {/* Y-axis labels */}
            {[0, 0.3, 0.6, 0.9, 1.2, 1.5].map((val) => {
              const y = chartHeight - padding.bottom - (val / maxValue) * graphHeight + 5;
              return (
                <g key={val}>
                  <text x={3} y={y + 4} fontSize="10" fill="#4f6580" fontWeight="500">{val.toFixed(1)}</text>
                  <line x1={padding.left - 3} y1={y} x2={padding.left} y2={y} stroke="#eef2f8" strokeWidth="1" />
                  <line x1={padding.left} y1={y} x2={chartWidth - padding.right} y2={y} stroke="#eef2f8" strokeWidth="0.5" strokeDasharray="3,3" />
                </g>
              );
            })}

            {/* Draw each line */}
            {lines.map((line) => (
              <g key={line.key}>
                <polyline
                  points={getPoints(line.key)}
                  fill="none"
                  stroke={line.color}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            ))}

            {/* X-axis labels */}
            {chartData.map((d, i) => {
              const x = padding.left + (i / (chartData.length - 1)) * graphWidth;
              return (
                <text key={i} x={x} y={chartHeight + 8} textAnchor="middle" fontSize="10" fill="#4f6580" fontWeight="500">
                  {d.month}
                </text>
              );
            })}
          </svg>
        </div>
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
          {/* Row 1: Inventory Items, Company Services, Assemblies, Prices */}
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

          {/* Row 2: Purchase Orders */}
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
            {/* Vertical line from Purchase Orders to Receive Inventory */}
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

          {/* Row 3: Receive Inventory, Ship Packages, Track Packages */}
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
            {/* Horizontal line from Receive Inventory to Ship Packages */}
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
            {/* Horizontal line from Ship Packages to Track Packages */}
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

          {/* Row 4: Inventory Count, Inventory Adjustment, Reports */}
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
          {/* Row 1: Inventory Table */}
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
                  Inventory Items
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
                      Item ID
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
                      Description
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
                      Units Sold
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
                      Qty on Hand
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.id}>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#5a6f88',
                        fontSize: '0.75rem'
                      }}>
                        {item.id}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        color: '#1b273a',
                        fontSize: '0.8rem'
                      }}>
                        {item.description}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'right',
                        color: '#1b273a',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}>
                        {item.unitsSold.toLocaleString()}
                      </td>
                      <td style={{
                        padding: '8px 16px',
                        borderBottom: '1px solid #eef2f8',
                        textAlign: 'right',
                        color: item.qtyOnHand === 0 ? '#dc3545' : '#1b273a',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}>
                        {item.qtyOnHand}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 2: Recently Used Inventory Reports and Cost of Sales Trend */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '16px'
          }}>
            {/* Recently Used Inventory Reports */}
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
                Recently Used Inventory Reports
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
                  to="/reports/inventory"
                  style={{
                    color: '#2c6bff',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  View All Inventory Reports →
                </Link>
              </div>
            </div>

            {/* Cost of Sales Trend Graph */}
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
                Cost of Sales Trend
              </div>
              <div style={{ padding: '12px 14px' }}>
                <CostOfSalesChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;