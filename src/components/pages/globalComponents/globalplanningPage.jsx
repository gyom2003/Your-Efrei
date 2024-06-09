import HeaderComponent from '../header';
import FooterComponent from '../footer';
import GlobalPlanningCompo from "../globalComponents/globalPlanningCompo";
import GlobalGrades from '../../globalGrades';
import { useLocation } from 'react-router';
import { Navigate } from "react-router-dom";
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import ModalCreateEvent from "../teacherComponents/modalCreateEvent";

function GlobalplanningPage() {
    const location = useLocation();
    const loginTokenData = location.state
    const planningGradesToken = loginTokenData.gradesState 

    const [calandarSelect, setcalandarSelect] = useState(null);
    const [events, setEvents] = useState(() => {
        const localEventsRef = window.localStorage.getItem('eventsLocal')
        return localEventsRef ? JSON.parse(localEventsRef) : []
    });
    const condShowButton = calandarSelect && loginTokenData.isProfRef;

    useEffect(() => {
        if (events.length > 0) {
            window.localStorage.setItem('eventsLocal', JSON.stringify(events))
        } else {
            console.log("no modif")
        }
    }, [events])

    const teacherinfoLogin = () => {
        notification.info({
            message: "planning teacher no data", 
            duration: 2
        })
    }
    const divPlacementStyle = {
        'display': 'flex', 
        'flex-direction' : 'column',    
    } 
    const footerPlacement = {
        'margin-top': 'auto', 
    }

    const spreadData = (event) => {
        const eventObjData = {
            ...event,  
            id: events.length + 1, 
        }
        setEvents([...events, eventObjData]);
    }

    const deleteSelectedEvent = (id) => {
        setEvents(events.filter(event => event.id !== id))
    }


    return (
        <>
            {loginTokenData ? (
                <div>
                    <div style={divPlacementStyle}>
                        <HeaderComponent/>
                        <GlobalPlanningCompo 
                        loginRef={loginTokenData} 
                        CalandarSelect={(dateValue) => setcalandarSelect(dateValue)} 
                        events={events} 
                        deleteEvent={deleteSelectedEvent}
                        />
                        {condShowButton && (
                            <ModalCreateEvent 
                            spreadDataRef={spreadData} 
                            selectedCalendar={calandarSelect}
                            loginRef={loginTokenData}
                            />
                        )}  
                        {planningGradesToken && (
                            <GlobalGrades events={events} />
                        )}
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