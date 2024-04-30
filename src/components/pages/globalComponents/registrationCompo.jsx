import { useNavigate } from "react-router-dom";
import './registrationstyle.css';

function RegistrationCompo() {
    return (
        <div className="positionLogin">
            <div className="globalLogin">
                <h2>Registration</h2>
                <form action="#">
                    <div className="formInput">
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="formInput">
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="formInput">
                        <input type="password" placeholder="Create password" required/>
                    </div>
                    <div className="formInput">
                        <input type="password" placeholder="Confirm password" required/>
                    </div>
                    <div className="textdiv">
                        <input type="checkbox"/>
                        <h3>I accept all terms & condition</h3>
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now"/>
                    </div>
                    <div className="footerText">
                        <h3>Already have an account? Login now</h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationCompo;