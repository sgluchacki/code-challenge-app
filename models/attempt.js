const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeAttemptSchema = new Schema({
    coder: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    challenge: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    },
    attemptNumber: Number,
    skill: {
        type: String,
        enum: ['JavaScript']
    },
    isCorrect: {
        type: String,
        enum: ['-1', '0', '1']      // 0 => unreviewed, -1 => not valid, 1 => valid
    },
    codeBody: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Attempt', codeAttemptSchema);