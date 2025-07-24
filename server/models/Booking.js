// models/Booking.js

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  guest: Number,
  date: String,     // Keep it as string (e.g., "2025-07-25")
  time: String,     // Same for time (e.g., "12:00")
  table: Number
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
