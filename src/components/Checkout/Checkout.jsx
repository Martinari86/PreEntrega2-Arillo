import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import db from '../../db/db.js'
import "./checkout.css"

const Checkout = () => {

const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

const [datosForm, setDatosForm]=useState(
    {
        nombre:"",
        telefono:"",
        email:""
    }
)

const [idOrden, setIdOrden]=useState(null)

const handleChangeInput = (event)=>{
    console.log(event.target.name);
    setDatosForm({...datosForm, [event.target.name]: event.target.value})
}

const handleSubmitForm = (event)=>{
    event.preventDefault()
    //console.log(datosForm);
    const orden ={
        comprador: {...datosForm},
        stickers: [...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal() 
    }
    generarOrden(orden)
//console.log(orden);
}

const generarOrden = (orden) =>{
    const ordenesRef = collection (db,"ordenes")
    addDoc(ordenesRef, orden)
        .then((respuesta)=>{
            setIdOrden(respuesta.id); //Agregar un SWEETALERT para devolver el ID 
        })
        .catch((error)=>console.log(error))
        .finally(()=>{
            //funcion para reducir el stock
            updateStock()
            vaciarCarrito()
            
          }
        )
         
}

const updateStock= () => {
    carrito.map((sticker) => {
        let cantidad = sticker.cantidad
        console.log(cantidad);
        delete sticker.cantidad
        const stickerRef = doc(db,"pokemon", sticker.identificacion)
        setDoc(stickerRef,{...sticker, stock: sticker.stock - cantidad})
            .then(()=>console.log("Actualizacion correcta"))
            .catch((error)=>console.log(error))
        })
    }
 
return (
    <div>
        {
        idOrden ? 
                (
                    <div className='contenedorCheckOut'>  
                        <p className='textoCheckout'>Orden Generada con Exito</p>
                        <p className='textoCheckout'>Numero para seguimiento: {idOrden}</p>
                        <Link to="/"><button>Sigamos Atrapando</button></Link>
                    </div>
                ):
                (
                    <div className='contenedorCheckOut'> 
                        <p className='textoCheckout'>Te falta poco para convertirte en un VERDADERO MAESTRO POKEMON</p>
                        <p className='textoCheckout'>Completa tus Datos</p>
                        <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                    </div>
                )
        } 
     </div>
  );
};

export default Checkout
