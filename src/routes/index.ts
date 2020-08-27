import { Router } from 'express';
import mailRouter from './mailRouter';
import smsRouter from './smsRouter';
import firebaseRouter from './firebaseRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/mails', mailRouter);

router.use('/sms', smsRouter);

router.use('/firebases', firebaseRouter);

// Export the base-router
export default router;
