const { fork } = require('child_process');
// Create a pool of child processes
const pool = [];
const path = require('path');

const childPath = path.join(__dirname, 'child_worker.js');

try {

  for (let i = 0; i < 2; i++) {
    const child = fork(childPath, [], { env: process.env });
    pool.push(child);
  }
} catch (error) {
  
}

// Export a function that returns a Promise
module.exports = {
   checkChild() {
      return pool.length;
    
  },

  async work (params) {
    return new Promise((resolve, reject) => {
     
      if (pool.length === 0) {
        reject(new Error('No child processes available in the pool'));
        return;
      }
      const child = pool.shift();
      if (!child) { 
        reject(new Error('No child processes available in the pool'));
        return;
      }
      let dead_child = false
      try {
        process.kill(worker.threadId, 0);
      } catch (error) {
        dead_child = true
      }

      if (dead_child) { 
        reject(new Error('No child processes available in the pool'));
        return;
      } else {
        child.send({
          payload: params.payload,
          activity: params.activity,
        });

        child.once('message', resp => {
          pool.push(child);
          try {
            if (resp.type === 'error') {
              throw new Error(resp.data);
            }
            resolve(resp.data);
          } catch (error) {
            reject(error);
          }
        })
      }
     
    })
  }
}

