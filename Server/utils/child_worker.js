
const env = process.env.NODE_ENV || 'development';
const utils = require('../utils/utils')

process.on('message', async (message) => {
  try {
    const { activity, payload, db } = message;

    switch (activity) {
      case 'Hashing':
        const hashedpassword = await utils.hashPassword(payload.password);
        process.send({ type: 'success', data: hashedpassword });
        break;
      default:
        throw new Error('Activity not found');
    }
  
  } catch (error) {
    process.send({ type: 'error', data: `${error}` });
  }
});
