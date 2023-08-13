const options = {
  baseUrl: 'https://api.syususp.nomoredomains.xyz',
  headers: {
    'Content-type': 'application/json',
  },
};

export const signup = (user) => {
  return fetch(`${options.baseUrl}/signup`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
};

export const signin = (user) => {
  return fetch(`${options.baseUrl}/signin`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
};

export const getProfile = (token) => {
  if (!token) {
    throw new Error('Token is missing or undefined');
  }
  console.log(55, token);
  return fetch(`${options.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
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
  }).then((response) => response.json());
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
      image: `https://api.nomoreparties.co/${data.imageUrl}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${data.imageUrl}`,
      movieId: data.movieId,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      owner: data.owner,
    }),
  }).then((response) => response.json());
};

export const getSaveMovies = () => {
  const token = localStorage.getItem('jwt');
  return fetch(`${options.baseUrl}/movies`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem('jwt');
        return [];
      } else {
        return response.json();
      }
    })
    .catch((error) => {
      console.error('getSaveMovies error', error);
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
  }).then((response) => response.json());
};
