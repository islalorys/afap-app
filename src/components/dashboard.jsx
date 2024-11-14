'use client'

import { Car, PenToolIcon as Tool, Wrench, BarChart, Download, Users } from 'lucide-react';
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="flex h-16 items-center gap-4 border-b bg-gray-100/40 px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Wrench className="h-6 w-6" />
          <span className="">AutoTools S.A.</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Inventario
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Ventas
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg?height=32&width=32"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32" />
              <span className="sr-only">Abrir menú de usuario</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuItem>Soporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard de Herramientas y Autos</h1>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Descargar Reporte
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234,567</div>
                <p className="text-xs text-muted-foreground">+15.2% respecto al mes anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Herramientas Vendidas</CardTitle>
                <Tool className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,678</div>
                <p className="text-xs text-muted-foreground">+8.3% respecto al mes anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Autos Atendidos</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12.5% respecto al mes anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,456</div>
                <p className="text-xs text-muted-foreground">+5.7% respecto al mes anterior</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Resumen de Ventas</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResumenVentas />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ventas Recientes</CardTitle>
                <CardDescription>Has realizado 156 ventas este mes.</CardDescription>
              </CardHeader>
              <CardContent>
                <VentasRecientes />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

function ResumenVentas() {
  return (
    (<div className="h-[200px] w-full bg-muted/50 flex items-center justify-center">
      <p className="text-muted-foreground">Gráfico de resumen de ventas (implementar con librería de gráficos)</p>
    </div>)
  );
}

function VentasRecientes() {
  const ventas = [
    { cliente: "Taller Mecánico Rápido", email: "taller@ejemplo.com", monto: 1250.99, producto: "Kit de Herramientas" },
    { cliente: "AutoServicio Express", email: "autoservicio@ejemplo.com", monto: 789.50, producto: "Escáner OBD-II" },
    { cliente: "Repuestos del Norte", email: "repuestos@ejemplo.com", monto: 2100.75, producto: "Elevador de Autos" },
    { cliente: "Mecánica Integral", email: "mecanica@ejemplo.com", monto: 450.25, producto: "Juego de Llaves" },
    { cliente: "Autopartes Universales", email: "autopartes@ejemplo.com", monto: 1875.00, producto: "Compresor de Aire" },
  ]

  return (
    (<div className="space-y-8">
      {ventas.map((venta, i) => (
        <div key={i} className="flex items-center">
          <img
            alt="Avatar del cliente"
            className="rounded-full"
            height="32"
            src="/placeholder.svg?height=32&width=32"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{venta.cliente}</p>
            <p className="text-sm text-muted-foreground">{venta.email}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">${venta.monto.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">{venta.producto}</p>
          </div>
        </div>
      ))}
    </div>)
  );
}