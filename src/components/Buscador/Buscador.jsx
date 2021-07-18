import React,{useState} from 'react';
import './Buscador.css';
const Buscador = ({handleSearch}) =>{

    const [form,setForm] = useState('');

    const handleInput = (e)=>{
      setForm(//Seteamos el objeto vacio, es decir en cada propiedad del obejto guardaremos los valores de los inputs, el nombre del elmento se le va asignar el valor ingresado, esa e sla forma de armar el objeto vacio.
     e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        handleSearch(form);
        setForm('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form_body">
                    <div className="btn_input">
                    <input 
                    type="text" 
                    name="ciudad" 
                    id="" 
                    placeholder="Ciudad" 
                    className="form-control"
                    value = {form}
                    onChange={handleInput}
                    />
                    <i className="fas fa-search"></i>
                    </div>
                </div>

                <button className ="w-100 mt-2 btn_form">
                    Buscar 
                </button>

            </form>
        </>
    )
}

export default Buscador;