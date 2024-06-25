import express from 'express';
import  { createTravelPlan, deleteTravelPlan, getAllTravelPlans, getTravelPlanById, updateTravelPlan } from '../Controllers/travelPlanController.js';
import { checkAuth } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', checkAuth, createTravelPlan);

router.get('/', checkAuth,getAllTravelPlans);
router.get('/:id', checkAuth, getTravelPlanById);
router.put('/:id',checkAuth,updateTravelPlan);
router.delete('/:id', checkAuth,deleteTravelPlan);

export default router;