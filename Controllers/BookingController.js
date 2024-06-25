// controllers/bookingController.js


import mongoose from 'mongoose';
import Booking from '../Models/Booking.js';

  export const createBooking=async (req, res)=> {
    const { customerName, customerEmail, customerPhone, transportation, departure, arrival, timing } = req.body;

    try {
      const newBooking = new Booking({
        customerName,
        customerEmail,
        customerPhone,
        transportation,
        departure,
        arrival,
        timing,
        bookedBy: req.user.id,
      });

      await newBooking.save();
      res.status(200).json({newBooking});
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  export const getAllBookings=async (req, res) =>{
    try {
      const bookings = await Booking.find().populate('bookedBy', 'email');
      res.status(200).json(bookings);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  export const getBookingById=async (req, res) =>{
      try {
        const { id } = req.params; // Extract user ID from the request parameters
        console.log(id);
        const bookings = await Booking.find({ bookedBy:id }); // Find all bookings with the bookedby field matching the user ID
    
        if (!bookings || bookings.length === 0) {
          return res.status(404).json({ message: 'No bookings found for the user' });
        }
    console.log(bookings)
        res.status(200).json(bookings); // Return the bookings as the response
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
      }
    };

  export const deleteBooking=async (req, res)=> {
    try {
      const { id } = req.params;
      let booking = await Booking.findById({_id:id});
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      await Booking.findByIdAndDelete({_id:id});
      res.json({ message: 'Booking removed' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
