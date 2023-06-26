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
        default: 0
      },
      
      maxAttempts: {
        type: Number,
        default: 3
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

module.exports = mongoose.model('QuizTracker', quizTracker);