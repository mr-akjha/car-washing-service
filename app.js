const express = require('express');

const app = express();

const path = require('path');

const api = require('./routes/api');

const connection = require('./utils/database');

const {User} = require('./models');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));


/** Sync Models with tables if table not created  */

const sequelize = require('sequelize');



app.get('/',(req,res,next) => {
    res.send(`<h2 style="text-align: center; color: #f70933;">Welcome AJ !</h2>`)
});
app.use('/api',api);

/** Middleware to handle unregistered routes  */
app.use((req,res,next) => {
    res.status(404).send(`<h2 style="text-align: center; color: #f70933;">404 Page Not Found</h2>`)
});




// connection.sync({alter:true}).then((result) => {
//     // console.log(connection,result);
//     console.log("Model synced successfully !");
// }).catch((err) => {
//     console.log("Error in Model syncing!");
// });


app.listen(3000);