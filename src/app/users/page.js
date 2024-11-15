"use client"

import React, { useEffect, useRef, useState } from "react";


function UsersPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


  console.log(data);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('/api/users'); 
            console.log("Respuesta del servidor: ", res);
            const json = await res.json();
            setData(json); 
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          } finally {
            setLoading(false);
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