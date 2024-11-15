const { NextResponse } = require("next/server");
import mysql from "mysql2/promise";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const idSerie = searchParams.get("idserie");

  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
      ssl: { rejectUnauthorized: true },
    });

    // Usar parámetros para evitar inyecciones SQL
    const [rows] = await connection.execute(
      "SELECT * FROM scec.vw_employee_ce_detail AS la WHERE la.noSerie = ? LIMIT 10;",
      [idSerie]
    );

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: "Error al consultar la base de datos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Data:", data);

    return NextResponse.json({
      msg: "Hello, world!",
    });
  } catch (error) {
    console.log("error", error);
  }
}
