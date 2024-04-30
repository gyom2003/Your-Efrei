import React, { useState } from 'react';
import FooterComponent from './pages/footer';
import HeaderComponent from './pages/header';
import UserPlanningCompo from './pages/userComponents/userPlanningCompo';

function UserPlanning() {
    return (
        <div>
            <HeaderComponent/>
            <UserPlanningCompo/>
            <FooterComponent/>
        </div>
    )
}

export default UserPlanning;