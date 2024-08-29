// src/components/PageSelect.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PageSelect.css'; 

const PageSelect = ({ accessToken, onPageSelect }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('https://graph.facebook.com/me/accounts', {
          params: {
            access_token: accessToken
          }
        });
        setPages(response.data.data);
      } catch (err) {
        console.error('Error fetching pages:', err);
        setError('Failed to fetch pages. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchPages();
    }
  }, [accessToken]);

  if (loading) {
    return <div>Loading pages...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="page-select">
      <h2>Select a Page</h2>
      <select onChange={(e) => onPageSelect(e.target.value)}>
        <option value="">Select a page</option>
        {pages.map(page => (
          <option key={page.id} value={page.id}>
            {page.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSelect;
