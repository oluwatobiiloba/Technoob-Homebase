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
        console.log(message.messageText);
        const data = JSON.parse(message.messageText);
        const method = data.method;
        const importedData = require(data.import);
        await importedData[method](data.data);
      } catch (err) {
        console.log(err);
        done(err)
      }
      done();
    },    
  blobConnectionString: azureStorageConnectionString,
  useAcquireLease: true,
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();