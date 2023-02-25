const Employees = require('../models/readmodel');
const Countries = require('country-state-city').Country;
const States = require('country-state-city').State;
const Cities = require('country-state-city').City;



// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        return res.status(400).send({
            message: "Emp id can not be empty"
        });
    }

    // Create a Employee
    const employee = new Employees({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        email: req.body.email,
        age: req.body.age,
        mob: req.body.mob,
        dob: req.body.dob,
        doj: req.body.doj,
        department: req.body.department,
        gender: req.body.gender,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    // Save Employee in the database
    employee.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Employee."
            });
        });
};




// Retrieve and return all employess from the EmpMst_Table of empManage database.
exports.findAll = (req, res) => {
    Employees.find()
        .then(employees => {
            res.send(employees);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error"
            });
        });
};




// Find a single employee with a employee._id
exports.findOne = (req, res) => {
    Employees.findById(req.params._id)
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params._id
                });
            }
            res.send(employee);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params._id
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params._id
            });
        });
};






// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.id) {
        return res.status(400).send({
            message: "Employee id can not be empty"
        });
    }

    // Find note and update it with the request body
    Employees.findByIdAndUpdate(req.params._id, {
        // title: req.body.title || "Untitled Note",
        // content: req.body.content

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        email: req.body.email,
        age: req.body.age,
        mob: req.body.mob,
        dob: req.body.dob,
        doj: req.body.doj,
        department: req.body.department,
        gender: req.body.gender,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }, { new: true })
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params._id
                });
            }
            res.send(employee);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params._id
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params._id
            });
        });
};




// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Employees.findByIdAndRemove(req.params._id)
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params._id
                });
            }
            res.send({ message: "Employee deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params._id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params._id
            });
        });
};


// get all countries
const countryList = Countries.getAllCountries();
exports.Allcountries = (req, res) => {
    res.send(countryList);
}

// get all States
const stateList = States.getAllStates();
exports.Allstates = (req, res) => {
    res.send(stateList);
}

// get all Cities
const cityList = Cities.getAllCities();
exports.Allcities = (req, res) => {
    res.send(cityList);
}