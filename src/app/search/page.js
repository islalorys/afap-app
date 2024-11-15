"use client";

import { CatalogoHerramientas } from "@/components/catalogo-herramientas";
import { Button, cn, Input, Radio, RadioGroup, Image } from "@nextui-org/react";

import { Card, CardHeader, CardBody, Spinner } from "@nextui-org/react";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

function SearchPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [serie, setSerie] = useState("");

  // if (!data) {
  //   return <p>No se pudo obtener la imagen.</p>;
  // }

  const fetchData = async () => {
    if (!serie) {
      toast.error("Por favor, ingresa un número de serie.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/test?idserie=${serie}`); // Usar el estado 'serie'
      console.log("Respuesta del servidor: ", res);
      const json = await res.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  // const fetchData = async (idSerie) => {
  //   try {
  //     const res = await fetch("/api/test?idserie=15JMN13");
  //     console.log("Respuesta del servidor: ", res);
  //     const json = await res.json();
  //     setData(json);
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error al obtener los datos:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Simulador de click para el input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4 mx-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1000px] w-full h-full space-y-4 md:space-y-0 md:space-x-4">
          {/* <CatalogoHerramientas/> */}
          <div className="w-full md:w-1/2">
            <RadioGroup
              label="Inventario"
              description="Selecciona una opción del inventario"
            >
              <CustomRadio description="Datos de herramientas" value="tools">
                Herramientas
              </CustomRadio>
              <CustomRadio description="Información de unidades" value="car">
                Autos
              </CustomRadio>
            </RadioGroup>
          </div>
          <div className="w-full md:w-1/2">
            <Input
              className="max-w-96"
              label="Buscar por serie"
              type="text"
              labelPlacement="outside"
              variant="faded"
              color="primary"
              value={serie} // Vincular el estado
              onChange={(e) => setSerie(e.target.value)} // Actualizar el estado
            />
            <Button
              onClick={fetchData}
              className="mt-4"
              color="primary"
              variant="bordered"
            >
              Buscar
            </Button>
            {/* Componente de vista previa de imagen y btn para subir */}

            <div className="flex items-center justify-center mb-4">
              {data ? (
                <>
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
                        <p className="text-tiny">
                          {item.TipoDeEquipo} - {item.Modelo}
                        </p>

                        <small className="text-default-500">
                          <span>Estatus:</span> {item.EstatusEquipo}
                        </small>
                        <div className="font-medium text-base">
                          <span>Marca:</span> {item.Marca}
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </>
              ) : (
                <div>
                  <span>Realiza una búsqueda para mostrar información</span>
                </div>
              )}
            </div>

            {data.length > 0  ? (
              <div className="flex items-center justify-center">
                <div>
                  {/* <Input
              className="mb-4"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              variant="flat"
              color="primary"
              size="lg"
              radius="lg"
  
              // labelPlacement="inside"
              // label="Subir imagen"
            /> */}

                  <div>
                    <Image
                      className=""
                      isBlurred
                      width={240}
                      src={
                        selectedImage ||
                        "https://nextui.org/images/album-cover.png"
                      }
                      alt="item"
                    />
                  </div>

                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button
                      className="mt-4"
                      onClick={handleButtonClick}
                      color="success"
                      variant="flat"
                    >
                      Subir Imagen
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
