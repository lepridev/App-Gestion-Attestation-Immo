import { connectToDB } from "@/config/mongodb";
import Enregistrement from "@/models/EnregistrementModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB(); // Assurer la connexion à la base de données

  try {
    const data = await Enregistrement.find();

    return NextResponse.json({
      message: "Telechargement complet...",
      data,
      success: true,
    });
  } catch (error: any) {
    console.error("Erreur lors de la récupération des enregistrements:", error);
    return NextResponse.json({
      message: "Erreur lors de la récupération des enregistrements",
      error: error.message,
      success: false,
    });
  }
}
