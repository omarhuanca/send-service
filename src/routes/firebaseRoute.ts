import { Router } from 'express';

import { joiValidator } from '@middlewares/joi';
import { sendTopicSchema, sendSomeOneSchema, sendArraySchema, sendAllSchema, subscribeSchema, notificationSchema } from '@shared/firebaseSchema';
import { sendTopic, sendSomeOne, sendArray, sendAll, subscribeTopic, unsubscribeTopic, turnOnNotification, turnOffNotification } from '@controllers/firebaseController';

const router = Router();

router.post('/sendTopic', [joiValidator(sendTopicSchema)], sendTopic);
router.post('/sendSomeOne', [joiValidator(sendSomeOneSchema)], sendSomeOne);
router.post('/sendArray', [joiValidator(sendArraySchema)], sendArray);
router.post('/sendAll', [joiValidator(sendAllSchema)], sendAll);

router.post('/subscribeTopic', [joiValidator(subscribeSchema)], subscribeTopic);
router.post('/unsubscribeTopic', [joiValidator(subscribeSchema)], unsubscribeTopic);

router.post('/turnOnNotification', [joiValidator(notificationSchema)], turnOnNotification);
router.post('/turnOffNotication', [joiValidator(notificationSchema)], turnOffNotification);

export default router;
