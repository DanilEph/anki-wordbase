import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    this._login = localStorage.getItem('login');
    this._chosenWordbase = localStorage.getItem('chosenWordbase');
    makeAutoObservable(this);
  }

  getLogin() {
    return this._login;
  }
  setLogin(login) {
    localStorage.setItem('login', login);
    this._login = login;
  }
  getChosenWordbase() {
    return this._chosenWordbase;
  }
  setChosenWordbase(chosenWordbase) {
    localStorage.setItem('chosenWordbase', chosenWordbase);
    this._chosenWordbase = chosenWordbase;
  }

}

export default UserStore;
