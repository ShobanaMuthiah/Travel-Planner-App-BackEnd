import TravelPlan from '../Models/TravelPlan.js';

import cloudinary from '../Database/Cloudinary.js';

 export const createTravelPlan= async (req, res) =>{
    const { destination, details, transportation, departure, arrival, timing } = req.body;

    try {

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
  
      const image = req.files.image;
      const result = await cloudinary.uploader.upload(image.tempFilePath, {
        folder: 'tour_plans',
      });


      const newTravelPlan = new TravelPlan({
        destination,
        details,
        transportation,
        departure,
        arrival,
        timing,
      image: result.secure_url,

        createdBy: req.user.id,
      });

      await newTravelPlan.save();
      res.status(200).json({newTravelPlan});
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

 export const getAllTravelPlans= async (req, res)=> {
    try {
      const travelPlans = await TravelPlan.find().populate('createdBy', 'name email');
      res.json(travelPlans);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  export const getTravelPlanById=async (req, res) =>{
    try {
      const travelPlan = await TravelPlan.findById(req.params.id).populate('createdBy', 'name email');
      if (!travelPlan) {
        return res.status(404).json({ message: 'Travel plan not found' });
      }
      res.json(travelPlan);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

 export const updateTravelPlan= async (req, res)=> {
    const { destination, details, transportation, departure, arrival, timing } = req.body;

    try {
      let travelPlan = await TravelPlan.findById(req.params.id);
      if (!travelPlan) {
        return res.status(404).json({ message: 'Travel plan not found' });
      }

      travelPlan = await TravelPlan.findByIdAndUpdate(
        req.params.id,
        { destination, details, transportation, departure, arrival, timing },
        { new: true }
      );

      res.json(travelPlan);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  export const deleteTravelPlan=async (req, res)=> {
    try {
      const {id}=req.params
      let travelPlan = await TravelPlan.findById({_id:id});
      if (!travelPlan) {
        return res.status(404).json({ message: 'Travel plan not found' });
      }

      await TravelPlan.findByIdAndDelete({_id:id});
      res.json({ message: 'Travel plan removed' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }