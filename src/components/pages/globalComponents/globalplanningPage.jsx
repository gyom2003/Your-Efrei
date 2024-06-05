import HeaderComponent from '../header';
import FooterComponent from '../footer';
import GlobalPlanningCompo from "../globalComponents/globalPlanningCompo";
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";
import { notification } from 'antd';
import { Button } from 'antd';
import React, { useState } from 'react';
import ModalCreateEvent from "../teacherComponents/modalCreateEvent";

function GlobalplanningPage() {
    const location = useLocation();
    const loginTokenData = location.state
    const [calandarSelect, setcalandarSelect] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    console.log("data prof", loginTokenData)
    console.log("calandar", calandarSelect)

    const teacherinfoLogin = () => {
        notification.info({
            message: "planning teacher no data", 
            duration: 2
        })
    }

    const displayEventModal = () => {
        //faut il passer directement par la template ? 
        return ModalCreateEvent()
    }
    const divPlacementStyle = {
        'display': 'flex', 
        'flex-direction' : 'column',    
    } 
    const footerPlacement = {
        'margin-top': 'auto', 
    }
    const buttonPlacement = {
        'width': '8%', 
        'display': 'flexbox', 
        'align-items': 'flex-start', 
        'margin-left': '30px', 
        'bottom': '825px',
    }
    return (
        <>
            {loginTokenData ? (
                <div>
                    <div style={divPlacementStyle}>
                        <HeaderComponent/>
                        <GlobalPlanningCompo loginRef={loginTokenData.loginTokenRef} CalandarSelect={(dateValue) => setcalandarSelect(dateValue)}/>
                        {calandarSelect && loginTokenData.isProfRef ? (
                            <Button type="primary" style={buttonPlacement} onClick={displayEventModal}>Add Event</Button>  
                        ) : <></>}
                        <FooterComponent style={footerPlacement}/>
                    </div>
                </div>
            ) : <>
                {teacherinfoLogin}
            </>}
        </>
    )
}

export default GlobalplanningPage;