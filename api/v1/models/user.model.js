const mongoose = require("mongoose");
const generate = require("../../../helpers/generate");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    token: {
        type: String,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema, "users");

module.exports = User;