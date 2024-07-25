import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    const db = mongoose.connection;

    db.on("connected", () => {
      console.log(`MongoDB connected Succesfully 🥳 `);
    });

    db.on("error", (error) => {
      console.error(`Mongo DB connextion Error 😅: ${error.message}`);
      process.exit(1);
    });
  } catch (error: any) {
    console.error(`Error in DB 🔥: ${error.message}`);
    process.exit(1);
  }
};
