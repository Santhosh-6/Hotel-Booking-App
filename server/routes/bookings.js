// routes/bookings.js

import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// POST a new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking confirmed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET bookings by date & time
router.get("/", async (req, res) => {
  const { date, time } = req.query;
  try {
    const bookings = await Booking.find({ date, time });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
