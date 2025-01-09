
import Pdfbox from "../../Pdf-box/Pdf-box";
import { useState } from "react";
import { uploadFile } from "../../../Services/RequestService";
import "./Report-form.css"
import 'react-toastify/dist/ReactToastify.css';
import { inform, informError, informSuccess } from "../../../Services/ToastService";
import React from 'react';

/**
* Report funtion
* contains 1 input fields - pdf upload and submit
* @returns {HTML} 
*/ 
const ReportForm = () => {
    const [ pdf, setPdf] = useState({})
    
    /** Function to validate the report size
    * @returns {boolean} true is size is larger than 200 MB else false
    */
    const validReportSize = (e) => {
        if(e && e.target && e.target.files.length !== 0) {
            const reportSize = e.target.files[0].size;
            if(reportSize/1024 > 200 * 1024) {
                return false;
            } else {
                return true
            }
        }
    }
  

    // submit function to send POST API req and inform user
    const SubmitForm = (e) => {
        e.preventDefault();
        if(pdf && pdf.target) {
            if(validReportSize(pdf)) {
                uploadFile('/upload', pdf).then(() => {
                    informSuccess("File uploaded");
                }).catch(() => {
                    informError("Something went wrong! file not uploaded.");
                }).finally(() => {
                    setPdf({})
                })
            } else {
                    informError("Cannot upload PDF file! size larger than 200 MB");
            }
        } else {
            inform("Please select a PDF to upload!")
        }
    }

    return (
        <>
        <form className="reportForm" onSubmit={(e) => SubmitForm(e)}>
            <div className="title">
                Start mit eScore-Report
            </div>
            <Pdfbox label="eScore Report*" onChange={(e) => setPdf(e)}/>
            <div className="reportSubmitPosition">
             <button type="submit">Report analysieren</button>
            </div>
        </form>
        </>
    )
}

export default ReportForm;