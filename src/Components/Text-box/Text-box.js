import "./Text-box.css"

/**
* Textbox funtion
* contains label and input box
* @param {string} label - label of the input box - Default: text 
* @param {string} inputType - type of the input box - Default: text 
* @param {string} placeHolder - default placeholder value - Default: text 
* @param {string} requiredLabel - label below the input label - Default: text 
* @param {Function} onChange - function to call on change of the value 
* @param {boolean} required - whether the field can be empty or not
* @param {Function} onInvalid - function to call on form not valid
* @returns {HTML} 
*/ 
const Textbox = ({label='text', inputType='text', placeHolder='text', requiredLabel='', onChange, required, onInvalid}) => {
return (
    <div className="parent">
    <div className="label">
        {label}
        <br/>
        {requiredLabel}
    </div>
    <div className="inputPostion">
        <input type={inputType} placeholder={placeHolder} onChange={onChange} required={required} onInvalid={onInvalid}/>
    </div>

    </div>
)
}

export default Textbox;