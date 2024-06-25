
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  transportation: {
    type: String,
    enum: ['flight', 'train', 'car'],
    required: true,
  },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  timing: { type: String },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title:{type:String, ref:'TourPlan'}
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;
