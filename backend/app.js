const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const userRouter = require('./routes/userRoutes');
const videoRouter = require('./routes/videoRoutes');

const globalErrorHandler = require('./controllers/errorController');

const mongoose = require('mongoose');

//database connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'))

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use('/api/videos', express.static('media/uploads'));

//routes
app.use('/api/v1/users', userRouter);
app.use('/api', videoRouter);


//server
const PORT = process.env.PORT || 3333;

app.listen(PORT,()=>{
	console.log(`App is running on ${PORT}`)
});