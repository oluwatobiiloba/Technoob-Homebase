
const user = require("./user");
const auth = require("./auth");
const admin = require("./admin");
const resources = require("./resources");
const utils = require("./utils");
const events = require("./events")
const jobs = require("./jobs")
const quizzes = require("./quizzes")  
const traffic = require("./traffic")

module.exports = {
    user,
    auth,
    admin,
    resources,
    utils,
    events,
    jobs,
    quizzes,
    traffic
};