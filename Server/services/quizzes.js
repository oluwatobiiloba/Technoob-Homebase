const Quizzes = require('../models/quizzes');
const Activity = require('../models/activity');
const QuizTracker = require('../models/quizTracker')

module.exports = {
    get_all: async (query) => {
        try {
            let prompt = {};
            if (query.theme) {
                prompt.theme = { $regex: query.theme, $options: 'i' };
            }
            if (query.type) {
                prompt.type = query.type;
            }
            if (query.stack) {
                prompt.stack = query.stack;
            }
            if (query.live) {
                prompt.expiryDate =  {
                    $gte: new Date()
                  }
            }

            const quiz = await Quizzes.find(prompt);
            return quiz;
        } catch (error) {
            throw error;
        }
    },

    get: async (id,user) => { 
        try {
            const quizzes = await Quizzes.findById(id);
            return quizzes;
        } catch (error) {
            throw error;
        }
    },

    create: async (body) => { 
        try {
            const quizzes = await Quizzes.create(body);
            if (quizzes) {
                const activity = {
                    user_id: quizzes.uploader_id,
                    module: "quiz",
                    activity: {
                        activity: quizzes.type === 'quiz' ? "Quiz Upload" : "Competition Upload",
                        theme: quizzes.theme,
                        type: quizzes.type,
                        stack: quizzes.stack,
                        duration: quizzes.duration,
                        deadline: quizzes.deadline,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            }
            return quizzes;
        } catch (error) {
            const activity = {
                user_id: body.uploader_id,
                module: "quiz",
                activity: {
                    activity: body.type === 'quiz' ? "Quiz Upload" : "Competition Upload",
                    theme: body.theme,
                    type: body.type,
                    stack: body.stack,
                    duration: body.duration,
                    deadline: body.deadline,
                    status: "Failed"
                }
            }
            await Activity.create(activity)
            throw error;
        }
    },

    count: async () => {
        try {
            const count = await Quizzes.countDocuments();
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
                module: "quiz"
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
            const quiz = this.get(id)
            if (quiz) {
                await Quizzes.findByIdAndDelete(id);
                const activity = {
                    user_id: quiz.uploader_id,
                    module: "quiz",
                    activity: {
                        activity: "quiz Removal",
                        theme: quiz.theme,
                        location: quiz.location,
                        ticketing: quiz.ticketing,
                        date: quiz.date,
                        price: quiz.price,
                        currency: quiz.currency,
                        status: "Successful"
                    }
                }

                await Activity.create(activity)
            } else {
                throw new Error("quiz does not exist")
            }
            return null
        } catch (error) {
            throw error;
        }
    },

    getMetrics: async () => {
        try {
            const quizzes = await Quizzes.find();
            let total = quizzes.length

            return {
                total
            };
        } catch (error) {
            throw error;
        }
    },

    getQuestion: async (id,user) => {
        try {
            const quiz = await Quizzes.findById(id);
            if (quiz) {
                const excludeCorrectAnswer = quiz.questions_answers.map((question) => {
                    delete question.correctAnswer
                    return question
                })
                quiz.questions_answers = excludeCorrectAnswer

                const attempt = {
                    user_id: user._id,
                    quiz_id: quiz._id,
                }

                const options = { upsert: true };
                await QuizTracker.findOneAndUpdate({quiz_id: id,user_id: user._id}, attempt, options)
                return quiz
            } else {
                throw new Error("Quiz not found")
            }
        } catch (error) {
            throw error;
        }
    },

    submit: async (id,answerObj,user) => {
        try {
            const quiz = await Quizzes.findById(id);
            const totalQuestions = quiz.questions_answers.length
            let score = 0
            let tracker = {}
            if (quiz) {
                answerObj.forEach(async (userAnswer,index) => {
                    const question = quiz.questions_answers.find((q) => q.questionId === userAnswer.questionId);
                    if (question && userAnswer.answer === question.correctAnswer) {
                        score++;
                    }
                    if (index + 1 === totalQuestions) {
                        tracker.completed = true
                        tracker.score = score
                        await QuizTracker.findOneAndUpdate({quiz_id: id,user_id: user._id}, tracker)
                    }
                  });
                return {
                    score,
                    totalQuestions
                }
            } else {
                throw new Error("Quiz not found")
            }
           
        } catch (error) {
            throw error;
        }
    },

};
