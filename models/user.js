const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    displayName: String,
    skills: {
        type: String,
        enum: [JavaScript]
    },
    isCoder: Boolean,
    isChallenger: Boolean
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);