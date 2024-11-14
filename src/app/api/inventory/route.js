import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
      ssl: { rejectUnauthorized: true },
    });

    const [rows] = await connection.execute('SELECT * FROM scec.vw_employee_ce_detail LIMIT 100;');

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}