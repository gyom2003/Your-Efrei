import HeaderComponent from './pages/header';
import FooterComponent from './pages/footer';
import HomeComponent from './pages/homeComponent';
import { useLocation } from 'react-router';
import { notification } from 'antd';
import { Navigate } from "react-router-dom";


function Homepage() {
    const location = useLocation();
    const loginTokenData= location.state
    const homepageinfoLogin = () => {
        notification.info({
            message: "Tu ne peux pas accéder à l'application sans te connecter", 
            duration: 2
        })
        return <Navigate to="/yourefrei/login" replace={true} />
    }

    return (
        <>
            {loginTokenData ? (
            <div>
                <HeaderComponent loginRef={loginTokenData.loginTokenRef}/>
                <HomeComponent/>
                <FooterComponent/>
            </div>
        ) : (
            <>
                {homepageinfoLogin()}
            </>
        )}
        </>
    )
}

export default Homepage;