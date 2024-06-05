import { Alert, Calendar } from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';

function GlobalPlanningCompo() {
    const [calendarValue, setcalandarValue] = useState(() => dayjs())
    const [selectedValue, setselectedValue] = useState(() => dayjs())

    const planningSelect = (planningChoice) => {
        setcalandarValue(planningChoice)
        setselectedValue(planningChoice)
    }

    const planningonChange = (planningChange) => {
        setcalandarValue(planningChange)
    }

    return (
        <div className="globaluserplanning" style={{
            'position': 'relative', 
            'marginTop': '2.8%', 
        }}>
            <Alert message={`You selected date: ${selectedValue.format("YYYY/MM/DD")}`}/>
            <Calendar value={calendarValue} onSelect={planningSelect} onChange={planningonChange}/>
        </div>
    )
}

export default GlobalPlanningCompo;