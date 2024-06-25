import cloudinary from '../Database/Cloudinary.js';
import TourPlan from '../Models/TourPlan.js';


export const createTourPlan = async (req, res) => {
  const { title, description, duration, price } = req.body;
  try {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const image = req.files.image;
    const result = await cloudinary.uploader.upload(image.tempFilePath, {
      folder: 'tour_plans',
    });

    const tourPlan = new TourPlan({
      title,
      description,
      duration,
      price,
      image: result.secure_url,
      createdBy: req.user.id
    });
    await tourPlan.save();
    res.status(201).json(tourPlan);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const getTourPlans = async (req, res) => {
  try {
    const tourPlans = await TourPlan.find().populate('createdBy', 'name email');
    res.json(tourPlans);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const getTourPlanById = async (req, res) => {
  try {
    const tourPlan = await TourPlan.findById(req.params.id).populate('createdBy', 'name email');
    if (!tourPlan) {
      return res.status(404).json({ message: 'Tour Plan not found' });
    }
    res.json(tourPlan);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const updateTourPlan = async (req, res) => {
  const { title, description, duration, price } = req.body;
  try {
    let tourPlan = await TourPlan.findById(req.params.id);
    if (!tourPlan) {
      return res.status(404).json({ message: 'Tour Plan not found' });
    }
    tourPlan.title = title;
    tourPlan.description = description;
    tourPlan.duration = duration;
    tourPlan.price = price;

    await tourPlan.save();
    res.json(tourPlan);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const deleteTourPlan = async (req, res) => {
  try {
    const {id}=req.params;
    let tourPlan = await TourPlan.findById({_id:id});
    if (!tourPlan) {
      return res.status(404).json({ message: 'Tour Plan not found' });
    }
    await TourPlan.findByIdAndDelete({_id:id});
    res.json({ message: 'Tour Plan removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};