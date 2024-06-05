// import FooterComponent from './pages/footer';
// import HeaderComponent from './pages/header';
// import GlobalPlanningCompo from './pages/globalComponents/globalPlanningCompo';
// import { useLocation } from 'react-router';
// import { Navigate } from "react-router-dom";
// import { notification } from 'antd';
// import { Button } from 'antd';
// import React, { useState } from 'react';

// function TeacherPlanning() {
//     const location = useLocation();
//     const loginTokenData = location.state
//     const [calandarSelect, setcalandarSelect] = useState(null);
//     console.log("data prof", loginTokenData)
//     console.log("calandar", calandarSelect)

//     const teacherinfoLogin = () => {
//         notification.info({
//             message: "planning teacher no data", 
//             duration: 2
//         })
//     }
//     const divPlacementStyle = {
//         'display': 'flex', 
//         'flex-direction' : 'column',    
//     } 
//     const footerPlacement = {
//         'margin-top': 'auto', 
//     }
//     const buttonPlacement = {
//         'width': '8%', 
//         'display': 'flexbox', 
//         'align-items': 'flex-start', 
//         'margin-left': '30px', 
//         'bottom': '825px',
//     }
//     return (
//         <>
//             {loginTokenData ? (
//                 <div>
//                     <div style={divPlacementStyle}>
//                         <HeaderComponent/>
//                         <GlobalPlanningCompo loginRef={loginTokenData.loginTokenRef} CalandarSelect={(dateValue) => setcalandarSelect(dateValue)}/>

//                         {calandarSelect && loginTokenData.isProfRef ? (
//                             <Button type="primary" style={buttonPlacement}>Add Event</Button>  
//                         ) : <></>}
//                         <FooterComponent style={footerPlacement}/>
//                     </div>
//                 </div>
//             ) : <>
//                 {teacherinfoLogin}
//             </>}
//         </>
//     )
// }

// export default TeacherPlanning;