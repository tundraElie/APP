import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import { CssBaseline } from '@mui/material';
import axios from 'axios';
import Layout from './layouts/Layout';
import NotFoundView from './views/NotFoundView';
import FeedView from './views/Feed/FeedView';
import ChatView from './views/Chat/ChatView';
import CommunityView from './views/Community/CommunityView';
import ProfileView from './views/Profile/ProfileView';
import CreationView from './views/CreationView';
import ReadingView from './views/ReadingView';
import LoginView from './views/LoginView';
// import { AuthProvider } from './hooks/useAuth';

axios.defaults.withCredentials = true;

const App = () => (
  <>
    <CssBaseline />
    <Helmet>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins"
      />
      <title>Lixie</title>
      <meta name="description" content="App Ver 0.0.0" />
    </Helmet>
    <Router>
      {/* <AuthProvider> */}
      <Layout>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/feed" element={<FeedView />} />
          <Route path="/chat" element={<ChatView />} />
          <Route path="/curso" element={<CommunityView />} />
          <Route path="/cursos" element={<ProfileView />} />
          {/* <Route path="/cursos/:cursoId/:estudianteId" element={<CreationView />} /> */}
          <Route path="/reading" element={<ReadingView />} />
          <Route path="/creation" element={<CreationView />} />
          <Route path="/*" element={<NotFoundView />} />
        </Routes>
      </Layout>
      {/* </AuthProvider> */}
    </Router>
  </>
);

export default App;
