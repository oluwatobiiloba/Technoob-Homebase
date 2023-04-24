// dbQueries.js
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true });

process.on('message', async (message) => {
    const { modelName, method, payload } = message;
    const Model = mongoose.model(modelName);
    if (Model && typeof Model[method] === 'function') {
    const result = await Model[method](payload);
    process.send(result);
    }
      
  });
  

;
