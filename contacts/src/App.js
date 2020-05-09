import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Routes } from './pages';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
