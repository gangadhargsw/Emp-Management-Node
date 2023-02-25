module.exports = (app) => {
    const controller = require('../controllers/controller');

// Create new employee    
    app.post('/empManage/employee', controller.create);
// Retrive all employees
    app.get('/empManage/employees', controller.findAll);
//Retrive employee with employee._id
    app.get('/empManage/employees/:_id', controller.findOne);
//Update employee with employee._id
    app.put('/empManage/employees/:_id', controller.update);
//Delete employee with employee._id
    app.delete('/empManage/employees/:_id', controller.delete);

//Retrive All Country, States and cities
    app.get('/common/country-list', controller.Allcountries);
    app.get('/common/state-list', controller.Allstates);
    app.get('/common/city-list', controller.Allcities);

}

