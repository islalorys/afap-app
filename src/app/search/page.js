"use client";

import { CatalogoHerramientas } from "@/components/catalogo-herramientas";
import { Button, cn, Input, Radio, RadioGroup, Image } from "@nextui-org/react";

import React, { useEffect, useRef, useState } from "react";

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
  const fileInputRef = useRef(null);

  // Prueba de carga de usuario desde api propia



  // if (!data) {
  //   return <p>No se pudo obtener la imagen.</p>;
  // }

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
            />
            <Button className="mt-4" color="primary" variant="bordered">
              Buscar
            </Button>

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
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SearchPage;
