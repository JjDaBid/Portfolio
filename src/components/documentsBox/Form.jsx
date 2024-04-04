import { useState } from 'react';
import { saveInfo, fileHandler } from "../../logic/logic"
import { styles } from "../../styles";
import ProgressBar from "./ProgressBar";

const Form = () => {
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handleFileChange = (e) => {
      fileHandler(e);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      setShowProgressBar(true); // Muestra la ProgressBar cuando se presiona Guardar
      setTimeout(() => {
      setShowProgressBar(false); // Oculta la ProgressBar después de 5 segundos
      saveInfo(e); // Llama a la función saveInfo() después de ocultar la ProgressBar
    }, 5000);
  };

  return (
    <div className='flex card card-body bg-black text-light mt-20 xs:items-center xs:text-center sm:items-left lg:text-left lg:items-left'>
      <h3 className={`${styles.sectionHeadText} xs:mx-10 mt-10 sm:mx-40 my-10`} >Agregar Documento</h3>
      <div className="w-full items-center sm:text-left sm:w-[400px] sm:mx-40">
        <form onSubmit={handleFormSubmit}>

          <label className="w-full">Estandar: </label>
          <div className='form-group w-100'>
            <select id='standar' className='form-select bg-secondary text-white' required>
              <option value=""></option>
              <option value="Talento Humano">Talento Humano</option>
              <option value="Infraestructura">Infraestructura</option>
              <option value="Dotacion">Dotación</option>
              <option value="Medicamentos">Medicamentos</option>
              <option value="Procesos Prioritarios">Procesos Prioritarios</option>
              <option value="Historia Clinica">Historia Clínica</option>
              <option value="Lavado de Manos">Lavado de Manos</option>
              <option value="Formatos">Formatos</option>
              <option value="Formatos">Consentimientos</option>
            </select>
          </div>
          <label className="w-full">Servicio: </label>
          <div className='form-group w-100'>
          <select id='service' placeholder='Ingerese el nombre del servicio'  className='form-select my-1 bg-secondary text-white' required>
            <option value=""></option>
              <option value="Consulta Externa">Consulta Externa</option>
              <option value="Hospitalización">Hospitalización</option>
              <option value="Servicio Farmacéutico">Servicio Farmacéutico</option>
              <option value="Servicio Quirúrgico">Servicio Quirúrgico</option>
              <option value="Toma de Muestras">Toma de Muestras</option>
              <option value="Todos los Servicios">Todos los Servicios</option>
          </select>

          </div>

          <label className="w-full">Documento: </label>
          <div className='form-group my-1 w-100'>
          <input type='text' placeholder='Ingerese el nombre del documento' id='name' className='form-control my-1 bg-secondary text-white' required/>
          </div>
          <label className="w-full">Agregar Documento:</label> 
          <input type='file' id='file' className='form-control bg-secondary my-1 text-white' onChange={handleFileChange}/>   
          <button className='btn btn-danger button-red my-3 form-control'>Guardar</button>     
        </form>

        <div className='bg-dark w-100'>    
        
        {showProgressBar && <ProgressBar />}
        </div>
      </div>
    </div>
  )
}

export { Form }
