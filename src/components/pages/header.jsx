// import React from 'react';
import { Menu, Button } from "antd";
import logo from "./img/logo.png"
import "./style/headerstyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';

function HeaderComponent(loginRef) {
    const location = useLocation();
    const loginTokenRef = location.state;
    const menustyle = {
        'fontFamily': "Libre Baskerville",
        'fontWeight': 400,
        'fontStyle': "normal",
        'margin-top': '20px',
    }
    const items = [
        {
            label: "Acueil",    
            key: "accueil",    
        }, 
        {
            label: "Planning", 
            key: "planning",    
        },
        {
            label: "Scolarité", 
            key: "scolarité",    
            icon: <FontAwesomeIcon icon={faChevronDown} />,
            children: [
                {
                    type: 'group', 
                    label: 'Informations', 
                    children: [
                        {
                            label: 'Notes et crédit', 
                            key: 'gradesmenu'
                        },
                        {
                            label: 'Absences', 
                            key: 'absent'
                        }
                    ],
                },

                {
                    type: 'group', 
                    label: 'Documents', 
                    children: [
                        {
                            label: 'Bulletins, certificats et factures...', 
                            key: 'documents'
                        }
                    ]
                }
            ]
        },
        {
            label: "Logout",    
            key: "logout",    
        }, 
    ]
    const navigate = useNavigate();
    const handeMenuRedirection = (key) => {
        if (loginTokenRef.isProfRef) {
            switch(key) {
                case 'accueil':
                    navigate("/yourefrei", {state:loginTokenRef})
                    break;
                case 'planning':
                    navigate("/yourefrei/teacher/planning", {state:loginTokenRef})
                    break;
                case 'gradesmenu':
                    navigate("/yourefrei/teacher/planning", {state: { ...loginTokenRef, gradesState: true }})
                    break;
                case 'absent':
                    navigate("/yourefrei/teacher/absent", {state:{isProfRef: loginTokenRef.isProfRef}})
                    break;
                case 'documents':
                    navigate("/yourefrei/teacher/documents", {state:{isProfRef: loginTokenRef.isProfRef}})
                    break;
                case 'logout':
                    logoutClick()
                    break;
                
                default:
                    break;
            }
        } else {
            switch(key) {
                case 'accueil':
                    navigate("/yourefrei", {state:loginTokenRef})
                    break;
                case 'planning':
                    navigate("/yourefrei/student/planning", {state:loginTokenRef})
                    break;
                case 'gradesmenu':
                    navigate("/yourefrei/student/planning", {state: { ...loginTokenRef, gradesState: true }})
                    break;
                case 'absent':
                    navigate("/yourefrei/student/absent", {state:{isProfRef: loginRef.isProfRef}})
                    break;
                case 'documents':
                    navigate("/yourefrei/student/documents", {state:{isProfRef: loginRef.isProfRef}})
                    break;
                case 'logout':
                    logoutClick()
                    break;
                
                default:
                    break;
            }
        }
    }

    const logoutClick = () => {
        window.location.href = "/";
    }
    return (
        <div className="appbarglobal">
         <p className="headertext" style={{
            position: "absolute", 
            left: "10%", 
            marginTop: "30px", 
            color: "white", 
            fontFamily: 'Libre Baskerville',
            fontWeight: "400", 
            fontStyle: "normal"

         }}>
         Your-Efrei
         </p>
            <div className="buttonsbar">
            </div>

            <div className="appmenues">
                <img className="logo" src={logo} alt="your-efrei logo"/>
            </div>

            <div className="menudiv">
                <Menu mode="horizontal" items={items} onClick={({key}) => handeMenuRedirection(key)}theme="dark" style={menustyle}/> 
            </div>
        </div>
    )
}

export default HeaderComponent;