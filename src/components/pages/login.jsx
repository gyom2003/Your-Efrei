import HeaderComponent from './header';
import FooterComponent from './footer';
import LoginCompo from './globalComponents/loginCompo';

function Login() {
    return (
        <div>
            <HeaderComponent/>
            <LoginCompo/>
            <FooterComponent/>
        </div>
    )
}

export default Login;