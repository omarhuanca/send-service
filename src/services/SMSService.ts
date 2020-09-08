import SMS from '@helpers/sms';
import logger from '@shared/Logger';

class SMSService {

  private sms: SMS;

  constructor() {
    this.sms = new SMS();
  }

  public async sendSMS(phoneNumber: string, content: string) {
    try {
      return await this.sms.sendSMS(phoneNumber, content);
    } catch (error) {
      logger.error('TCL: sendSMS -> e', error);
      throw error;
    }
  }
}

export default SMSService;
