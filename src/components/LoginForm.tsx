import * as React from 'react';
import * as styles from './LoginForm.css';


export default class LoginForm extends React.Component {
    render() { 
        return <div className={styles.container}>
            <form>
                <div>
                    <div className={styles.label}>Usuario</div>
                    <div className={styles.subcontainer}>
                        <div className={styles.userblock}>
                            <div>@</div>
                        </div>
                        <input type="text" className={styles.textbox} placeholder="Usuario"/>
                    </div>
                </div>
                <div>
                    <div className={styles.label}>Contraseña</div>
                    <div className={styles.subcontainer}>
                        <div className={styles.userblock}>
                            <div><i className="fas fa-lock"></i></div>
                        </div>
                        <input type="password" className={styles.textbox} placeholder="Contraseña"/>
                    </div>
                </div>
                <div className={styles.botones}>
                    <button className={styles.boton}>Entrar</button>
                    <button className={styles.boton}>Cancelar</button>
                </div>
            </form>
        </div>;
    }
}
