import React from 'react'
import enfermeraJoy from "../../assets/imagenes/enfermeraJoy.jpg"
import "./enContruccion.css"

const Enconstruccion = () => {
  return (
    <div className='contenedorEnContruccion'>
        <p className='textoEnContruccion'>LO SIENTO, PERO ESTA SECCIÓN ESTÁ EN CONTRUCCIÓN</p>
        <img className="imagenEnConstruccion" src={enfermeraJoy} alt="enfermeraJoy"></img>
    </div>
  )
}

export default Enconstruccion
