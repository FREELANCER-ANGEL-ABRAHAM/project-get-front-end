import './css/App.css';
import './sass/main.scss';
import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
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
import backArrow from './assets/backarrow.svg'
import ChangePassword from './ChangePassword';

function App() {

  let location = useLocation()
  let navbarComponent
  let footerComponent

  if(location.pathname === "/panel") {
    navbarComponent = <NavigationBar navbarTitle="Mis links" brandDisplay="d-block" settingsDisplay="d-block" logoutDisplay="d-block" />
    footerComponent = null
  } else if(location.pathname === "/create") {
    navbarComponent = <NavigationBar navbarTitle="Crear link" settingsDisplay="d-block" logoutDisplay="d-block" />
  } else if(location.pathname === "/modify"){
    navbarComponent = <NavigationBar navbarTitle="Modificar link" settingsDisplay="d-block" logoutDisplay="d-block" />
  } else if(location.pathname === "/admin" || location.pathname === "/changepassword") {
    footerComponent = <Footer actionText="Regresar" actionHref="/" />
    navbarComponent = <NavigationBar brandDisplay="d-block" settingsDisplay="d-none"/>
  } else if(location.pathname === "/settings"){
    footerComponent = null
    navbarComponent = <NavigationBar 
                        brandDisplay="d-block" 
                        settingsDisplay="d-none" 
                        logoutDisplay="d-block"
                        logo={backArrow} 
                        logoWidth="57px" 
                        logoHeight="57px" 
                        href="/panel" />
  } else {
    navbarComponent = <NavigationBar brandDisplay="d-block" settingsDisplay="d-none"/>
    footerComponent = <Footer />
  }

  return (
    <React.Fragment>
      {navbarComponent}
      <Layout>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/panel" element={<Panel/>} />
          <Route path="/result" element={<Result />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/modify/:id" element={<ModifyLink />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" exact="true" element={<NotFound />} />
        </Routes>
      </Layout>
      {footerComponent}
      
    </React.Fragment>
  );
}

export default App;