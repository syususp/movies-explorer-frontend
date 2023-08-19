import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ element, loggedIn, ...props }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    } else {
      navigate('/movies');
    }
  }, [loggedIn, navigate]);

  return loggedIn ? React.cloneElement(element, props) : null;
}

export default ProtectedRoute;
