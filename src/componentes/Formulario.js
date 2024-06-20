import { useForm } from "react-hook-form";
import "../hojas-de-estilo/Formulario.css";

const Formulario = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            })}
          ></input>
        </div>
        <div className="contenedor-formulario">
         <label>Correo</label>
          <input
            className="input-text"
            type="text"
            {...register("correo", {
              maxLength: 20,
              required: true,
              pattern: /\@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          ></input>
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
