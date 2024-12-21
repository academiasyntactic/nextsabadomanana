import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Vengo desde la ruta de la API" },
    { status: 200 }
  );
}
