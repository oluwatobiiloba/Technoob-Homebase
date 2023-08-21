const Jobs = require('../models/jobs.js');
const Activity = require('../models/activity.js')
const Resources = require("../models/resources");

module.exports = {
    get_all: async (query) => {
        try {
            let prompt = {};
            let page = query.page * 1 || 1;
            let limit = query.limit || 10;
            let skip = (page - 1) * limit;
            let count = 0;

            if (query.title) {
                prompt.title = { $regex: query.title, $options: 'i' };
            }
            if (query.company) {
                prompt.company = query.company;
            }
            if (query.exp) {
                prompt.exp = query.exp;
            }
            if (query.live) {
                prompt.expiryDate =  {
                    $gte: new Date()
                  }
            }

            if (query.expired) {
                prompt.expiryDate =  {
                    $lte: new Date()
                  }
            }
            if (query.workplaceType) {
                prompt.workplaceType = query.workplaceType
            }
            if (query.location) {
                prompt.location = query.location
            }

            const jobs = await Jobs.find(prompt)
                .skip(skip)
                .limit(limit);
            if (jobs) {
                count = jobs.length
            }
            const total  = await Jobs.countDocuments();
            const totalPages = Math.ceil(total / limit);

            return {
                jobs,
                page,
                limit,
                count,
                total,
                totalPages
            };
        } catch (error) {
            throw error;
        }
    },

    get: async (id,user) => { 
        try {
            const jobs = await Jobs.findById(id);

            if (!jobs) {
                throw new Error("Job not found")
            }
            jobs.views += 1
            await jobs.save()
            return jobs;
        } catch (error) {
            throw error;
        }
    },

    create: async (body) => { 
        try {
            const jobs = await Jobs.create(body);
            if (jobs) {
                const activity = {
                    user_id: jobs.uploader_id,
                    module: "job",
                    activity: {
                        activity: "Job Upload",
                        title: jobs.title,
                        location: jobs.location,
                        company: jobs.company,
                        datePosted: jobs.datePosted,
                        expiryDate: jobs.expiryDate,
                        workplaceType: jobs.workplaceType,
                        contractType: jobs.contractType,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            }
            return jobs;
        } catch (error) {
            const activity = {
                user_id: body.uploader_id,
                module: "job",
                activity: {
                    activity: "Job Upload",
                    title: body.title,
                    location: body.location,
                    company: body.company,
                    datePosted: body.datePosted,
                    expiryDate: body.expiryDate,
                    workplaceType: body.workplaceType,
                    status: "failed"
                }
            }

            await Activity.create(activity)

            throw error;
        }
    },

    count: async () => {
        try {
            const count = await Jobs.countDocuments();
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
                module: "job"
            }).skip(skip).limit(limit)
            if (activity) {
                count = activity.length
            }

            const total  = await Activity.countDocuments({
                module: "job"
            });
            const totalPages = Math.ceil(total / limit);

            return {
                activity,
                page,
                limit,
                count,
                total,
                totalPages
            }
        } catch (error) {
            throw error
        }
    },

    remove: async (id,user_id) => {
        try {
            const job = await Jobs.findById(id);
            if (job) {
                await Jobs.findByIdAndDelete(id);
                const activity = {
                    user_id: user_id,
                    module: "job",
                    activity: {
                        activity: "Job Removal",
                        title: job.title,
                        location: job.location,
                        company: job.company,
                        datePosted: job.datePosted,
                        expiryDate: job.expiryDate,
                        workplaceType: job.workplaceType,
                        contractType: job.contractType,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            } else {
                throw new Error("job does not exist")
            }
            return null
        } catch (error) {
            
            throw error;
        }
    },

    getMetrics: async () => {
        try {
            const jobs = await Jobs.find();
            let total = jobs.length
            let views = 0

            if (jobs) {
                jobs.forEach((job) => {
                    views += job.views
                })
            }

            return {
                total,
                views
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
    //         const jobs = await Jobs.findByIdAndUpdate(id, { $push: { ratings: body } }, { new: true });
    //         return jobs;
    //     } catch (error) {
    //         throw error;
    //     }
    //}
};
