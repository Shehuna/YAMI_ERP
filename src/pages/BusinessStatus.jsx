import React from 'react';
import { Link } from 'react-router-dom';

const BusinessStatus = () => {
  // Dummy data for Account Balances
  const accountBalances = [
    { id: '1010', description: 'Cash - Operating Account', balance: '$45,230.50' },
    { id: '1020', description: 'Cash - Savings Account', balance: '$128,450.75' },
    { id: '2010', description: 'Accounts Receivable', balance: '$34,280.00' },
    { id: '3010', description: 'Inventory', balance: '$97,200.00' },
    { id: '4010', description: 'Accounts Payable', balance: '$16,750.00' },
  ];

  // Dummy data for Customers Who Owe Money
  const customersWhoOwe = [
    { id: 'CUST-001', name: 'Acme Corporation', amountDue: '$12,450.00', dueDate: '2026-08-30' },
    { id: 'CUST-002', name: 'TechStart Inc', amountDue: '$8,230.50', dueDate: '2026-09-15' },
    { id: 'CUST-003', name: 'GreenLeaf Co', amountDue: '$3,675.25', dueDate: '2026-08-25' },
    { id: 'CUST-004', name: 'BlueWave Ltd', amountDue: '$5,240.00', dueDate: '2026-09-05' },
  ];

  // Dummy data for Aged Receivable with colors
  const agedReceivableData = [
    { key: '0-30 days', overdue: '0-30', amount: '$8,450', percent: 45, color: '#2c6bff' },
    { key: '31-60 days', overdue: '31-60', amount: '$3,240', percent: 20, color: '#f59e0b' },
    { key: '61-90 days', overdue: '61-90', amount: '$1,875', percent: 15, color: '#f97316' },
    { key: 'Over 90 days', overdue: '90+', amount: '$2,120', percent: 20, color: '#dc3545' },
  ];

  // Dummy data for Vendors to Pay
  const vendorsToPay = [
    { id: 'VEND-001', name: 'SupplyCo Inc', amountDue: '$12,450.00', dueDate: '2026-08-30' },
    { id: 'VEND-002', name: 'Global Parts Ltd', amountDue: '$8,230.50', dueDate: '2026-09-15' },
    { id: 'VEND-003', name: 'Quality Materials', amountDue: '$5,670.00', dueDate: '2026-08-20' },
    { id: 'VEND-004', name: 'Fast Logistics', amountDue: '$3,245.75', dueDate: '2026-09-10' },
  ];

  // Dummy data for Aged Payable with colors
  const agedPayableData = [
    { key: '0-30 days', overdue: '0-30', amount: '$6,230', percent: 40, color: '#059669' },
    { key: '31-60 days', overdue: '31-60', amount: '$4,180', percent: 25, color: '#f59e0b' },
    { key: '61-90 days', overdue: '61-90', amount: '$2,450', percent: 20, color: '#f97316' },
    { key: 'Over 90 days', overdue: '90+', amount: '$3,890', percent: 15, color: '#dc3545' },
  ];

  // Financial summary data from the image - all increasing
  const chartData = [
    { month: 'Jan', totalRevenue: 112740, costOfSales: 56370, grossProfit: 169110, expenses: 112740, netIncome: 56370 },
    { month: 'Feb', totalRevenue: 128740, costOfSales: 62370, grossProfit: 189110, expenses: 128740, netIncome: 62370 },
    { month: 'Mar', totalRevenue: 148792, costOfSales: 64648, grossProfit: 202150, expenses: 137502, netIncome: 64648 },
    { month: 'Apr', totalRevenue: 165000, costOfSales: 72000, grossProfit: 215000, expenses: 148000, netIncome: 68000 },
    { month: 'May', totalRevenue: 180000, costOfSales: 78000, grossProfit: 225000, expenses: 155000, netIncome: 72000 },
    { month: 'Jun', totalRevenue: 195000, costOfSales: 85000, grossProfit: 235000, expenses: 165000, netIncome: 75000 },
    { month: 'Jul', totalRevenue: 210000, costOfSales: 92000, grossProfit: 248000, expenses: 175000, netIncome: 78000 },
    { month: 'Aug', totalRevenue: 225000, costOfSales: 98000, grossProfit: 260000, expenses: 185000, netIncome: 82000 },
  ];

  // Line colors
  const lineColors = {
    totalRevenue: '#2c6bff',
    costOfSales: '#dc3545',
    grossProfit: '#059669',
    expenses: '#f59e0b',
    netIncome: '#7c3aed'
  };

  // Pie chart component
  const PieChart = ({ data, colors }) => {
    const total = data.reduce((sum, item) => sum + item.percent, 0);
    let currentAngle = 0;

    return (
      <div style={{ position: 'relative', width: '150px', height: '150px' }}>
        <svg width="150" height="150" viewBox="0 0 150 150">
          {data.map((item, index) => {
            const percentage = (item.percent / total) * 100;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;

            const x1 = 75 + 65 * Math.cos((startAngle - 90) * Math.PI / 180);
            const y1 = 75 + 65 * Math.sin((startAngle - 90) * Math.PI / 180);
            const x2 = 75 + 65 * Math.cos((endAngle - 90) * Math.PI / 180);
            const y2 = 75 + 65 * Math.sin((endAngle - 90) * Math.PI / 180);
            const largeArc = angle > 180 ? 1 : 0;

            return (
              <path
                key={index}
                d={`M 75 75 L ${x1} ${y1} A 65 65 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
          <circle cx="75" cy="75" r="40" fill="white" />
          <text x="75" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a2636">
            Total
          </text>
        </svg>
      </div>
    );
  };

  // Multi-line Chart with straight lines (no dots)
  const RevenueChart = ({ data }) => {
    const maxValue = Math.max(
      ...data.flatMap(d => [d.totalRevenue, d.costOfSales, d.grossProfit, d.expenses, d.netIncome])
    );
    const chartHeight = 180;
    const chartWidth = 450;
    const padding = { top: 20, bottom: 30, left: 50, right: 20 };
    const graphHeight = chartHeight - padding.top - padding.bottom;
    const graphWidth = chartWidth - padding.left - padding.right;

    const lines = [
      { key: 'totalRevenue', label: 'Total Revenue', color: lineColors.totalRevenue },
      { key: 'costOfSales', label: 'Cost of Sales', color: lineColors.costOfSales },
      { key: 'grossProfit', label: 'Gross Profit', color: lineColors.grossProfit },
      { key: 'expenses', label: 'Expenses', color: lineColors.expenses },
      { key: 'netIncome', label: 'Net Income', color: lineColors.netIncome },
    ];

    const getPoints = (dataKey) => {
      return data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * graphWidth;
        const y = chartHeight - padding.bottom - (d[dataKey] / maxValue) * graphHeight + 5;
        return `${x},${y}`;
      }).join(' ');
    };

    return (
      <div style={{ width: '100%', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <svg width="100%" height="210" viewBox={`0 0 ${chartWidth} ${chartHeight + 15}`}>
            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map((val) => {
              const y = chartHeight - padding.bottom - (val / 100) * graphHeight + 5;
              const label = Math.round((val / 100) * maxValue);
              return (
                <g key={val}>
                  <text x={5} y={y + 4} fontSize="8" fill="#8a9bb5">${(label/1000).toFixed(0)}k</text>
                  <line x1={padding.left - 5} y1={y} x2={padding.left} y2={y} stroke="#eef2f8" strokeWidth="1" />
                  <line x1={padding.left} y1={y} x2={chartWidth - padding.right} y2={y} stroke="#eef2f8" strokeWidth="0.5" strokeDasharray="3,3" />
                </g>
              );
            })}

            {/* Draw each line - straight lines only */}
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
            {data.map((d, i) => {
              const x = padding.left + (i / (data.length - 1)) * graphWidth;
              return (
                <text key={i} x={x} y={chartHeight + 5} textAnchor="middle" fontSize="8" fill="#8a9bb5">
                  {d.month}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Legend - Right side */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '5px',
          paddingTop: '8px',
          minWidth: '110px',
          flexShrink: 0
        }}>
          {lines.map((line) => (
            <div key={line.key} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontSize: '0.6rem',
              color: '#4f6580',
              fontWeight: '500'
            }}>
              <span style={{ 
                display: 'inline-block', 
                width: '22px', 
                height: '3px', 
                background: line.color,
                borderRadius: '2px'
              }} />
              <span>{line.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Color indicator component for table rows
  const ColorIndicator = ({ color }) => (
    <span style={{
      display: 'inline-block',
      width: '12px',
      height: '12px',
      borderRadius: '3px',
      background: color,
      marginRight: '6px'
    }} />
  );

  return (
    <div>
      {/* Two Column Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: Account Balances */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Account Balances
            </div>
            <div style={{ overflow: 'auto', maxHeight: '180px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Account Description
                    </th>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Account ID
                    </th>
                    <th style={{ textAlign: 'right', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accountBalances.map((account, index) => (
                    <tr key={index}>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#1b273a', fontSize: '0.7rem' }}>
                        {account.description}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#5a6f88', fontSize: '0.7rem' }}>
                        {account.id}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#1b273a', fontWeight: '600', fontSize: '0.7rem' }}>
                        {account.balance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.7rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <Link to="/accounts" style={{ color: '#2c6bff', textDecoration: 'none' }}>View Account List</Link>
                <Link to="/accounts/reconcile" style={{ color: '#2c6bff', textDecoration: 'none' }}>Reconcile Account</Link>
              </div>
              <Link to="/reports/balance-sheet" style={{ color: '#2c6bff', textDecoration: 'none' }}>View Balance Sheet →</Link>
            </div>
          </div>

          {/* Row 2: Customers Who Owe Money */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Customers Who Owe Money
            </div>
            <div style={{ overflow: 'auto', maxHeight: '150px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Customer ID
                    </th>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Customer Name
                    </th>
                    <th style={{ textAlign: 'right', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Amount Due
                    </th>
                    <th style={{ textAlign: 'center', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Due Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customersWhoOwe.map((customer, index) => (
                    <tr key={index}>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#5a6f88', fontSize: '0.7rem' }}>
                        {customer.id}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#1b273a', fontSize: '0.7rem' }}>
                        {customer.name}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#b33a3a', fontWeight: '600', fontSize: '0.7rem' }}>
                        {customer.amountDue}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', textAlign: 'center', color: '#5a6f88', fontSize: '0.7rem' }}>
                        {customer.dueDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8'
            }}>
              <Link to="/customers/setup" style={{ color: '#2c6bff', textDecoration: 'none', fontSize: '0.7rem' }}>Set up Customer →</Link>
            </div>
          </div>

          {/* Row 3: Aged Receivable */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Aged Receivable
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', gap: '20px' }}>
              {/* Left: Pie Chart */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PieChart 
                  data={agedReceivableData} 
                  colors={agedReceivableData.map(d => d.color)}
                />
              </div>
              {/* Right: Table with color indicators */}
              <div style={{ flex: 1 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Key</th>
                      <th style={{ textAlign: 'center', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Date Overdue</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Amount</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agedReceivableData.map((item, index) => (
                      <tr key={index}>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', color: '#1b273a' }}>
                          <ColorIndicator color={item.color} />
                          {item.key}
                        </td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'center', color: '#5a6f88' }}>{item.overdue}</td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#1b273a', fontWeight: '500' }}>{item.amount}</td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#1b273a', fontWeight: '500' }}>{item.percent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8'
            }}>
              <Link to="/reports/aged-receivables" style={{ color: '#2c6bff', textDecoration: 'none', fontSize: '0.7rem' }}>View Aged Receivable Report →</Link>
            </div>
          </div>

          {/* Row 4: Find Report */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Find Report
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ width: '100%', maxWidth: '280px' }}>
                <label style={{ fontSize: '0.7rem', color: '#4f6580', fontWeight: '500', display: 'block', marginBottom: '4px' }}>Category</label>
                <select style={{
                  width: '100%',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid #dce3ef',
                  fontSize: '0.75rem',
                  color: '#1a2636',
                  background: 'white',
                  outline: 'none'
                }}>
                  <option>Financial</option>
                  <option>Sales</option>
                  <option>Inventory</option>
                  <option>Vendor</option>
                  <option>Customer</option>
                </select>
              </div>
              <div style={{ width: '100%', maxWidth: '280px' }}>
                <label style={{ fontSize: '0.7rem', color: '#4f6580', fontWeight: '500', display: 'block', marginBottom: '4px' }}>Report</label>
                <select style={{
                  width: '100%',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid #dce3ef',
                  fontSize: '0.75rem',
                  color: '#1a2636',
                  background: 'white',
                  outline: 'none'
                }}>
                  <option>Income Statement</option>
                  <option>Balance Sheet</option>
                  <option>Cash Flow</option>
                  <option>Sales Summary</option>
                </select>
              </div>
              <div style={{ width: '100%', maxWidth: '280px' }}>
                <label style={{ fontSize: '0.7rem', color: '#4f6580', fontWeight: '500', display: 'block', marginBottom: '4px' }}>Description</label>
                <textarea
                  rows="2"
                  placeholder="Enter report description..."
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid #dce3ef',
                    fontSize: '0.75rem',
                    color: '#1a2636',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: Revenue Year to Date */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Revenue Year to Date
            </div>
            <div style={{ padding: '14px 16px' }}>
              <RevenueChart data={chartData} />
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.7rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <Link to="/reports/income-statement" style={{ color: '#2c6bff', textDecoration: 'none' }}>View Income Statement</Link>
                <Link to="/reports/variance" style={{ color: '#2c6bff', textDecoration: 'none' }}>View Account Variance Report</Link>
              </div>
              <Link to="/budget/edit" style={{ color: '#2c6bff', textDecoration: 'none' }}>Edit a Budget →</Link>
            </div>
          </div>

          {/* Row 2: Vendors to Pay */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Vendors to Pay
            </div>
            <div style={{ overflow: 'auto', maxHeight: '150px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Vendor ID
                    </th>
                    <th style={{ textAlign: 'left', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Vendor Name
                    </th>
                    <th style={{ textAlign: 'right', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Amount Due
                    </th>
                    <th style={{ textAlign: 'center', padding: '6px 12px', background: '#fafcff', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>
                      Due Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendorsToPay.map((vendor, index) => (
                    <tr key={index}>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#5a6f88', fontSize: '0.7rem' }}>
                        {vendor.id}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', color: '#1b273a', fontSize: '0.7rem' }}>
                        {vendor.name}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#b33a3a', fontWeight: '600', fontSize: '0.7rem' }}>
                        {vendor.amountDue}
                      </td>
                      <td style={{ padding: '6px 12px', borderBottom: '1px solid #f0f2f6', textAlign: 'center', color: '#5a6f88', fontSize: '0.7rem' }}>
                        {vendor.dueDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 3: Aged Payable */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #eef2f8',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '10px 16px',
              background: '#f8faff',
              borderBottom: '1px solid #eef2f8',
              fontWeight: '600',
              fontSize: '0.8rem',
              color: '#1a2636'
            }}>
              Aged Payable
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', gap: '20px' }}>
              {/* Left: Pie Chart */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PieChart 
                  data={agedPayableData} 
                  colors={agedPayableData.map(d => d.color)}
                />
              </div>
              {/* Right: Table with color indicators */}
              <div style={{ flex: 1 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Key</th>
                      <th style={{ textAlign: 'center', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Date Overdue</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>Amount</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px', color: '#3f556b', fontWeight: '600', fontSize: '0.6rem', textTransform: 'uppercase', borderBottom: '1px solid #eef2f8' }}>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agedPayableData.map((item, index) => (
                      <tr key={index}>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', color: '#1b273a' }}>
                          <ColorIndicator color={item.color} />
                          {item.key}
                        </td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'center', color: '#5a6f88' }}>{item.overdue}</td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#1b273a', fontWeight: '500' }}>{item.amount}</td>
                        <td style={{ padding: '4px 8px', borderBottom: '1px solid #f0f2f6', textAlign: 'right', color: '#1b273a', fontWeight: '500' }}>{item.percent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{
              padding: '8px 16px',
              borderTop: '1px solid #eef2f8',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.7rem'
            }}>
              <Link to="/reports/aged-payables" style={{ color: '#2c6bff', textDecoration: 'none' }}>View Aged Payable Report →</Link>
              <Link to="/payments/make" style={{ color: '#2c6bff', textDecoration: 'none' }}>Make a Payment →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStatus;