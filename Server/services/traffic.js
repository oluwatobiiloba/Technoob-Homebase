const TrafficMetric = require('../models/trafficMetrics');


module.exports = {

    async  getDailyTrafficForWeek() {
        const now = new Date();
        const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);

        const result = await TrafficMetric.aggregate([
            {
            $match: {
                timestamp: { $gte: oneWeekAgo, $lt: now }
            }
            },
            {
            $group: {
                _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
                count: { $sum: 1 }
            }
            },
            {
            $sort: { _id: 1 }
            }
        ]);

        return result;
        },
    
    async  getMetricsForLastSixMonths() {
        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: {
                year: { $year: '$timestamp' },
                month: { $month: '$timestamp' }
              },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { '_id.year': 1, '_id.month': 1 }
          }
        ]);
      
        return result;
    },
    
    async getMetricsLastThreeMonths() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: { $month: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
    },
    
    async  getMetricsLastThirtyDays() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 29);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: { $dayOfMonth: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
    },
    
    async getMetricsLastSevenDays() {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 6);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: { $dayOfWeek: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
      },
    
    async  getMonthlyTrafficForYear(year) {
        const startDate = new Date(year, 0, 1); // January 1st of the specified year
        const endDate = new Date(year + 1, 0, 1); // January 1st of the following year
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lt: endDate }
            }
          },
          {
            $group: {
              _id: { $month: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
      }
      ,
    
    async  getDailyTraffic() {
        const now = new Date();
        const oneDayAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: oneDayAgo, $lt: now }
            }
          },
          {
            $group: {
              _id: { $dayOfMonth: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
    },
    
    async  getDailyTrafficForMonth(month, year) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: { $dayOfMonth: '$timestamp' },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          }
        ]);
      
        return result;
      },

      async  getTotalTrafficByYear(year) {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31, 23, 59, 59);
      
        const result = await TrafficMetric.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate, $lte: endDate }
            }
          },
          {
            $group: {
              _id: null,
              count: { $sum: 1 }
            }
          }
        ]);
      
        if (result.length > 0) {
          return result[0].count;
        } else {
          return 0;
        }
    },
      
    async  getOverallTotalTraffic() {
        const result = await TrafficMetric.aggregate([
          {
            $group: {
              _id: null,
              count: { $sum: 1 }
            }
          }
        ]);
      
        if (result.length > 0) {
          return result[0].count;
        } else {
          return 0;
        }
      }
      

}
