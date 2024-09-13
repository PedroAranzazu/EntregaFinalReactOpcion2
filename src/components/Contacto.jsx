import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contactanos</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="nombre" {...register("nombre")} />
            <input type="email" placeholder="email" {...register("email")} />
            <input type="phone" placeholder="teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto