import { action, observable } from 'mobx';
import * as superagent from 'superagent';

export class  UserStore {
    @observable admin = false;
    @observable username = localStorage.getItem('username');
    @observable password;

    @action doLogin(username, password) {
        switch (username) {
            case 'jefferson':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'A');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'A';
                    break;
                }
                break;
            case 'enzo':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'B');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'B';
                    break;
                }
                break;
            case 'fernando':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'C');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'C';
                    break;
                }
                break;
            case 'besay':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'D');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'D';
                    break;
                }
                break;
            case 'pablo':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'E');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'E';
                    break;
                }
                break;
            case 'paola':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'F');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'F';
                    break;
                }
                break;
            case 'raul':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'G');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'G';
                    break;
                }
                break;
            case 'yodra':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'H');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'H';
                    break;
                }
                break;
            case 'manz':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'I');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'I';
                    break;
                }
                break;
            case 'michal':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'J');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'J';
                    break;
                }
                break;
            case 'fabian':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'K');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'K';
                    break;
                }
                break;
            case 'alberto':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'L');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'L';
                    break;
                }
                break;
            case 'david':
                if (password === '1234') {
                    localStorage.setItem('APIKEY', 'M');
                    localStorage.setItem('username', username);
                    this.username = username;
                    this.password = password;
                    (<any>window).apiKey = 'M';
                    break;
                }
                break;
            default:
                localStorage.setItem('APIKEY', 'N');
                localStorage.setItem('username', 'Guest');
                break;
        }
        /*superagent.post('http://www.arcadehub.me:3000/login')
                  .send({username, password})
                  .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                       localStorage.setItem('APIKEY', res.apiKey);
                       localStorage.setItem('username', username);
                       (<any>window).apiKey = res.apiKey;
                    }
                  });*/
    }
}