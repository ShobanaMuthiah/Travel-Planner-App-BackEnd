import mongoose from 'mongoose';

const tourPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image:{
    type:String, 
    required:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

});

 const TourPlan= mongoose.model('TourPlan', tourPlanSchema);
 export default TourPlan