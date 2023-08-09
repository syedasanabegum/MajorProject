const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/Volunteer")


// Register
router.post("/volunteer", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        // const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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


