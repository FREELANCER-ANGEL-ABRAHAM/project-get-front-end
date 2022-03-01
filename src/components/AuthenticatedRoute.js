import { Navigate, Route, useLocation } from 'react-router-dom';
import TokenService from '../service/authToken';
import Panel from '../Panel';

const AuthenticatedRoute = (props) => {
  let location = useLocation();
  return TokenService.getUser ? <Route path="/panel" element={< Panel />} /> : <Navigate to="/admin"/>;
};

export default AuthenticatedRoute;