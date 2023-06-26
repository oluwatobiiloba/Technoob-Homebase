const Events = require('../models/events.js');
const Activity = require('../models/activity.js')

module.exports = {
    get_all: async (query) => {
        try {
            let prompt = {};
            if (query.theme) {
                prompt.theme = { $regex: query.theme, $options: 'i' };
            }
            if (query.location) {
                prompt.location = query.location;
            }
            if (query.ticketing) {
                prompt.ticketing = query.ticketing;
            }
            if (query.fromDate || query.toDate) {
                prompt.date =  {
                    $gte: new Date(query.fromDate),
                    $lte: new Date(query.toDate),
                  }
            }

            if (query.price) {
                prompt.price = { $lte: query.price}
            }

            const events = await Events.find(prompt);
            return events;
        } catch (error) {
            throw error;
        }
    },

    async get (id,user){ 
        try {
            const events = await Events.findById(id);
            return events;
        } catch (error) {
            throw error;
        }
    },

    create: async (body) => { 
        try {
            const events = await Events.create(body);
            if (events) {
                const activity = {
                    user_id: events.uploader_id,
                    module: "event",
                    activity: {
                        activity: "Event Upload",
                        theme: events.theme,
                        location: events.location,
                        ticketing: events.ticketing,
                        date:   events.date,
                        price: events.price,
                        currency: events.currency,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            }
            return events;
        } catch (error) {
            const activity = {
                user_id: body.uploader_id,
                module: "event",
                activity: {
                    activity: "Event Upload",
                    theme: body.theme,
                    location: body.location,
                    ticketing: body.ticketing,
                    date:   body.date,
                    price: body.price,
                    currency: body.currency,
                    status: "failed"
                }
            }

            await Activity.create(activity)

            throw error;
        }
    },

    count: async () => {
        try {
            const count = await Events.countDocuments();
            return count;
        } catch (error) {
            throw error;
        }
    },

    activity: async (page, limit) => {
        const skip = (page - 1) * limit;
        let count = 0
        try {
            const activity = await Activity.find({
                module: "event"
            }).skip(skip).limit(limit)
            if (activity) {
                count = activity.length
            }

            return {
                activity,
                page,
                limit,
                count
            }
        } catch (error) {
            throw error
        }
    },

    remove: async (id) => {
       
        try {
            const event = await Events.findById(id)
            if (event) {
                await Events.findByIdAndDelete(id);
                const activity = {
                    user_id: event.uploader_id,
                    module: "event",
                    activity: {
                        activity: "Event Removal",
                        theme: event.theme,
                        location: event.location,
                        ticketing: event.ticketing,
                        date: event.date,
                        price: event.price,
                        currency: event.currency,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            } else {
                throw new Error("Event does not exist")
            }
            return Events;
        } catch (error) {
            throw error;
        }
    },

    getMetrics: async () => {
        try {
            const events = await Events.find();
            let total = events.length
            let hosted = 0
            let upcoming = 0

            if (events) {
                events.forEach((event) => {
                    if (event.date > new Date()) upcoming += 1
                    if (event.date < new Date()) hosted += 1
                })
            }

            return {
                total,
                hosted,
                upcoming
            };
        } catch (error) {
            throw error;
        }
    },

    // rate: async (id, rating) => {
    //     try {
    //         const body = { 
    //             user_id: rating.user_id,
    //             rating: rating.rating
    //          };
    //         const Events = await Events.findByIdAndUpdate(id, { $push: { ratings: body } }, { new: true });
    //         return Events;
    //     } catch (error) {
    //         throw error;
    //     }
    //}
};
