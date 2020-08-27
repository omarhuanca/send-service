import logger from '@shared/Logger';
import SMS from '@helpers/sms/index';

class SMSService {

  public sms: SMS;

  constructor() {
    this.sms = new SMS();
  }

  public async sendSMS(phoneNumber: string, message: string) {
    try {
      await this.sms.sendSMS(phoneNumber, message);
    } catch (error) {
      logger.error('TCL: sendSMS -> e', error);
      throw error;
    }
  }
}

export default SMSService;
