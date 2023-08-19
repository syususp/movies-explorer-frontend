import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getProfile } from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    
    if (token) {
      getProfile(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          localStorage.removeItem('jwt');
          console.log(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
        <Route
          path="/signin"
          element={
            <ProtectedRoute
              loggedIn={!isLoggedIn}
              element={
                <Login
                  navigate={navigate}
                  isLoggedIn={!isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute
              loggedIn={!isLoggedIn}
              element={
                <Register
                  navigate={navigate}
                  isLoggedIn={!isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          }
        />
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={
                  <Profile
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={currentUser.name}
                  />
                }
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={<Movies isLoggedIn={isLoggedIn} />}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={<SavedMovies isLoggedIn={isLoggedIn} />}
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
