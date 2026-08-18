import React from 'react';
import StatusBadge from '../common/StatusBadge';

const RecentOrders = () => {
  const orders = [
    { id: '#INV-2026-001', customer: 'Acme Corp', amount: '$1,245.00', status: 'paid', date: '2026-08-14' },
    { id: '#INV-2026-002', customer: 'TechStart Inc', amount: '$3,870.50', status: 'pending', date: '2026-08-13' },
    { id: '#INV-2026-003', customer: 'GreenLeaf Co', amount: '$632.25', status: 'overdue', date: '2026-08-10' },
    { id: '#INV-2026-004', customer: 'BlueWave Ltd', amount: '$2,180.00', status: 'draft', date: '2026-08-09' },
    { id: '#INV-2026-005', customer: 'RedRock Partners', amount: '$945.75', status: 'paid', date: '2026-08-08' },
  ];

  return (
    <div style={{
      background: 'white',
      borderRadius: '18px',
      border: '1px solid #eef2f8',
      overflow: 'auto',
      boxShadow: '0 2px 6px rgba(0,0,0,0.01)'
    }}>
      <div style={{
        padding: '18px 22px',
        borderBottom: '1px solid #eef2f8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2a3c' }}>
          Recent Orders
        </h3>
        <a href="#" style={{
          color: '#2f6ed4',
          fontWeight: '500',
          fontSize: '0.85rem',
          textDecoration: 'none'
        }}>
          View All →
        </a>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.9rem'
      }}>
        <thead>
          <tr>
            <th style={{
              textAlign: 'left',
              padding: '14px 22px',
              background: '#f8faff',
              color: '#3f556b',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Invoice
            </th>
            <th style={{
              textAlign: 'left',
              padding: '14px 22px',
              background: '#f8faff',
              color: '#3f556b',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Customer
            </th>
            <th style={{
              textAlign: 'left',
              padding: '14px 22px',
              background: '#f8faff',
              color: '#3f556b',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Date
            </th>
            <th style={{
              textAlign: 'left',
              padding: '14px 22px',
              background: '#f8faff',
              color: '#3f556b',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Amount
            </th>
            <th style={{
              textAlign: 'left',
              padding: '14px 22px',
              background: '#f8faff',
              color: '#3f556b',
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{
                padding: '14px 22px',
                borderBottom: '1px solid #eef2f8',
                color: '#1b273a',
                fontWeight: '600',
                fontSize: '0.85rem'
              }}>
                {order.id}
              </td>
              <td style={{
                padding: '14px 22px',
                borderBottom: '1px solid #eef2f8',
                color: '#1b273a'
              }}>
                {order.customer}
              </td>
              <td style={{
                padding: '14px 22px',
                borderBottom: '1px solid #eef2f8',
                color: '#5a6f88',
                fontSize: '0.85rem'
              }}>
                {order.date}
              </td>
              <td style={{
                padding: '14px 22px',
                borderBottom: '1px solid #eef2f8',
                color: '#1b273a',
                fontWeight: '600'
              }}>
                {order.amount}
              </td>
              <td style={{
                padding: '14px 22px',
                borderBottom: '1px solid #eef2f8'
              }}>
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;