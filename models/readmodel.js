const mongoose = require('mongoose');

const EmpSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    id: Number,
    email: String,
    age: Number,
    mob: Number,
    dob : String,
    doj : String,
    department: String,
    gender : String,
    country: String,
    state: String,
    city: String,
    password : String,
    confirmPassword: String
}, {
    timestamps: true
});

var collectionName = "EmpMst_Table";
module.exports = mongoose.model('empMstTable',EmpSchema, collectionName);
