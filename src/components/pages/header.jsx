// import 'antd/dist/antd.css';
import { Menu, Button, MenuProps } from "antd";
import logo from "./img/logo.png"
import "./style/headerstyle.css"
import { icons } from "antd/es/image/PreviewGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const menustyle = {
        'fontFamily': "Libre Baskerville",
        'fontWeight': 400,
        'fontStyle': "normal",
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
    ]
    const navigate = useNavigate();
    const handeMenuRedirection = (key) => {
        switch(key) {
            case 'accueil':
                navigate("/")
                break;
            case 'planning':
                navigate("/yourefrei/student/planning")
                break;
            case 'gradesmenu':
                navigate("yourefrei/student/grades")
                break;
            case 'absent':
                navigate("/yourefrei/student/absent")
                break;
            case 'documents':
                navigate("/yourefrei/student/documents")
                break;
            
            default:
                break;

        }
    }

    const logoutClick = () => {
        return navigate("/yourefrei/student/login")
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

         }}>Etudiant</p>
            <div className="buttonsbar">
                <Button 
                onClick={logoutClick}
                style={{
                position: "relative",
                marginLeft: "110%", 
                fontFamily: 'Libre Baskerville',
                fontStyle: "normal", 
                fontWeight: "400", 
                fontSize: "14px" }}
                className="elbuttonstyle" type="primary" shape="round" icon={<FontAwesomeIcon icon={faSignOutAlt}/>}>
                Logout
                </Button>
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