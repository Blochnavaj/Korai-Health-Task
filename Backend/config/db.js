import mongoose from 'mongoose';

const connectDB = async () => {
    const MONGO_URI = "mongodb://localhost:27017"
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
