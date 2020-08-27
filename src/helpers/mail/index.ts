import AWS from 'aws-sdk';

import ErrorHandler from '@helpers/errorHandler';
import logger from '@shared/Logger';
import { getTemplate } from '@helpers/mail/template';

class Mail {

  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS,
      region: process.env.AWS_REGION,
    });

    this.sendEmail = this.sendEmail.bind(this);
  }

  public async sendEmail(templateName: string, to: string, subject: string, emailData: any) {
    return new Promise(async (resolve, reject) => { // eslint-disable-line
      try {
        const htmlBody = getTemplate(templateName, emailData);
        const params = {
          Destination: { // required
            ToAddresses: [
              to,
            ]
          },
          Message: { // required
            Body: { // required
              Html: {
                Charset: 'UTF-8',
                Data: htmlBody
              }
            },
            Subject: {
              Charset: 'UTF-8',
              Data: subject,
            }
          },
          Source: process.env.SOURCE_EMAIL || '', // required
          ReplyToAddresses: [
            process.env.SOURCE_EMAIL || ''
          ]
        };

        const response = await new AWS.SES({ apiVersion: process.env.AWS_VERSION_EMAIL || '' }).sendEmail(params).promise();
        return resolve(response);
      } catch (error) {
        logger.info('Mail -> error', error);
        return reject(new ErrorHandler(500, `EMAIL ERROR: ${error.message}`));
      }
    });
  }
}

export default Mail;
