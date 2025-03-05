import { useState } from "react";
import NewJarPopup from "../components/NewJarPopup";

function MyJars() {
    const [ newJarPopupState, setNewJarPopupState ] = useState(false);

    function togglePopup() {
        setNewJarPopupState(!newJarPopupState);
    }

    return (
        <>
         <p onClick={togglePopup}>My Jars</p>
         <NewJarPopup popupOpen={newJarPopupState} setPopupState={{togglePopup}} />
        </>
        
    )
}

export default MyJars;