import { connectToDB } from "@/config/mongodb";
import Enregistrement from "@/models/EnregistrementModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const data = await Enregistrement.find();
    if (data) {
      return NextResponse.json({
        message: "Telechargement complet...",
        data,
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
