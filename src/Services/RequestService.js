
import axios from "axios"; // for sending API calls

// const serverUrl ='https://vehicle-server-jzte.onrender.com'
const serverUrl = 'http://localhost:5000'



/**
* send request funtion to send a POST REST API call to the server with the requested body
* @param {string} url - label of the input box 
* @param {object} body - type of the input box 
* @returns {Promise} promise of the request
*/ 
export const sendRequest = ( url, body) => {
    console.log("sending req", body)
    return axios.post(serverUrl + url, body);
}

/**
* send request funtion to send a POST REST API call to the server for uploading a pdf file
* @param {string} url - label of the input box 
* @param {object} event - Form event consisting of PDF input object selected by the user 
* @returns {Promise} promise of the request
*/ 
export const uploadFile = (url, event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    const config = { headers: {"Content-Type": "multipart/form-data"}};
    formData.append("pdffile", file);
    console.log("uploading File", file.name)
    return axios.post(serverUrl + url, formData, config);
}
