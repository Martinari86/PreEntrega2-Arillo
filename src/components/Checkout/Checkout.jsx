import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import db from '../../db/db.js'
import "./checkout.css"
import validateForm from '../../utils/validationYup.js'
import { toast } from 'react-toastify'

//Componente que muestra el resumen de la compra 

const Checkout = () => {

const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

const [datosForm, setDatosForm]=useState(
    {
        nombre:"",
        telefono:"",
        email:"",
        emailVerificacion:""
    }
)

const [idOrden, setIdOrden]=useState(null)

//Funcion que detecta lo que ingresa el usuario en los imput
const handleChangeInput = (event)=>{
    console.log(event.target.name);
    setDatosForm({...datosForm, [event.target.name]: event.target.value})
}

//Funcion de UPLOAD del formulario a la base de datos
const handleSubmitForm = async (event)=>{
    //Esta setencia es para que quede todo como esta y no se pierda la informacion
    event.preventDefault()
    //console.log(datosForm);
    const orden ={
        comprador: {...datosForm},
        stickers: [...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal() 
    }
    try{
    //Se valida el formulario antes de Ejectuar la Orden y se guarda en una variable
    const response = await validateForm(datosForm)
    //console.log(response.status);
    //Una vez validado el formulario se genera la orden
    //Se chequea que el formulario este validado y los emails sean iguales
    if(response.status==="succes" && datosForm.email === datosForm.emailVerificacion){  
            generarOrden(orden)
            }else{
                {response.email === response.emailVerificacion ? toast.warning("Los Correos no Coinciden") :
                toast.warning("Complete Datos Obligatorios") 
                }    
            }
    //console.log(orden);
    }
    catch{
        toast.error("Error del Servidor, intente nuevamente")
    }
}

//Funcion Generar Orden, agarra los datos y la envia a FireBase
const generarOrden = (orden) =>{
    const ordenesRef = collection (db,"ordenes")
    addDoc(ordenesRef, orden)
        .then((respuesta)=>{
            setIdOrden(respuesta.id); //Agregar un SWEETALERT para devolver el ID 
        })
        .catch((error)=>toast.error("Error en la generación de la orden, intente nuevamente"))
        .finally(()=>{
            //Funcion para reducir el stock
            updateStock()
            //Funcion para vaciar Carrito
            vaciarCarrito()   
          }
        )      
}

//Funcion para actualizar el stock
const updateStock= () => {
    carrito.map((sticker) => {
        let cantidad = sticker.cantidad
        console.log(cantidad);
        delete sticker.cantidad
        const stickerRef = doc(db,"pokemon", sticker.identificacion)
        setDoc(stickerRef,{...sticker, stock: sticker.stock - cantidad})
            .then(()=>console.log("Actualizacion Correcta"))
            .catch((error)=>toast.error("Error del Servidor, intente nuevamente"))
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
                        <Link to="/"><button className='botonContinuarCheckOut'>Sigamos Atrapando</button></Link>
                    </div>
                ):
                (
                    <div className='contenedorCheckOut'> 
                        <p className='textoCheckout'>Te falta poco para convertirte en un VERDADERO MAESTRO POKEMON</p>
                        <p className='textoCheckout'>Datos del Entrenador</p>
                        <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                    </div>
                )
        } 
     </div>
  );
};

export default Checkout
