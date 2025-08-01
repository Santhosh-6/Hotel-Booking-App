import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now,
  }
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);
export default ContactMessage;
