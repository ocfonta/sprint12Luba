class Api {
  constructor(options) {
    this.options = options;
  }

  getUserInfo() {
    return fetch('https://praktikum.tk/cohort9/users/me', this.options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Что-то пошло не так ${err}`)
      })
      .catch(err => {

        return Promise.reject(`Что-то пошло не так ${err}`)
      })
  }

  setUserInfo(inpName, inpJob) {
    return fetch('https://praktikum.tk/cohort9/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '6af9b0d5-fde9-4d91-8997-d01e8790c6cd',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inpName,
        about: inpJob
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так ${err}`)
      })
      .catch(err => {

        return Promise.reject(`Что-то пошло не так ${err}`)
      })
  }

  getInitialCards() {
    return fetch("https://praktikum.tk/cohort9/cards", this.options)
      .then(res => {
        if (res.ok) {

          return res.json();
        }
        return Promise.reject(`Что-то пошло не так ${err}`)
      }
      )
      .catch(err => {

        return Promise.reject(`Что-то пошло не так ${err}`)
      })
  }

  // другие методы работы с API
}

