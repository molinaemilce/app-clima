import React, {useState,useEffect} from "react";
import '../App.css';
//Importamos los componentes
import Buscador from '../components/Buscador/Buscador';
import Tiempo from '../components/Tiempo/Tiempo';

import Loading from "../components/Loading/Loading";
import Footer from "../components/Footer/Footer";
//Importacionde la Api


const HomePage = () => {

    const [search,setSearch] = useState(null); //Se obtiene lo que se va a buscar
    const [loading,setLoading] = useState(false);
    const [respuestaClima,setRespuestaClima] = useState(null);  //Se obtiene respuesta de la Api


    useEffect(()=>{
      if(search === null){
       return;
      }


      const getSearchApi = async () =>{
        const apiKey = '0c310b8f047f6b24a53223a1e9f742f8';
        const urlApi = await `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
        
        setLoading(true);

        await fetch(urlApi)
        .then(res=> res.json())
        .then(data =>{
          if (data.main !== undefined){
            let clima = {
              humedad: data.main.humidity,
              min: Math.round(data.main.temp_min),
              max: Math.round(data.main.temp_max),
              img: data.weather[0].icon,
              id: data.id,
              wind: data.wind.speed,
              temp: Math.round(data.main.temp),
              name: data.name,
              weather: data.weather[0].description,
              clouds: data.clouds.all,
            }
           
            setRespuestaClima(clima)
            setLoading(false);//Una vez obtenido la respuesta de la Api, sacamos el loading. 
          }else{
            setLoading(false);
            setRespuestaClima(data); //Se mandara el mje de error
        
          }
        })
      }
    getSearchApi();

    },[search])
   
     //Funcion que trae los datos del form
    const handleSearch = (data)=>{
      setSearch(data)
    }
    


  return (
  <>
  <div className="body_app">
    <div className="container">
      <div className=" text-center col-12 my-4">
        <h1>Buscador de Climas</h1>
      </div>
      <div className="row">
        <div className="col-9 col-sm-6 cl-md-7 col-lg-4 mx-auto mb-4">
          <Buscador handleSearch = {handleSearch} />
        </div>
      </div>
    </div>

    <div className="text-center body_rta">
          {loading  && <Loading/> }

          { search && !loading && (<Tiempo respuestaClima = {respuestaClima} />)}
    </div>

    <Footer />
  </div>
  </>

  )
};

export default HomePage;
