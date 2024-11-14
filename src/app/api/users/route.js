const { NextResponse } = require("next/server");

export async function GET() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log("Datos desde el servidor");
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error al obtener datos" });
  }
}
