const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const { registerUser , fetchUsersCtrl} = require('./controllers/User/userCtrl');

const { errorHandler,notFound } = require('./middleware/errorMiddleware');

const userRouter = require('./routes/Users/usersRoute');
const app = express();
//evn
dotenv.config();
// dbConnectzz
dbConnect();

//middleware
app.use(express.json());

//routes
app.use('/api/user', userRouter);

//error handler
app.use( notFound );
app.use( errorHandler );


module.exports = app;
