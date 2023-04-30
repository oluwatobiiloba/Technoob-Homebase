//queue listener for azure queue
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const { QueueClient, QueueServiceClient } = require("@azure/storage-queue");
const accountName = config.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const queueName = process.env.AZURE_QUEUE_NAME;
const queueClient = new QueueClient(AZURE_STORAGE_CONNECTION_STRING, queueName);
const subscriber = require('azure-queue-subscriber');


const app = subscriber.create({
    queueUrl: 'https://stackliteblob.queue.core.windows.net/noob-queue',
    queueName: "noob-queue",
    connectionString: AZURE_STORAGE_CONNECTION_STRING ,
    batchSize: 1,
    handleMessage: (message, done) => {
        console.log("------------",message);
        done();
    },
  //queueService: queueClient
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();