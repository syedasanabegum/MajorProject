const mongoose = require("mongoose");

const RecipientSchema = new mongoose.Schema(
    {
        name: {
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
        patient_name: {
            type: String,
            required: true,
        },
        relationship_with_patient: {
            type: String,
            required: true,
        },
        blood_group:{
            type:String,
            required: true,
        },
        units_required:{
            type:Number,
            required: true,
        },
        adhaar_id:{
            type:String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipient", RecipientSchema);
