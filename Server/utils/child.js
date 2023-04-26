const { fork } = require('child_process');
const db_instance = require('./db_connector')
// Create a pool of child processes
const pool = [];
for (let i = 0; i < 1; i++) {
  const child = fork('./utils/db_calls.js', [], { env: process.env });

  pool.push(child);
}

// Export a function that returns a Promise
module.exports = (params) => {
  return new Promise((resolve, reject) => {
    // Get the next available child process from the pool
    const child = pool.shift();
    // Send the message to the child process
    child.send({
      modelName: params.modelName,
      method: params.method,
      payload: params.payload,
      db_instance: db_instance
    });
    // Listen for the response from the child process
    child.once('message', resp => {
      // Add the child process back to the pool
      pool.push(child);
      try {
        if (resp.type === 'error') {
          throw new Error(resp.data);
        }
        resolve(resp);
      } catch (error) {
        reject(error);
      }
    })
  })
}

