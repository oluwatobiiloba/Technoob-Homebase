const Contact = require('../models/contact_us');
const mailing_list = require('../models/mailing_list');
const User = require('../models/user');



module.exports = {
    async edit(id, params) {
        if (!id || !params) {
            throw new Error('Id and Params are required')
        }
        const invalidKeys = ['password', 'passwordConfirm', 'passwordChangedAt', 'passwordResetToken', 'passwordResetExpires', 'active', 'role']
        const invalidUpdate = Object.keys(params).some(key => invalidKeys.includes(key))
        if (invalidUpdate) {
            throw new Error('Invalid Parameters')
        }
        
        try {
            const user = await User.findOneAndUpdate({ _id: id }, params, { new: true })
            return user
        } catch (err) {
            throw err
        }
    },
       
    async editPassword(id, password, previous_password) { 
        try {
               if(!id || !password || !previous_password) throw new Error('Id, Password and Previous Password are required')
            const user = await User.findOne({ _id: id }).select('+password');
            const check = await user.comparePassword(previous_password,this.password)
            if (!check) { 
                  throw new Error('Invalid Password, please check and retry')
            }
            user.password = password
            user.passwordConfirm = password
            await user.save()
            const response = {
                message: 'Password Updated Successfully'
            }
            return response
            }catch(err) {
                throw err
            }
    },
    
    async editPhoto(id, photo) { 
        try {
            if(!id || !photo) throw new Error('Id and Photo are required')
            const user = await User.findByIdAndUpdate({ _id: id }, { photo: photo }, { new: true })
            return user
        } catch (err) {
            throw err
        }
    },

    async deactivate(id) { 
        try {
            if (!id) throw new Error('Id is required')
            const user = await User.findByIdAndUpdate({ _id: id }, { active: false }, { new: true })
            return user
        } catch(err) {
            throw err
        }
    },

    async activate(id) { 
        try {
            if (!id) throw new Error('Id is required')
            const user = await User.findByIdAndUpdate({ _id: id }, { active: true }, { new: true })
            return user
        } catch(err) {
            throw err
        }
    },
       
    async delete(id) {
        try {
            if (!id) throw new Error('Id is required')
            const deleted_user = await User.findByIdAndDelete({ _id: id })
            return deleted_user
        } catch (err) {
            throw err
        }
    },

    async getOne(id) {
        try {
            if (!id) throw new Error('Id is required')
            const user = await User.findById({ _id: id }).select('+active')
            return user
        } catch (err) {
            throw err
        }
    },

    async getAll() {
        try {
            const users = await User.find().select('+active')
            return users
        } catch (err) {
            throw err
        }
    },

    async contact_us(name, email, message) {
        try {
            if (!name || !email || !message) throw new Error('Name, Email and Message are required')
            const contact = await Contact.create({ name, email, message })
            return contact
        } catch (err) {
            throw err
        }
    },

    async  mailing_list(email) {
        const temporaryDomains = [
            'tempmail.com',
            'guerrillamail.com',
            'mailinator.com',
        ];
        
        const [, domain] = email.split('@');
        if (temporaryDomains.includes(domain)) {
            throw new Error('Invalid Email Address');
        }

        const response = await mailing_list.create({ email })
       return response

         }

}