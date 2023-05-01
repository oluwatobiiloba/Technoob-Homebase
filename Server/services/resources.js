const Resources = require('../models/resources.js');

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

            console.log(prompt);

            const resources = await Resources.find(prompt);
            return resources;
        } catch (error) {
            throw error;
        }
    },

    create: async (body) => { 
        try {
            const resources = await Resources.create(body);
            return resources;
        } catch (error) {
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

    remove: async (id) => {
        try {
            const resources = await Resources.findByIdAndDelete(id);
            return resources;
        } catch (error) {
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
