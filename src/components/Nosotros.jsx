import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>En Latiendadepedro, somos una tienda de ropa dedicada a ofrecer una amplia variedad de productos de moda que se adaptan a todos los estilos y necesidades. Nuestra misión es brindar a nuestros clientes prendas de alta calidad, cuidadosamente seleccionadas para cada ocasión, ya sea que estés buscando un look casual, elegante o deportivo.

Nos enorgullece contar con una colección diversa que incluye ropa para hombres, mujeres y niños, asegurando que todos encuentren algo que les encante. Creemos en la importancia de combinar estilo y comodidad, y por eso trabajamos constantemente para actualizar nuestras colecciones con las últimas tendencias de moda.

En Latiendadepedro, no solo vendemos ropa, también ofrecemos una experiencia de compra única, con un enfoque en la atención al cliente, la satisfacción y un servicio personalizado. ¡Visítanos y descubre tu estilo con nosotros!

"</p>
    </div>
  )
}

export default Nosotros