// index.js (Main Server File)

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookingRoutes from "./routes/bookings.js"; // You must have this file created

const app = express();

// Enable CORS for frontend
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://admin:password@cluster0.qthh0na.mongodb.net/hotelBooking?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});

// Use Routes
app.use("/bookings", bookingRoutes); // All booking-related routes

// Start the server
app.listen(7000, () => console.log("🚀 Backend running on port 7000"));
