import './Tiempo.css'
import MensajeError from '../Errors/MensajeError'
const Tiempo = ({respuestaClima}) => { 

        if(!respuestaClima){
            return null;
        }
       
        console.log(respuestaClima.message)
        const {humedad,min,max,img,wind,temp,name,weather} = respuestaClima;
   
    return(
        <>
        {respuestaClima.message ? (
            <MensajeError msg = {respuestaClima.message}/> 
        ):(
            <div className="col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 mx-auto text-center justify-content-center rta_clima pt-4 pb-4">
                <h1>{name}</h1>
                <span className="">
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather"/>
                </span>
                <h1 className="py2">{temp} &#176;C</h1>
                <div className="clima_maxmin">
                    <h3 className="px-4">
                        <span>Min</span> <span>{min} &#176;C</span>
                    </h3>
                    <h3 className="px-4">
                        <span>Max</span> <span>{max} &#176;C</span>
                    </h3>
                </div>
                <h2 className="clima_viento">{weather}</h2>
                <h2>Viento: {wind}km/h</h2>
                <h2 className=""> Humedad: {humedad}%</h2>
            </div>
        )}
       
        </>
        
    )
}

export default Tiempo;