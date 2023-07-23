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

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/saved-movies" element={<SavedMovies />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
