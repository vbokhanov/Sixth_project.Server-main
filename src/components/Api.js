export class Api {
  /** @param options */
  constructor(options) {
    this._headers = options.headers;
    this._serverURL = options.serverURL;
    this._handlePromiseReturn = ((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  /** 
    @returns {Promise<Response>} */
  getUserInfo() {
    return fetch(`${this._serverURL}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /**
   * @param data 
   * @returns {Promise<Response>}  */
  sendUserInfo(data) {
    return fetch(`${this._serverURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /**
   * @param avatar
   * @returns {Promise<Response>}  */
  updateAvatar(avatar) {
    return fetch(`${this._serverURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => this._handlePromiseReturn(res));
  }


  /** 
   * @returns {Promise<Response>}  */
  getCards() {
    return fetch(`${this._serverURL}/cards`, {
      headers: this._headers
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** 
   * @param data 
   * @returns {Promise<Response>} */
  sendCard(data) {
    return fetch(`${this._serverURL}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** 
   * @param cardID 
   * @returns {Promise<Response>} */
  deleteCard(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  /** 
   * @param cardID 
   * @returns {Promise<Response>}  */
  setLike(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** 
   * @param cardID - 
   * @returns {Promise<Response>}  */
  deleteLike(cardID) {
    return fetch(`${this._serverURL}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._handlePromiseReturn(res));
  }

}
