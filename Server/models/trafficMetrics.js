const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trafficMetric = new Schema({
  endpoint: String,
  method: String,

},{
  timestamps: true
});

module.exports = mongoose.model('TrafficMetric', trafficMetric);
