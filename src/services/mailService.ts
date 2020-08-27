import Mail from '@helpers/mail/index';
import logger from '@shared/Logger';

class MailService {

  public mail: Mail;

  constructor() {
    this.mail = new Mail();
  }

  public async sendEmail(template: string, to: string, subject: string, body: any) {
    try {
      await this.mail.sendEmail(template, to, subject, body);
    } catch (error) {
      logger.error('TCL: findUser -> e', error);
      throw error;
    }
  }
}

export default MailService;
