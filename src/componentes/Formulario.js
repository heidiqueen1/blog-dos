import { useForm } from "react-hook-form"
import "../hojas-de-estilo/Formulario.css"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config";


const Formulario = () => {
  const { register, formState: {errors}, watch, handleSubmit, reset } = useForm({
    defaultValues : {comentario: "Quiero recibir todos los artículos en mi correo ",}});
  const onSubmit = (data) => {
    console.log(data);
    alert("¡Datos agregados exitosamente!");
    reset ();

    const dataRef = collection(db, "formulario");

    addDoc(dataRef, data)
    .then(() =>{
      console.log("¡Datos agregados exitosamente!");
    })
    .catch((error) => {
      console.error("Error al agregar datos", error);

    });
  };

  const incluirTelefono = watch ("incluirTelefono");

  const isValidEmail = (correo) => {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
  };

  return (
    <div>
            <h2>Formulario</h2>     {" "}
      <h3>Regístrate si deseas recibir los nuevos artículos en tu correo</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
               {" "}
        <div className="contenedor-formulario">
         <label>Nombre</label>
          <input
            className="input-text"
            type="text"
            {...register("nombre", {
              maxLength: 30,
              required: true
            })}
          ></input>
          {errors.nombre?.type === 'required' && <span>Este dato es requerido</span>}
        </div>
        <div className="contenedor-formulario">
         <label>Correo</label>
          <input
            className="input-text"
            type="email"
            {...register("correo", {
              maxLength: 30,
              required: true,
              validate: isValidEmail,
            })}
          ></input>
          {errors.correo?.type === 'required' && <span>Este dato es requerido</span>}
          {errors.correo?.type === 'validate' && <span>Debe tener formato de correo, incluye la @</span>}
        </div>
        <div className="contenedor-formulario">
        <label>Comentario</label>
          <input
            className="input-text"
            type="text"
            {...register("comentario", {
              maxLength: 300,
            })}
          ></input>
        </div>
        <div className="contenedor-formulario">
         <label>País</label>
          <select {...register("pais")}>
          <option value="ec">Ecuador</option>
            <option value="vz">Venezuela</option>
            <option value="ot">Otro</option>
          </select>
        </div>
       
        <div className="contenedor-formulario">
        <label>¿Incluir teléfono?</label>
          <input type="checkbox" {...register("incluirTelefono",{
              required: false,
            })} />
        </div>
        {incluirTelefono && (
          <div className="contenedor-formulario">
            <label>Teléfono</label>
            <input type="text" {...register("telefono")} />
          </div>
        )}


       <input className="boton" type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default Formulario;
