"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,

  Image,
  Avatar,
  Button,
  Input,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import React from "react";

import Link from "next/link";

export default function LoginTecnico() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">Inicio de sesion Tecnico</p>
          <p className="text-small text-default-500">AFAP</p>
        </div>
      </CardHeader>
      <Divider />

      <div className="flex flex-col items-center justify-center">
        <div className="my-2">
          <Avatar
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>

        <div className="flex items-center justify-center w-full mb-2">
          <Input
            type="email"
            label="Email"
            variant="underlined"
            // defaultValue="junior@nextui.org"
            className="max-w-xs"
          />
        </div>
        <div className="flex items-center justify-center w-full mb-2">
          <Input
            label="Password"
            variant="underlined"
            placeholder="Enter your password"
            color="danger"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
        </div>
        <div className="mb-2 flex justify-around w-full">

          <Link href="/login-userx/signup">
            <Button color="default" variant="flat">
              Registrarse
            </Button>
          </Link>
          <Button color="primary" variant="solid">
            Iniciar Sesión
          </Button>

        </div>
      </div>
    </Card>
  );
}
