// src/App.js

import React, { useState, useEffect } from 'react';
import PageSelect from './components/PageSelect'; 
import PageInsights from './components/PageInsights'; 
import './App.css';

const App = () => {
  const [user, setUser] = useState(null); // State to hold user data
  const [selectedPage, setSelectedPage] = useState(''); // State to hold the selected page ID
  const [accessToken, setAccessToken] = useState(''); // State to hold the access token
  const [error, setError] = useState(''); // State to hold error messages

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '812370044392420', // Replace with your app ID
        cookie: true,
        xfbml: true,
        version: 'v20.0'
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const handleLogin = () => {
    if (window.FB) {
      window.FB.login((response) => {
        if (response.status === 'connected') {
          window.FB.api('/me', { fields: 'name, picture' }, (userData) => {
            if (userData && !userData.error) {
              setUser(userData);
              setAccessToken(response.authResponse.accessToken); 
              setError('');
            } else {
              setError('Error fetching user data.');
            }
          });
        } else {
          setError('Login failed or was cancelled.');
        }
      }, { scope: 'pages_show_list, pages_read_engagement, read_insights' });
    } else {
      setError('Facebook SDK not loaded.');
    }
  };

  // Handle page selection
  const handlePageSelect = (pageId) => {
    setSelectedPage(pageId); // Update the state with the selected page ID
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Page Insights</h1>
        {error && <div className="error-message">{error}</div>}
        {!user ? (
          <button onClick={handleLogin}>Login with Facebook</button>
        ) : (
          <div>
            <h2>Welcome, {user.name}</h2>
            <img src={user.picture.data.url} alt="Profile" />
            <PageSelect accessToken={accessToken} onPageSelect={handlePageSelect} />
            {selectedPage && <PageInsights accessToken={accessToken} pageId={selectedPage} />}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
