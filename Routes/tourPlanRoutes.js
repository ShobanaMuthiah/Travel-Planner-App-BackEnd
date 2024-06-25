import express from 'express';
import { createTourPlan, getTourPlans, getTourPlanById, updateTourPlan, deleteTourPlan } from '../Controllers/tourPlanController.js';
import { checkAuth } from '../Middlewares/authMiddleware.js';


const router = express.Router();

router.post('/create', checkAuth, createTourPlan);
router.get('/', getTourPlans);
router.get('/:id', getTourPlanById);
router.put('/:id', checkAuth, updateTourPlan);
router.delete('/:id', checkAuth,  deleteTourPlan);

export default router;
