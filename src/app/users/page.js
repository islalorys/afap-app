import React, { useEffect, useRef, useState } from "react";


function UsersPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


  console.log(data);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('/api/users'); // Nueva ruta de tu API interna
            console.log("Respuesta del servidor: ", res);
            const json = await res.json();
            setData(json); // Almacena los datos en el estado
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          } finally {
            setLoading(false); // Deja de cargar
          }
        };
    
        fetchData();
      }, []);
    
    
      if (loading) {
        return <p>Cargando...</p>;
      }

  return (
    <div>UsersPage</div>
  )
}

export default UsersPage