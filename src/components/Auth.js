export const BASE_URL = 'https://auth.nomoreparties.co';

export const registration = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Accept': 'application/json',
              "Content-Type": "application/json"} ,
    body: JSON.stringify({email, password})
  })
    .then(checkResponse)
}

export const authorization = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {'Accept': 'application/json',
              "Content-Type": "application/json"},
    body: JSON.stringify({email, password})
  })
    .then(checkResponse)
    // .then((data) => {
    //   console.log(data)
    //   if (data.jwt){
    //     localStorage.setItem('jwt', data.jwt);
    //     return data;
    //   }
    // })
}

export const getContent = (token) => {
  return fetch(BASE_URL + '/users/me', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkResponse)
}

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // return Promise.reject(`Ошибка ${res.status}`);
}