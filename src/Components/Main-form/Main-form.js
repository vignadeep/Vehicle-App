import OptimizationForm from "./Optimization-form/Optimization-form"
import ReportForm from "./Report-form/Report-form"
import './Main-form.css'


/**
* MainForm funtion
* pasrent Form for optimization & report form
* @returns {HTML} 
*/ 
const MainForm = () => {
    return (
    <div className="main">
        <div className="maintitle">
        MAIA
        </div>
        <div className="forms">
            <OptimizationForm/>
            <ReportForm/>
        </div>
    </div>
    )
}

export default MainForm;