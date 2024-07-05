import mongoose from "mongoose";

let isConnected = false; // Suivi de l'état de la connexion

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_DB_URI!);

    isConnected = db.connections[0].readyState === 1; // Vérifie si la connexion est établie
    if (isConnected) {
      console.log("Connected to the database!");
    }
  } catch (error) {
    console.error("Something went wrong", error);
  }
};
