"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Laptop,
  Shield,
  Zap,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export function PaginaInicioComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">TechReg</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Características
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            Acerca de
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#login"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Registra tus equipos con facilidad
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  eligendi tenetur mollitia illo? Nam modi laboriosam veniam
                  pariatur doloribus vel, dolorum fugit eveniet ratione optio
                  laborum maxime fuga repellat animi!
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/login-user">
                  <Button>Comenzar</Button>
                </Link>

                <Link href="/login-userx">
                  <Button variant="outline">Saber más</Button>
                </Link>

                <Link href="/search">
                  <Button variant="outline">Info</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Características
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Seguro</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tus datos están protegidos con la más alta seguridad.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Zap className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Rápido</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Registra tus equipos en cuestión de segundos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Laptop className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Versátil</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Compatible con todo tipo de dispositivos electrónicos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Acerca de Nosotros
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
              Somos una empresa dedicada a simplificar la gestión de equipos
              electrónicos para individuos y empresas. Nuestro objetivo es
              proporcionar una plataforma fácil de usar y segura para el
              registro y seguimiento de dispositivos.
            </p>
          </div>
        </section>
        <section
          id="login"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Inicia Sesión
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Accede a tu cuenta para registrar y gestionar tus equipos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" required type="password" />
                  </div>
                  <Button className="w-full">
                    Iniciar Sesión
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ¿No tienes una cuenta?{" "}
                  <Link className="underline" href="#">
                    Regístrate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 TechReg. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
