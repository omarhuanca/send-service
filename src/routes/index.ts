import { Router } from 'express';
import mailRouter from './mailRouter';
import firebaseRouter from './firebaseRoute';
import smsRouter from './smsRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/mail', mailRouter);

router.use('/firebase', firebaseRouter);

router.use('/sms', smsRouter);

// Export the base-router
export default router;
