import AWS from 'aws-sdk'

class SMS {

  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_KEY_ID_SNS,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_SNS,
      region: process.env.AWS_REGION,
    });

    this.sendSMS = this.sendSMS.bind(this);
  }

  public async sendSMS(phoneNumber: string, content: string) {
    const params = {
      Message: content,
      PhoneNumber: phoneNumber,
      MessageStructure: 'String',
    };

    return new AWS.SNS({ region: process.env.AWS_REGION || '', apiVersion: process.env.AWS_VERSION_SNS || '' }).publish(params).promise();
  }
}

export default SMS;
