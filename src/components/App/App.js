import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  // const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      getProfile()
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

  // function handleLogin(password, email) {
  //   signin.then((checkedData) => {
  //       if (checkedData.token) {
  //         localStorage.setItem('jwt', checkedData.token);
  //         setIsLoggedIn(true);
  //         api.initializeApi(checkedData.token);
  //         navigate('/');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  // function handleRegister(name, password, email) {
  //   api.signup
  //     .then((res) => {
  //       navigate('/movies', { replace: true });
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  return (
    <div className="page">
      <button onClick={() => console.log(isLoggedIn)}>check login</button>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signin"
            element={
              <Login
              // onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
              // onRegister={handleRegister}
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
                  <Profile isLoggedIn={isLoggedIn}/>
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
