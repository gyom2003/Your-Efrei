import { Alert, Badge, Button, Calendar } from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import DetailsCoursCompo from "../globalComponents/detailscoursCompo";
import { logDOM } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';

function GlobalPlanningCompo({ CalandarSelect, events, deleteEvent, loginRef }) {
    const isProfRef = loginRef[Object.keys(loginRef)[1]]    
    const [calendarValue, setcalandarValue] = useState(() => dayjs())
    const [selectedValue, setselectedValue] = useState(() => dayjs())
    const [showModalDetails, setShowModalDetails] = useState(false)

    const closeDetailsModal = () => {
        setShowModalDetails(false)
    }

    const planningSelect = (planningChoice) => {
        setcalandarValue(planningChoice);
        setselectedValue(planningChoice);
        CalandarSelect(planningChoice.format("YYYY-MM-DD"));
    }

    const planningonChange = (planningChange) => {
        setcalandarValue(planningChange);
    }

    const cellData = (value) => {
        const dataFinalCells = events.filter(event => dayjs(event.date).isSame(value, 'day'))
        const badgeStyle = {'font-weight': 'bold'}
        const textColor = {'color': 'black', 'margin': '10px', 'font-size': '13px'}
        const divButtonStyle = {'display': 'flex', 'flex-direction': 'row', 'justify-content': ''}
        // const classRefEvents = events[0][Object.keys(events[0])[1]]
        const getAllClassEvents = events.map(data => data.class)
       

        return (
          <>
            {dataFinalCells.map((eventData) => (
                <div key={eventData.id}> 
                    {!isProfRef ? (
                    eventData.class === loginRef.classDataRef && (
                            <>
                                <Badge status="success" text={`${eventData.title}`} style={badgeStyle}></Badge>
                                <div style={divButtonStyle}>
                                    <p onClick={() => setShowModalDetails(true)} style={textColor}>Voir Plus</p>
                                    {isProfRef && <p onClick={() => deleteEvent(eventData.id)} style={textColor}>Supprimer</p>}
                                </div>
                            </>
                        )
                    ) : (
                        <>
                            <Badge status="success" text={`${eventData.title}`} style={badgeStyle}></Badge>
                            <div style={divButtonStyle}>
                                <p onClick={() => setShowModalDetails(true)} style={textColor}>Voir Plus</p>
                                {isProfRef && <p onClick={() => deleteEvent(eventData.id)} style={textColor}>Supprimer</p>}
                            </div>
                        </>
                    )}
                </div>
                ))}
          </>
        )
    };

    const calandarstyle = {
        'width': '80%', 
        'float': 'right', 
    }
    const alertstyle = {
        'margin-left': '20%', 
    }
    const calandarstyleUser = {
        'width': '100%', 
    }

    return (
        <div className="globaluserplanning" style={{
            'position': 'relative', 
            'marginTop': '2.8%', 
        }}>
            <Alert 
            message={`You selected date: ${selectedValue.format("YYYY/MM/DD")}`} 
            style={isProfRef ? alertstyle : {}}/>
            <Calendar 
            value={calendarValue} 
            onSelect={planningSelect} 
            onChange={planningonChange} 
            dateCellRender={cellData} 
            style={isProfRef ? calandarstyle : calandarstyleUser}/>

            {showModalDetails && (
                <DetailsCoursCompo eventInfos={events} showModalDetailsRef={showModalDetails} onCancelEvent={closeDetailsModal}/>
            )}
        </div>
    )
}

export default GlobalPlanningCompo;