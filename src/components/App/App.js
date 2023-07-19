import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">О проекте</Link>
            </li>
            <li>
              <Link to="/movies">Фильмы</Link>
            </li>
            <li>
              <Link to="/saved-movies">Сохранённые фильмы</Link>
            </li>
            <li>
              <Link to="/profile">Аккаунт</Link>
            </li>
            <li>
              <Link to="/signin">Авторизация</Link>
            </li>
            <li>
              <Link to="/signup">Регистрация</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Main} />
        <Route path="/movies" component={Movies} />
        <Route path="/saved-movies" component={SavedMovies} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
      </div>
    </Router>
  );
}

export default App;
