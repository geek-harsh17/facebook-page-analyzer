import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MetricCard from './MetricCard'; 

const PageInsights = ({ accessToken, pageId }) => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      if (!pageId) return; 

      try {
        const response = await axios.get(`https://graph.facebook.com/${pageId}/insights`, {
          params: {
            access_token: accessToken,
            metric: 'page_fans,page_engagement,page_impressions,page_actions_post_reactions_total',
            period: 'total',
            since: '2024-08-20', // Adjust dates as needed
            until: '2024-08-28', // Adjust dates as needed
          }
        });

        const formattedInsights = response.data.data.map(insight => ({
          title: insight.name.replace(/_/g, ' ').toUpperCase(),
          value: insight.values[0].value
        }));

        setInsights(formattedInsights);
      } catch (error) {
        console.error('Error fetching insights:', error.response ? error.response.data : error.message);
        setError(`Failed to fetch insights: ${error.response ? error.response.data.error.message : error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [accessToken, pageId]); // Trigger useEffect when accessToken or pageId changes

  if (loading) {
    return <div>Loading insights...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (insights.length === 0) {
    return <div>No insights available.</div>;
  }

  return (
    <div>
      <h2>Page Insights</h2>
      <div className="insights-container">
        {insights.map((insight) => (
          <MetricCard
            key={insight.title}
            title={insight.title}
            value={insight.value}
          />
        ))}
      </div>
    </div>
  );
};

export default PageInsights;
