import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  guest: Number,
  date: String,    
  time: String,     
  table: Number
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
