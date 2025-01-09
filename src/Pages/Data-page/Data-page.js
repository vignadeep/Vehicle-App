import { useLocation, useNavigate } from "react-router"

/**
 * Datapage for displaying the data
 * path: "/data"
 *
 * @param {Object} dataArr data array should be passed in state while navigate.
 * @returns {html} render
 */
const Datapage = () => {
    const { state } = useLocation();
    const data = state.dataArr;
    let navigate = useNavigate();
    console.log("data page:", JSON.stringify(data))

    // iterate & create list element for each key of each object inside the array
    const listItems = data.map((d, i) => {
        return (
        <>
            JSON Entry #{i+1}
            <li key={'man'+i}>{d.manCode}</li>
            <li key={'Fin'+i}>{d.Fin || 'NULL'}</li>
            <li key={'con'+i}>{d.conID || 'NULL'}</li>
            <br/>
        </>
    )});

    const goback = () => {
        navigate(-1);
    }

    return (<>
    {listItems}
    <button onClick={goback}> BACK </button>
    </>)
}

export default Datapage;