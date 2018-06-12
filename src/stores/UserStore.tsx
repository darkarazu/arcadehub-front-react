import { action, observable } from 'mobx';

export class  UserStore {
    @observable admin = false;
    @observable username = localStorage.getItem('username');

    @action doLogin(username,password) {
        localStorage.setItem('username',username);
        this.username = username;
    }
}