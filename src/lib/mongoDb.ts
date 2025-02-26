import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀 MongoDB conectado");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB", error);
    process.exit(1);
  }
}
