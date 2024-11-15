"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image, Spinner } from "@nextui-org/react";

function InventoryPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/inventory");
        console.log("Respuesta del servidor: ", res);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <Spinner label="Loading..." color="secondary" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Inventario de Equipos</h1>
      <div className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* <div className="flex-col columns-3"> */}

          {data?.map((item, index) => (
            <Card className="py-4" key={index}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="font-semibold text-base">
                  <span>Empleado:</span> {item.nbEmpleado}
                </div>
                <small className="text-default-500">
                  <span>Serie:</span> {item.noSerie}
                </small>
                {/* <div className="font-medium text-base">
                  <span>noSerie:</span> {item.noSerie}
                </div> */}
                <div className="font-medium text-sm">
                  <span>Puesto:</span> {item.Puesto}
                </div>
                <p className="text-tiny uppercase font-bold">
                  {item.TipoDeEquipo} - {item.Modelo}
                </p>
              
                <small className="text-default-500">
                  <span>Estatus:</span> {item.EstatusEquipo}
                </small>
                <div className="font-medium text-base">
                  <span>Marca:</span> {item.Marca}
                </div>
              </CardHeader>
              {/* <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody> */}
            </Card>
          ))}
        </div>
      </div>

      {/* <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <h3>
              {item.TipoDeEquipo} - {item.Modelo}
            </h3>
            <p>
              <strong>Serie:</strong> {item.noSerie}
            </p>
            <p>
              <strong>Marca:</strong> {item.Marca}
            </p>
            <p>
              <strong>Estatus:</strong> {item.EstatusEquipo}
            </p>
            <p>
              <strong>Empleado:</strong> {item.nbEmpleado}
            </p>
            <p>
              <strong>Oficina:</strong> {item.Oficina}
            </p>
            <p>
              <strong>Fecha de Asignación:</strong>{" "}
              {new Date(item.FechaDeAsignacion).toLocaleDateString()}
            </p>
            <p>
              <strong>Comentario de Asignación:</strong>{" "}
              {item.ComentarioDeAsginacion}
            </p>
            <hr />
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default InventoryPage;
