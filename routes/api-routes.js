var db = require("../models");

module.exports = (app) => {
    // Post Feedback
    app.post("/api/feedback", (req, res) => {
        console.log(req.body)
        db.Feedback.create(req.body)
            .then(result => { console.log(result); res.send("Feedback received") })
            .catch(err => { console.log(err); res.status(401).json(err) })
    });

    app.get("/api/checkfeedback", (req, res) => {
        db.Feedback.findAll({})
            .then(feedback => res.json(feedback))
            .catch(err => { console.log(err); res.json(err) })
    })
}