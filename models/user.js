const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    avatar: String,
    displayName: String,
    skills: {
        type: String,
        enum: ['JavaScript']
    },
    isCoder: {
        type: Boolean,
        default: false
    },
    isChallenger: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);