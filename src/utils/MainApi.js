const options = {
  baseUrl: 'https://api.syususp.nomoredomains.xyz',
  headers: {
    'Content-type': 'application/json',
  },
};

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

export const signup = (user) => {
  return fetch(`${options.baseUrl}/signup`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify(user),
  }).then(checkResponse);
};

export const signin = (user) => {
  return fetch(`${options.baseUrl}/signin`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify(user),
  }).then(checkResponse);
};

export const getProfile = (token) => {
  if (!token) {
    throw new Error('Токен пропущен или неопределён');
  }
  return fetch(`${options.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const updateProfile = (user) => {
  const token = localStorage.getItem('jwt');
  return fetch(`${options.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  }).then(checkResponse);
};

export const saveMovies = (data) => {
  const token = localStorage.getItem('jwt');
  return fetch(`${options.baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co/${data.image}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image}`,
      movieId: data.movieId,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      owner: data.owner,
    }),
  }).then(checkResponse);
};

export const getSaveMovies = () => {
  const token = localStorage.getItem('jwt');
  return fetch(`${options.baseUrl}/movies`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) {
      localStorage.removeItem('jwt');
      throw new Error('Unauthorized');
    }
    return checkResponse(response);
  });
};

export const deleteSaveMovies = (id) => {
  const token = localStorage.getItem('jwt');
  return fetch(`${options.baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
