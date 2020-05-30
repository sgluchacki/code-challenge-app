const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeChallengeSchema = new Schema({
    challenger: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        enum: ['JavaScript']
    },
    gist: {
        type: String,
        maxlength: 150,
        require: true
    },
    details: {
        type: String,
    },
    isSolved: {
        type: Boolean,
        default: false      
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Challenge', codeChallengeSchema);