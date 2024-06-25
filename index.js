import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import travelPlanRoutes from './Routes/travelPlanRoutes.js';
import BookingRoutes from './Routes/BookingRoutes.js';
import connectDB from './Database/Config.js';
import tourPlanRoutes from './Routes/tourPlanRoutes.js';
import fileUpload from 'express-fileupload';


dotenv.config();
connectDB();
const app = express();
const port=process.env.port
app.use(express.json());

app.use(cors());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));

app.use('/api/auth', authRoutes);
app.use('/api/travel-plans', travelPlanRoutes);
app.use('/api/bookings', BookingRoutes);
app.use('/api/tour-plans', tourPlanRoutes);

app.listen(port,() => {
  console.log(`Server is running on appropriate port`);
});
