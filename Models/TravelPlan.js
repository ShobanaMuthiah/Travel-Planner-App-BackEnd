
import mongoose from 'mongoose';

const TravelPlanSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  details: { type: String },
  transportation: {
    type: String,
    enum: ['flight', 'train', 'car'],
    required: true,
  },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  timing: { type: String },

  image:{
    type:String, 
    required:true
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const TravelPlan = mongoose.model('TravelPlan', TravelPlanSchema);

export default TravelPlan;
