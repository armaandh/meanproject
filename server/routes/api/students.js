var express = require('express'); 
var router = express.Router();
var passport = require('passport');


var Student = require('../../models/student');

// get all students
router.get('/students', passport.authenticate('jwt', {session: false}), function(req, res) {
    Student.find(function(err, students) {
        if (err)
            res.send(err);

        res.json(students);
    });
});

// get one student
router.get('/students/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
});

// add student
router.post('/students', passport.authenticate('jwt', {session: false}), function(req, res) {
    var newStudent = new Student();  

    if (!req.body.StartDate) {
        newStudent.StartDate = new Date();
    } else {
        newStudent.StartDate = req.body.StartDate;
    }

    if (!req.body.FirstName || !req.body.LastName || !req.body.School) {
        res.status(400);
        res.json(
            {error: "Bad data, could not insert in database"}
        );
    } else {
        newStudent.FirstName = req.body.FirstName;
        newStudent.LastName = req.body.LastName;
        newStudent.School = req.body.School;
        
        // save the student and check for errors
        newStudent.save(function(err, data, numAffected) {
            if (err)
                res.send(err);

            //res.json({ message: 'Student created!' });
            res.json(data);
        });   
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
router.delete('/students/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    Student.remove({
        _id: req.params.id
    }, function(err, student) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deleted student' });
    });
});

module.exports = router;