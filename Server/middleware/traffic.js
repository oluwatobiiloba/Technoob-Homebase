const TrafficMetric = require('../models/trafficMetrics');
const honeyBadger = require('../utils/honeybadger');

const trafficMetrics = (req, res, next) => {
  const { method, originalUrl } = req;
  
  // Create a new traffic metric instance
  try {
    const trafficMetric = new TrafficMetric({
      endpoint: originalUrl,
      method: method,
    });
    
    // Save the traffic metric to the database
    trafficMetric.save();
    
  } catch (error) {
    honeyBadger.notify(error);
    next();
  }
  next();
};

module.exports = trafficMetrics;
