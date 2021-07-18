import './MensajeError.css'
const MensajeError = ({msg}) => {
    return ( 
        <>
        <div className=" col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 msg_error">
            <h3>{msg}</h3>
        </div>
        </>
     );
}
 
export default MensajeError;