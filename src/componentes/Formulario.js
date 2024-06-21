import { useForm } from "react-hook-form";
import "../hojas-de-estilo/Formulario.css";

const Formulario = () => {
  const { register, formState: {errors}, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const isValidEmail = (correo) => {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
  };

  return (
    <div>
            <h2>Formulario</h2>     {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
               {" "}
        <div className="contenedor-formulario">
         <label>Nombre</label>
          <input
            className="input-text"
            type="text"
            {...register("nombre", {
              maxLength: 10,
              required: true
            })}
          ></input>
          {errors.nombre?.type === 'required' && <p>Este dato es requerido</p>}
        </div>
        <div className="contenedor-formulario">
         <label>Correo</label>
          <input
            className="input-text"
            type="text"
            {...register("correo", {
              maxLength: 20,
              required: true,
              validate: isValidEmail,
            })}
          ></input>
          {errors.correo?.type === 'required' && <p>Este dato es requerido</p>}
          {errors.correo?.type === 'validate' && <p>Debe tener formato de correo, incluye la @</p>}
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
       <input className="boton" type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default Formulario;
