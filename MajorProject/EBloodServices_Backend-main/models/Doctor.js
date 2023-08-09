const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        works_at:{
            type: String,
            required: true,
        },
        speciality:{
            type: String,
            required: true,
        },
        experience:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Doctor", DoctorSchema);
