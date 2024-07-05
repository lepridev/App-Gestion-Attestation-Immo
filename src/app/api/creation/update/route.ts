import { connectToDB } from "@/config/mongodb";
import Enregistrement from "@/models/EnregistrementModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();

  const {
    reference,
    name,
    lastname,
    profession,
    adresse,
    contact,
    lotissement,
    ilot,
    lot,
    category,
    superficie,
    observation,
    file,
    isFirstBuyer,
    antecedant,
  } = reqBody;

  try {
    await connectToDB();
    console.log(reqBody);

    const saveDoc = new Enregistrement({
      reference,
      name,
      lastname,
      profession,
      adresse,
      contact,
      lotissement,
      ilot,
      lot,
      category,
      superficie,
      observation,
      file,
      isFirstBuyer,
      antecedant,
    });
    const savedDoc = await saveDoc.save();
    if (savedDoc) {
      return NextResponse.json({
        message: "Enregistrement effectué avec succès",
        success: true,
        savedDoc,
        status: 200,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
