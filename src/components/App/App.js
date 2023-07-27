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
import Preloader from '../Preloader/Preloader';

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/signin" element={<Login />} />
            <Route exact path="/signup" element={<Register />} />
            <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              exact
              path="/profile"
              element={<Profile isLoggedIn={isLoggedIn} />}
            />
            <Route
              exact
              path="/movies"
              element={<Movies isLoggedIn={isLoggedIn} />}
            />
            <Route
              exact
              path="/saved-movies"
              element={<SavedMovies isLoggedIn={isLoggedIn} />}
            />
            <Route exact path="*" element={<Page404 />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
