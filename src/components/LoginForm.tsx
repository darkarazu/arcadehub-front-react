import * as React from 'react';
import * as styles from './LoginForm.css';
import { inject, observer } from 'mobx-react';
import { LoginFormStore } from '../stores/LoginFormStore';
import { UserStore } from '../stores/UserStore';



export interface LoginFormProps {
    loginFormStore?: LoginFormStore;
    userStore?: UserStore;
}

export interface LoginFormState {
    username?: string;
    password?: string;
}


@inject('loginFormStore', 'userStore')
@observer
export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.changingUser = this.changingUser.bind(this);
        this.changingPassword = this.changingPassword.bind(this);
    }

    doLogin(event) {
        event.preventDefault();
        this.props.userStore.doLogin(this.state.username, this.state.password);
        this.toggleLoginForm(event);
    }

    changingUser(event) {
        this.setState({username: event.target.value});
    }

    changingPassword(event) {
        this.setState({password: event.target.value});
    }

    toggleLoginForm(event) {
        event.preventDefault();
        this.props.loginFormStore.toggleLoginForm();
    }
    render() {
        return <div className={styles.container}>
            <form>
                <div>
                    <div className={styles.label}>Usuario</div>
                    <div className={styles.subcontainer}>
                        <div className={styles.userblock}>
                            <div>@</div>
                        </div>
                        <input type='text' className={styles.textbox} value={this.state.username} onChange={this.changingUser} placeholder='Usuario'/>
                    </div>
                </div>
                <div>
                    <div className={styles.label}>Contraseña</div>
                    <div className={styles.subcontainer}>
                        <div className={styles.userblock}>
                            <div><i className='fas fa-lock'></i></div>
                        </div>
                        <input type='password' className={styles.textbox} value={this.state.password} onChange={this.changingPassword} placeholder='Contraseña'/>
                    </div>
                </div>
                <div className={styles.enlaces}>
                    <a href='#'>Crear cuenta</a>
                    <a href='#'>Olvide mi cuenta</a>
                </div>
                <div className={styles.botones}>
                    <button className={styles.boton} onClick={this.doLogin}>Entrar</button>
                    <button className={styles.boton} onClick={this.toggleLoginForm}>Cancelar</button>
                </div>
            </form>
        </div>;
    }
}