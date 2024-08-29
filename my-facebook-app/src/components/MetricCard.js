import React from 'react';
import './MetricCard.css'; 

const MetricCard = ({ title, value }) => (
  <div className="card">
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

export default MetricCard;
