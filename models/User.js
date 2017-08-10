//Here is where we configure all our models for mongo
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//We are telling mongo that we want to create a collection called users and use the schema we made.
mongoose.model('users', userSchema);
