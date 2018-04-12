var express = require('express'); 
var config = require('../config');
var mongojs = require("mongojs");
var passport = require('passport');

var db = mongojs(config.database_mlab, ['boats']);
// get all boats

var router = express.Router();

router.get("/boats", (req, res, next) => {
    db.boats.find( (err, data) => {
        if (err)
            res.send(err);
        
        res.json(data);
    })
});

// Find one boat by id
router.get("/boats/:id", (req, res, next) => {
    db.boats.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// add boat
router.post("/boats", (req, res, next) => {
    var boat = req.body;

    if (!product.product || !product.category
        || !product.price)  {
        res.status(400);
        res.json(
            {"error": "Bad data, could not be inserted into the database."}
        )
    } else {
        db.products.save(product, function(err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        })
    }
});

// update student
router.put('/students/:id', passport.authenticate('jwt', {session: false}), function(req, res) {

    if (!req.body.FirstName 
            || !req.body.LastName 
            || !req.body.School
            || !req.body.StartDate) {
        res.status(400);
        res.json(
            {error: "Bad data, could not update."}
        );
    } else {
        Student.findById(req.params.id, function(err, student) {
            if (err) res.send(err);

            student.FirstName = req.body.FirstName;
            student.LastName = req.body.LastName;
            student.School = req.body.School;
            student.StartDate = req.body.StartDate;

            console.log("STUDENT: " + student);

            // save the bear
            student.save(function(err, data, numAffected) {
                if (err) res.send(err);

                //res.json({ message: 'Student updated!' });
                res.json(data);
            });
        });
    }
});

// delete student
router.delete('/users/:id', function(req, res) {
    User.remove({
        _id: req.params.id
    }, function(err, user) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deleted user' });
    });
});

module.exports = router;