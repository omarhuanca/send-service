import { Router } from 'express';

import { smsSchema } from '@shared/smsSchema';
import { joiValidator } from '@middlewares/joi';
import { sendSMS } from '@controllers/smsController';

const router = Router();

router.post('/', [joiValidator(smsSchema)], sendSMS);

export default router;
