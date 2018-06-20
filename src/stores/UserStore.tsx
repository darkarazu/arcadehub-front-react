import { action, observable } from 'mobx';
import * as superagent from 'superagent';

export class  UserStore {
    @observable admin = false;
    @observable username = localStorage.getItem('username');
    @observable password;

    @action doLogin(username, password) {
        superagent.post('http://arcadehub.me:3000/login')
                  .send({username, password})
                  .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                       localStorage.setItem('APIKEY', res.apikey);
                       localStorage.setItem('user', username);
                    }
                  });
    }
}