import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import SkillsPage from './pages/SkillsPage';
import UserSkillsPage from './pages/UserSkillsPage';
import DashboardPage from './pages/DashboardPage';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Navigation from './components/navigation';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/user-skills" element={<UserSkillsPage />} />
          <Route path="/" element={<DashboardPage />} /> {/* Default route */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
