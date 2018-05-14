const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"]
    },
    phone: {
        type: Number,
        min: 2000000000,
        max: 9999999999,
        validate: [/[0-9]/, "is invalid"]
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);