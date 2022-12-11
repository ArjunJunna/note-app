import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { DataContextProvider } from './context/dataContext';
import { UserDataProvider } from './context/userDataContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataContextProvider>
          <UserDataProvider>
            <App />
          </UserDataProvider>
        </DataContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
