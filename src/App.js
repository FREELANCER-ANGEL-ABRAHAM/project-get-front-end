import './css/App.css';
import './sass/main.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import StartPage from './StartPage';
import AdminLogin from './AdminLogin';
import Panel from './Panel';
import NotFound from './NotFound';
import Layout from './components/Layout';
import Settings from './Settings';
import NavigationBar from './components/NavigationBar';
import Result from './Result';
import CreateLink from './CreateLink';
import Footer from './components/Footer';
import ModifyLink from './ModifyLink';

function App() {

  let location = useLocation()
  let navbarComponent

  if(location.pathname === "/panel") {
    navbarComponent = <NavigationBar navbarTitle="Mis links" settingsDisplay="d-block" />
  } else if(location.pathname === "/create") {
    navbarComponent = <NavigationBar navbarTitle="Crear link" />
  } else if(location.pathname === "/modify"){
    navbarComponent = <NavigationBar navbarTitle="Modificar link" />
  } else {
    navbarComponent = <NavigationBar brandDisplay="d-block" />
  }

  return (
    <React.Fragment>
      {navbarComponent}
      <Layout>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/result" element={<Result />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/modify:id" element={<ModifyLink />} />
          <Route path="/settings" element={<Settings />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
      
    </React.Fragment>
  );
}

export default App;
