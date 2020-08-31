import { Router } from 'express';
import mailRouter from './mailRouter';
import firebaseRouter from './firebaseRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/mail', mailRouter);

router.use('/firebase', firebaseRouter);

// Export the base-router
export default router;
