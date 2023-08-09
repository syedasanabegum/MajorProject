const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
    {
        time: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
            unique: true,
        },
        volunteer_id:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Slot", SlotSchema);
