const Resources = require('../models/resources.js');
const Activity = require('../models/activity.js')

module.exports = {
    get_all: async (query) => {
        try {
            let prompt = {};
            if (query.stack) {
                prompt.stack = { $regex: query.stack, $options: 'i' };
            }
            if (query.type) {
                prompt.type = query.type;
            }
            if (query.uploader_id) {
                prompt.uploader_id = query.uploader_id;
            }
            if (query.name) {
                prompt.name = { $regex: query.name, $options: 'i' };
            }
            if (query.username) {
                prompt['meta.uploader.username'] = { $regex: query.username, $options: 'i' };
            }

            const resources = await Resources.find(prompt);
            return resources;
        } catch (error) {
            throw error;
        }
    },

    getMetrics: async () => {
        try {
            const resources = await Resources.find();
            let total = resources.length
            let downloads = 0
            let uploads = total
            let traffic = 0

            if (resources) {
                resources.forEach((resource) => {
                    traffic += resource.traffic 
                    downloads += resource.downloads
                })
            }

            return {
                uploads,
                downloads,
                traffic
            };
        } catch (error) {
            throw error;
        }
    },

    get: async (id,user) => { 
        try {
            const resources = await Resources.findById(id);
            if (resources) {
                resources.traffic += 1
                user === 0 ? null : resources.users.push(user)
                resources.save()
            }
            return resources;
        } catch (error) {
            throw error;
        }
    },

    create: async (body) => { 
        try {
            const resources = await Resources.create(body);
            if (resources) {
                const activity = {
                    user_id: resources.uploader_id,
                    module: "resource",
                    activity: {
                        activity: "Resource Upload",
                        fileName: resources.name,
                        stack: resources.stack,
                        type: resources.type,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            }
            return resources;
        } catch (error) {
            const activity = {
                user_id: body.uploader_id,
                module: "resource",
                activity: {
                    activity: "Resource Upload",
                    fileName: body.name,
                    stack: body.stack,
                    type: body.type,
                    status: "Failed"
                }
            }
            await Activity.create(activity)

            throw error;
        }
    },

    count: async () => {
        try {
            const count = await Resources.countDocuments();
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
                module: "resource"
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
            const resources = await Resources.findByIdAndDelete(id);
            return resources;
        } catch (error) {
            throw error;
        }
    },

    download: async (id) => {
        try {
            const resources = await Resources.findById(id);
            if (resources) {
                resources.downloads += 1
                resources.save()
            }

            return resources.file;
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    rate: async (id, rating) => {
        try {
            const body = { 
                user_id: rating.user_id,
                rating: rating.rating
             };
            const resources = await Resources.findByIdAndUpdate(id, { $push: { ratings: body } }, { new: true });
            return resources;
        } catch (error) {
            throw error;
        }
    }
};
