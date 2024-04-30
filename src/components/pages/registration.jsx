import HeaderComponent from './header';
import FooterComponent from './footer';
import RegistrationCompo from './globalComponents/registrationCompo';

function Registration() {
    return (
        <div>
            <HeaderComponent/>
            <RegistrationCompo/>
            <FooterComponent/>
        </div>
    )
}

export default Registration;