var express = require('express');
var router = express.Router();
var userModel = require("./users");
const cors = require("cors");

/* GET home page. */

router.use(cors({

               origin:["https://deploy-mern-1whq.vercel.app"],
  methods:["POST" , "GET" ],
  credentials: true
               
               ));

mongoose.connect('mongodb+srv://saharshshrivastava302002:ODqlSR8qYpN1hxQH@cluster0.lcjavdi.mongodb.net/saharshshrivastava302002?retryWrites=true&w=majority')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// This Route add the input data of blog into the database 
router.post('/adddata', function(req, res, next) {
 userModel.create({
  Title: req.body.title,
  Description: req.body.content
 }).then(function(addeddata){
  res.send(addeddata);
 })
});
// This Route is used for viewing the data 
router.get('/viewdata', async function(req, res, next) {
  try {
   const data = await userModel.find();
   res.json(data);
  } catch (error) {
    console.log(error);
    
  }

});
router.post('/datafromfe', async function(req, res, next) {
  try {
    const user = await userModel.findOne({_id:req.body});
    res.json(user)
  } catch (error) {
    console.log(error);
  }


});


module.exports = router;
