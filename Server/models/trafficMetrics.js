const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trafficMetric = new Schema({
  endpoint: String,
  method: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TrafficMetric', trafficMetric);
