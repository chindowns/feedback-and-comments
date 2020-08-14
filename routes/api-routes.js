var db = require("../models");

module.exports = (app) => {
    // Post Feedback
    app.post("/api/feedback", (req, res) => {
        console.log("--------------req.body--------------------")
        console.log(req.body)
        console.log("-------req----------")
        console.log(req)
        console.log("-----------------end-------------------------")
        db.Feedback.create(req.body, {
            site: req.body.site,
            email: req.body.email,
            feedback: req.body.feedback
        })
            .then(result => { console.log(result); res.send("Feedback received") })
            .catch(err => { console.log(err); res.status(401).json(err) })
    });

    app.get("/api/checkfeedback", (req, res) => {
        db.Feedback.findAll({})
            .then(feedback => res.json(feedback))
            .catch(err => { console.log(err); res.json(err) })
    })
}