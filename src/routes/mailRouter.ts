import { Router } from 'express';

import { mailSchema } from '@shared/mailSchema';
import { joiValidator } from '@middlewares/joi';
import { sendEmail } from '@controllers/mailController';

const router = Router();

router.post('/', [joiValidator(mailSchema)], sendEmail);

export default router;
