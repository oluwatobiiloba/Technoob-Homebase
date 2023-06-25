const TrafficMetric = require('../models/trafficMetrics');

const trafficMetrics = (req, res, next) => {
  const { method, originalUrl } = req;
  
  // Create a new traffic metric instance
  const trafficMetric = new TrafficMetric({
    endpoint: originalUrl,
    method: method,
  });
  
  // Save the traffic metric to the database
  trafficMetric.save((err) => {
    if (err) {
      console.error('Error saving traffic metric:', err);
    }
  });
  
  next();
};

module.exports = trafficMetrics;
