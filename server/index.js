import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bookingRoutes from "./routes/bookings.js";
import Booking from "./models/Booking.js"; 

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

mongoose.connect(
  "url",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log(" Connected to MongoDB Atlas");
}).catch((err) => {
  console.error(" Error connecting to MongoDB:", err);
});

app.use("/bookings", bookingRoutes); 

app.listen(7000, () => console.log(" Backend running on port 7000"));

app.get("/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

app.use(bodyParser.json());
const users = [];
const SECRET = 'chicinn_secret';

app.post('/api/signup', (req, res) => {
  const { name, email, username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(409).json({ msg: 'Username exists' });

  const hashed = bcrypt.hashSync(password, 8);
  users.push({ name, email, username, password: hashed });
  res.status(201).json({ msg: 'User created' });
});

app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username, name: user.name }, SECRET, { expiresIn: '1h' });
  res.json({ token, name: user.name });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

import ContactMessage from './models/ContactMessage.js';

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ msg: 'Message received successfully' });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



