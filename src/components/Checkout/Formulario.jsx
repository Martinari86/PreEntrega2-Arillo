import React from 'react'
import "./formulario.css"

const Formulario = ({datosForm, handleChangeInput, handleSubmitForm}) => {
  return (
       <div> 
          <form className='formulario' onSubmit={handleSubmitForm}>
              <label className='etiquetaFormulario'>Nombre: </label>
              <input className='inputFormulario' type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
              <label className='etiquetaFormulario'>Telefono: </label>
              <input className='inputFormulario' type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
              <label className='etiquetaFormulario'>Email: </label>
              <input className='inputFormulario' type="text" name="email" value={datosForm.email} onChange={handleChangeInput} />
              <button className='botonFormulario' type="submit">Enviar Orden</button>
          </form>
        </div>
  );
}

export default Formulario
