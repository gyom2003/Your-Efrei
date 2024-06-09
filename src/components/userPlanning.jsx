import FooterComponent from './pages/footer';
import HeaderComponent from './pages/header';
import GlobalPlanningCompo from './pages/globalComponents/globalPlanningCompo';
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";
import { notification } from 'antd';

function UserPlanning() {
    const location = useLocation();
    const loginTokenData= location.state 

    const userinfoLogin = () => {
        notification.info({
            message: "pas de données user", 
            duration: 2
        })
    }
    return (
        <>
        {loginTokenData ? (
            <div>
                <HeaderComponent/>
                <GlobalPlanningCompo loginRef={loginTokenData.loginTokenRef}/>
                <FooterComponent/>
            </div>
        ) : <>
            {userinfoLogin}
        </>}
    </>
    )
}

export default UserPlanning;