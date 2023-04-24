// app.js

const { fork } = require('child_process');
const child = fork('./utils/db_calls.js');

module.exports = child