import { useState } from "react";
import Textbox from "../../Text-box/Text-box";
import { sendRequest } from "../../../Services/RequestService";
import "./Optimization-form.css"
import { useNavigate } from "react-router";
import { informError } from "../../../Services/ToastService";


/**
* Optimization funtion
* contains 3 input fields - man code, Fin code, con ID
* @returns {HTML} 
*/ 
const OptimizationForm = () => {
    // navigate used for redirecting to data page
    let navigate = useNavigate();

    // states to maintain input values locally
    const [ manCode, setMancode] = useState('')
    const [ Fin, setFincode] = useState('')
    const [ conID, setConID] = useState('')

    // submit function to send POST API req and route to /data page
    const SubmitForm = (e) => {
        e.preventDefault();
        console.log({manCode, Fin, conID})  
        sendRequest('/create',{manCode, Fin, conID}).then((res) => {
           navigate("/data",{ state: { dataArr: res.data.Data }});
        }).catch((err) => {
            console.log(err);
            informError("Server Error! Cannot update data. please try again")
        }).finally(() => {
            console.log("Finished")
            resetData()
        })
    }

    // reset data locally
    const resetData = () => {
        setMancode('')
        setFincode('')
        setConID('')
    }

    return (
        <>
        <form className="optForm" onSubmit={(e) => {SubmitForm(e);}}>
            <div className="title">
                Optimierung von einmen Fahrzeug
            </div>
            <Textbox placeHolder="ZSHFE" label="MAN-Code*" inputType="text" requiredLabel="(verpflichtend)" onChange={(e) => setMancode(e.target.value)} required/>
            <Textbox placeHolder="FIN" label="FIN long/short" inputType="text"  requiredLabel="(optional)" onChange={(e) => setFincode(e.target.value)}/>
            <Textbox placeHolder="Consulting ID" label="eConsulting ID" inputType="text"  requiredLabel="(optional)" onChange={(e) => setConID(e.target.value)}/>
            <div className="buttonPosition">
                <button type="submit">Fahrzeug Optimieren</button>
            </div>
        </form>
        </>
    )
}

export default OptimizationForm;