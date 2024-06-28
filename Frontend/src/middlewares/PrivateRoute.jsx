import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ element, ...rest }) {
  const token = localStorage.getItem('token');

  return (
    <Route {...rest} element={token ? element : <Navigate to="/login" />} />
  );
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
