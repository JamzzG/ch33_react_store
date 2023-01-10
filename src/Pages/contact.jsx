import { useState } from 'react';

function Contact(){
const [isEmailVisible, setIsEmailVisible] = useState(false);

    function getEmailSection(){
        if (isEmailVisible) {
            return <h5>granthamjames@yahoo.com</h5>;
        } else {
            return <label>Click on the button below to show email</label>
        }
    }

    function toggle() {
        console.log ="contact click"
        if (isEmailVisible) {
            setIsEmailVisible(false);
        }else{
            setIsEmailVisible(true)
            ;
            }
        }

    function showHide(){
        if(isEmailVisible){
        return "Hide Email";
        }else{
        return "Show Email";
        }
    }

    return(
        <div>
            <h1>James Grantham</h1>
            {getEmailSection()}
            <br/>
            <button className="btn btn-sm btn-primary" onClick={toggle}>{showHide()}</button>
        </div>
    )
}

export default Contact