import { action, observable } from 'mobx';


export class  LoginFormStore {
    @observable visible = false;

    @action toggleLoginForm() {
        this.visible = !this.visible;
    }
}