

import { toast } from 'react-toastify'; // for informing users

/**
 * inform Error function to inform users in red box
 * @param {String} message information to be shown in the popup
 */
export const informError = (message) => {
    toast.error(message,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
})
}

/**
 * inform function to inform users in white box
 * @param {String} message information to be shown in the popup
 */
export const inform = (message) => {
    toast.info(message,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
})
}

/**
 * inform function to inform users in green box
 * @param {String} message information to be shown in the popup
 */
export const informSuccess = (message) => {
    toast.success(message,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
})
}