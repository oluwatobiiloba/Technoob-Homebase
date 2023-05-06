//queue listener for azure queue
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const azureStorageConnectionString= config.AZURE_STORAGE_CONNECTION_STRING;
const queueName = config.AZURE_QUEUE_NAME;
const queueUrl = config.AZURE_QUEUE_URL;
const subscriber = require('azure-queue-subscriber');
const db = require("../utils/db_connector");

 initialise_db = async () => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
  });

}

(async () => {
  await Promise.all([
    initialise_db(),
  ])

  console.log("Database connected for worker ");

})();

console.log(" Queue Subscriber started");

const app = subscriber.create({
    queueUrl: queueUrl,
    queueName: queueName,
    connectionString: azureStorageConnectionString,
    batchSize: 1,
    async handleMessage(message, done) {
      try {
        if (!message.messageText || message.messageText === 'undefined' || message.messageText === 'null' || message.messageText === '' || message.messageText === ' ' ) {
         return done();
        }
        const data = JSON.parse(message.messageText);
        const method = data.method;
        const importedData = require(data.import);
        await importedData[method](data.data);
      } catch (err) {
        console.log(err);
        done()
      }
      done();
    },    
  blobConnectionString: azureStorageConnectionString,
  useAcquireLease: true,
  maximumRetries: 4
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();