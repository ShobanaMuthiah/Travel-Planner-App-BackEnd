
import express from 'express';
import { createBooking, deleteBooking, getAllBookings, getBookingById } from '../Controllers/BookingController.js';
import { checkAuth } from '../Middlewares/authMiddleware.js';
 
const router = express.Router();

router.post('/create',checkAuth,createBooking);
router.get('/',checkAuth,getAllBookings);
router.get('/:id',checkAuth,getBookingById);
router.delete('/:id', checkAuth, deleteBooking);

export default router;