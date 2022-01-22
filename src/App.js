import './css/App.css';
import './sass/main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from './StartPage';
import AdminLogin from './AdminLogin';
import Panel from './Panel';
import NotFound from './NotFound';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/panel" element={<Panel />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
