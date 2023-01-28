import "./contact.css";
import { useState } from "react";

function Contact() {
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function getEmailSection() {
        if (isEmailVisible) {
            return <h4>granthamjames@yahoo.com</h4>;
        } else {
            return <h4>Click on the button below to show email</h4>;
        }
    }

    function toggle() {
        console.log = "contact click";
        if (isEmailVisible) {
            setIsEmailVisible(false);
        } else {
            setIsEmailVisible(true);
        }
    }

    function showHide() {
        if (isEmailVisible) {
            return <h4>hide email</h4>;
        } else {
            return <h4>show email"</h4>;
        }
    }

    return (
        <div className="contact-div">
            <div className="contact">James Grantham</div>
            {getEmailSection()}
            <br />
            <button className="btn btn-sm btn-primary" onClick={toggle}>
                {showHide()}
            </button>
        </div>
    );
}

export default Contact;
