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

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="page">
      <button onClick={() => console.log(isLoggedIn)}>check login</button>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={<Profile isLoggedIn={isLoggedIn} />}
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
