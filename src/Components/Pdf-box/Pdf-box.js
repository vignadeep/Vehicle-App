import "./Pdf-box.css"
import { useState } from "react";

/**
* Pdfbox funtion
* contains label and input box for uploading PDF
* @param {string} label - label of the input box - Default: text 
* @param {Function} onChange - function to call on change of the value 
* @param {Function} onInvalid - function to call on form not valid
* @returns {HTML} 
*/ 
const Pdfbox = ({label='text', onChange, onInvalid}) => {
    const [ pdf, setPdf] = useState('Select a PDF File')

    // update function to check and set PDF for use in this function
    const onUpdate = (e) => {
        if(e && e.target && e.target.files.length !== 0) {
            setPdf(e.target.files[0].name)
        } else {
            setPdf('Select a PDF File')
        }
        onChange(e)
    } 

return (
    <div className="pdfparent">
    <div className="pdflabel" >
         {label}
    </div>
    <div >
        <input className="filenameinput" value={pdf} disabled id="filename"></input>
    <div className="uploadButtonPosition">
    <label className="uploadButton" htmlFor="pdfupload">
        hochladen
    </label>
    </div>
    <input className="filebutton" type="file" id="pdfupload" name="pdfupload" accept="application/pdf" onChange={onUpdate} required onInvalid={onInvalid}/>
    </div>

    </div>
)
}

export default Pdfbox;