const mongoose = require('mongoose')

const Note = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    finish: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
})

module.exports = mongoose.model('Note', Note)