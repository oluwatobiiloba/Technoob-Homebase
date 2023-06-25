const { array } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizTracker = new Schema({
    date_started: {
        type: Date,
        default: Date.now()
      },
    
      duration_in_secs: {
        type: Number
      },
    
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user id'],
        trim: true
      },
    
      quiz_id: {
        type: Schema.Types.ObjectId,
        ref: 'Quizzes',
        required: [true, 'Please provide quiz id'],
        trim: true
      },
    
      attempted: {
        type: Object,
        default: []
      },
    
      score: {
        type: Number,
        default: 0
    },
      
    completed: {
        type: Boolean,
        default: false
      }

});

quizTracker.pre("findOneAndUpdate", async (next) => {
    try {
        const quizTracker = this;
        const updateData = quizTracker._update;

        const currentQuizTracker = await quizTracker.model.findOne(quizTracker.getQuery());

        if (!currentQuizTracker) {
            next()
        }
    
        // Check if the quiz time has elapsed
        if (currentQuizTracker && Date.now() < currentQuizTracker.date_started.getTime() + (currentQuizTracker.duration_in_secs * 1000)) {
          return next();
        }
    
        // Quiz time has elapsed, skip the update operation
        throw new Error("Quiz time has elapsed")
        
    } catch (err) {
        return next(err);
    }
})

module.exports = mongoose.model('QuizTracker', quizTracker);