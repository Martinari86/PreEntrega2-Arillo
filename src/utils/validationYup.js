
import { object, string, mixed } from "yup";

let userSchema = object({
    nombre: string().required("Nombre es Requerido"),
    telefono: mixed().required("Telefono es Requerido"),
    email: string().email().required("Email es Requerido")
})

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