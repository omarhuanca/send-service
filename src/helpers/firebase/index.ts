import admin from 'firebase-admin'

class Firebase {

  public firebaseConfig: any;
  public topicReceivePush: string;
  public key: string;
  public privKey: string;

  constructor() {
    this.topicReceivePush = process.env.FIREBASE_TOPIC_RECEIVE || '';
    this.key = process.env.G_PRIVATE_KEY || '';
    this.privKey = this.key.replace(new RegExp('\\\\n', 'g'), '*');
    this.privKey = this.privKey.replace(/\*/g, '\n');

    this.firebaseConfig = {
      type: process.env.G_TYPE,
      project_id: process.env.G_PROJECT_ID,
      private_key_id: process.env.G_PRIVATE_KEY_ID,
      private_key: this.privKey,
      client_email: process.env.G_CLIENT_EMAIL,
      client_id: process.env.G_CLIENT_ID,
      auth_uri: process.env.G_AUTH_URI,
      token_uri: process.env.G_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.G_AUTH_PROVIDER_URL,
      client_x509_cert_url: process.env.G_CLIENT_CERT_URL,
    };

    admin.initializeApp({
      credential: admin.credential.cert(this.firebaseConfig)
    });

    this.subscribeTopic = this.subscribeTopic.bind(this);
    this.unsubscribeTopic = this.unsubscribeTopic.bind(this);
    this.turnOnNotification = this.turnOnNotification.bind(this);
    this.turnOffNotification = this.turnOffNotification.bind(this);

    this.sendTopic = this.sendTopic.bind(this);
    this.sendAll = this.sendAll.bind(this);
    this.sendSomeOne = this.sendSomeOne.bind(this);
    this.sendArray = this.sendArray.bind(this);
  }

  public subscribeTopic(token: string, topic: string) {
    return admin.messaging().subscribeToTopic(token, topic);
  }

  public unsubscribeTopic(token: string, topic: string) {
    return admin.messaging().unsubscribeFromTopic(token, topic);
  }

  public turnOnNotification(token: string) {
    return this.subscribeTopic(token, this.topicReceivePush);
  }

  public turnOffNotification(token: string) {
    return this.unsubscribeTopic(token, this.topicReceivePush);
  }

  public sendTopic(topic: string, title: string, body: string) {
    const condition = `'${this.topicReceivePush}' in topics && '${topic}' in topics`;
    const message = {
      notification: { title, body },
      condition,
    };

    return admin.messaging().send(message);
  }

  public sendAll(title: string, body: string) {
    const message = {
      notification: { title, body },
      topic: this.topicReceivePush,
    };

    return admin.messaging().send(message);
  }

  public sendSomeOne(token: string, title: string, body: string) {
    const message = {
      token,
      notification: { title, body },
    };

    return admin.messaging().send(message);
  }

  public sendArray(tokens: string[], title: string, body: string) {
    const message = {
      tokens,
      notification: { title, body },
    };

    return admin.messaging().sendMulticast(message);
  }
}

export default Firebase;
