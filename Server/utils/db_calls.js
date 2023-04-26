// dbQueries.js
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

const mongoose = require('mongoose');
const User = require('../models/user');
const Permissions = require('../models/permissions')
const Admin = require('../models/admin')
const Contact_us = require('../models/contact_us')
const Email = require('../models/email_templates')
const Mailing_list = require('../models/mailing_list')


process.on('message', async (message) => {

  try {
    
    const { modelName, method, payload, db_instance } = message;
    const Model = mongoose.model(modelName);
  
    let result;
    if (Model && typeof Model[method] === 'function') {
      switch (true) {
        case method.includes("AndUpdate"):
          result = await Model[method](payload.id, payload.params, { new: true });
          break;
        default:
          result = await Model[method](payload);
      }
      process.send(result);
    } else {
      const error = new Error(`Model method ${method} does not exist.`);
      process.send({ type: 'error', data: `${error}` });
    }
  } catch (error) {
    console.log(error)
    process.send({ type: 'error', data: `${error}` });
  }
});


// process.on('message', async (message) => {
//   const { modelName, method, payload } = message;
//   console.log(payload);
//     const Model = mongoose.model(modelName);
//     if (Model && typeof Model[method] === 'function') {
//       const result = await Model[method](payload.id,payload.params, { new: true });
//       console.log(result);
//     process.send(result);
//     }
      
//   });
  

;
