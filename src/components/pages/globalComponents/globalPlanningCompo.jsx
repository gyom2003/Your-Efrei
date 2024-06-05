import { Alert, Calendar } from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useLocation } from 'react-router';

function GlobalPlanningCompo({ CalandarSelect }) {
    const location = useLocation();
    const loginTokenRef = location.state

    const [calendarValue, setcalandarValue] = useState(() => dayjs())
    const [selectedValue, setselectedValue] = useState(() => dayjs())

    const planningSelect = (planningChoice) => {
        setcalandarValue(planningChoice);
        setselectedValue(planningChoice);
        CalandarSelect(planningChoice);
    }

    const planningonChange = (planningChange) => {
        setcalandarValue(planningChange);
    }

    const calandarstyle = {
        'width': '80%', 
        'float': 'right', 
    }
    const alertstyle = {
        'margin-left': '20%', 
    }

    return (
        <div className="globaluserplanning" style={{
            'position': 'relative', 
            'marginTop': '2.8%', 
        }}>
            <Alert message={`You selected date: ${selectedValue.format("YYYY/MM/DD")}`} style={alertstyle}/>
            <Calendar value={calendarValue} onSelect={planningSelect} onChange={planningonChange} style={calandarstyle}/>
        </div>
    )
}

export default GlobalPlanningCompo;