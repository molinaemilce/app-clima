const API_key = 'uk&appid=0c310b8f047f6b24a53223a1e9f742f8';




const getClima = ({ciudad='london'} = {}) =>{
    const API_url= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${API_key}`;
   
    return fetch(API_url)
    .then(res => res.json())
    .then(response => {
        const name = response.name;
        const icono = response.weather[0].icon;
        const temp = response.main.temp;
        const max = response.main.temp_max;
        const min = response.main.temp_min;
        const descripcion = response.weather[0].description;

        return name,icono,temp,max,min,descripcion
    })

    
}

export default getClima;