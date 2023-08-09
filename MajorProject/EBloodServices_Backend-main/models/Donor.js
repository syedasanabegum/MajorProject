const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender:{
            type:String,
            required: true,
        },
        blood_group:{
            type:String,
            required: true,
        },
        adhaar_id:{
            type:String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Donor", DonorSchema);
