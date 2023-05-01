const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://tejasvirat72:edu123@cluster0.bsvqfjt.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
