// Retrieve the connection from an environment
// variable called AZURE_STORAGE_CONNECTION_STRING
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const { QueueClient } = require("@azure/storage-queue");
const AZURE_STORAGE_CONNECTION_STRING = config.AZURE_STORAGE_CONNECTION_STRING;
const queueName = config.AZURE_QUEUE_NAME;
const queueClient = new QueueClient(AZURE_STORAGE_CONNECTION_STRING, queueName);

module.exports = {
    async sendMessage(data) {
        try {
            
            if (!data) throw Error('No data found');
            if (typeof data !== 'string') data = JSON.stringify(data);

            const options = { visibilityTimeout: data.visibilityTimeout || 30 };
            
            await queueClient.sendMessage(data, options);
            console.log("Added message to the queue: ", data);
            return { message: 'Action successfully to job queue' };
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async deleteMessage(data) {
        try {
            if (!data) throw Error('No data found');
            if (typeof data !== 'string') data = JSON.stringify(data);
            await queueClient.deleteMessage(data.messageId, data.popReceipt);
            return { message: 'Action successfully deleted from queue' };
        } catch (error) {
            throw error;
        }
    },

    async receiveMessages() {
        try {
            const response = await queueClient.receiveMessages();
            return response.receivedMessageItems[0];
        }
        catch (error) {
            throw error;
        }

    }
}
// async function main() {
//     console.log("Azure Queue Storage client library - JavaScript quickstart sample");

//     // Instantiate a QueueClient which will be used to create and interact with a queue
  
//     messageText = {
//         "id": 1,
//         "name": "John Doe",
//         "email": "qwer",
//         "phone": "12345",
//     };
//     let data = JSON.stringify(messageText);
//     console.log("Adding message to the queue: ", data);

//     // Add a message to the queue
//     await queueClient.sendMessage(data);

//         // Get next message from the queue
//     // receivedMessages = await queueClient.receiveMessages();
//     // var message = receivedMessages
//     // console.log("Processing & deleting message with content:", message);
//     // Create the queue
//     // const createQueueResponse = await queueClient.create();
//     // console.log("Queue created, requestId:", createQueueResponse.requestId);
// }

// main().then(() => console.log("\nDone")).catch((ex) => console.log(ex.message));

