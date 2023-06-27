const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const { BlobServiceClient } = require("@azure/storage-blob");
const connectionString = config.AZURE_STORAGE_CONNECTION_STRING;

if (!connectionString) throw Error('Azure Storage accountKey not found');

// Create the BlobServiceClient object with connection string
const blobServiceClient = BlobServiceClient.fromConnectionString(
    connectionString
);

module.exports = {
    async createContainer(name) {
        const options = {
            access: 'blob'
        };
        const containerClient = await blobServiceClient.createContainer(name,options);

        let container = {
            name: name,
            url: containerClient.url,
            requestId: containerClient.requestId,
            message: `Container was created successfully.`
        }
    
        return container;
    }
    ,    
    async deleteContainer(name) {
        const containerClient = blobServiceClient.getContainerClient(name);
        // Delete the container
        const deleteContainerResponse = await containerClient.delete();
        let response = {
            name: name,
            requestId: deleteContainerResponse.requestId,
            message: `Container was deleted successfully.`
        }
        return response;
    },
    async listContainers() {
        let i = 1;
        let containers = [];
        for await (const container of blobServiceClient.listContainers()) {
            containers.push({
                id: i,
                name: container.name,
                url: container.url,
                requestId: container.requestId
            });
            i++;
        }
        return containers;
    },
    async upload(container, data, name, isFile = false) {
        let availableContainers = await this.listContainers();
    
        if (!availableContainers.find(c => c.name === container)) {
           await this.createContainer(container);
        } 
        let containerClient = blobServiceClient.getContainerClient(container);
       
        const blockBlobClient = containerClient.getBlockBlobClient(name);
        const uploadBlobResponse = isFile? await blockBlobClient.uploadStream(data) : await blockBlobClient.upload(data, data.length);
        let blob = {
            name: name,
            url: blockBlobClient.url,
            requestId: uploadBlobResponse.requestId,
            message: `Blob was uploaded successfully.`
        }
        return blob;

    },
    async uploadFile(container, file) {
        const containerClient = blobServiceClient.getContainerClient(container);
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        const uploadBlobResponse = await blockBlobClient.uploadFile(file.path);
        let blob = {
            name: file.name,
            url: blockBlobClient.url,
            requestId: uploadBlobResponse.requestId,
            message: `Blob was uploaded successfully.`
        }
        return blob;

    },
    async download(container, name) {
        const containerClient = blobServiceClient.getContainerClient(container);
        const blockBlobClient = containerClient.getBlockBlobClient(name);
        const downloadBlockBlobResponse = await blockBlobClient.download(0);
        let blob = {
            name: name,
            url: blockBlobClient.url,
            requestId: downloadBlockBlobResponse.requestId,
            stream: downloadBlockBlobResponse.readableStreamBody,
            message: `Blob was downloaded successfully.`
        }
        return blob;
    },
    async deleteBlob(container, name) {
        const containerClient = blobServiceClient.getContainerClient(container);
        const blockBlobClient = containerClient.getBlockBlobClient(name);
        const deleteBlobResponse = await blockBlobClient.delete();
        let response = {
            name: name,
            requestId: deleteBlobResponse.requestId,
            message: `Blob was deleted successfully.`
        }
        return response;
    },
    async listBlobs(container) {
        const containerClient = blobServiceClient.getContainerClient(container);
        let i = 1;
        let blobs = [];
        for await (const blob of containerClient.listBlobsFlat()) {
            blobs.push({
                id: i,
                name: blob.name,
                url: blob.url,
                requestId: blob.requestId
            });
            i++;
        }
        return blobs;
    }
}