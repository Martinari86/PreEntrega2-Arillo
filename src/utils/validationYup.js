
import { object, string, mixed } from "yup";

//Se declara los requerimientos de los atributos del objeto
let userSchema = object({
    nombre: string().required("Nombre es Requerido"),
    telefono: mixed().required("Telefono es Requerido"),
    email: string().email().required("Email es Requerido")
})

//Funcion que lee los datos ingresados por el usuario y los valida retornando un EXITO o un ERROR
const validateForm = async(datosForm) => {
    try{
        await userSchema.validate(datosForm)
        return {status: "succes"}
    }
    catch(error){
        return {status: "error", message: error.message}
    }


}

export default validateForm