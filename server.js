const express = require('express');
const connectDB = require('./DB/connection');
const controller = require('./controllers/controller');
const bodyParser = require('body-parser');
const { Country } = require('country-state-city');

const app = express();
app.disable('etag');

//for body parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

//set port
const port = 4000;

connectDB();

//for cross-origin-access
app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});




app.get('/',(req,res)=>{
    res.json({"message":"Hey It's home page "});
    })

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

// Retrive All Country,State and Cities
app.get('/common/country-list', controller.Allcountries);
app.get('/common/state-list', controller.Allstates);
app.get('/common/city-list', controller.Allcities);



require('./route/routes')(app);

app.listen(port,()=>console.log("server started with...", port));