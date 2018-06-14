import { action, observable } from 'mobx';

export class  UserStore {
    @observable admin = false;
    @observable username = localStorage.getItem('username');
    @observable password;

    @action doLogin(username,password) {
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        this.username = username;
        this.password = password;
    }
}