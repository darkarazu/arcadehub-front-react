import { LoginFormStore } from './LoginFormStore';
import { UserStore } from './UserStore';

const stores = {
    loginFormStore: new LoginFormStore(),
    userStore: new UserStore()
};

export default stores;