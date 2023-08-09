const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/Slot")


// Register
router.post("/slots", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        // const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            time: req.body.time,
            date: req.body.date,
            volunteer_id: req.body.volunteer_id,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log('============error========================');
        console.log(err);
        console.log('==============error======================');
    }
})



module.exports = router


