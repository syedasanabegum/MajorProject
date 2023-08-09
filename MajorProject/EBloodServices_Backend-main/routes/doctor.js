const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/Doctor")


// Register
router.post("/doctor", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        // const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone,
            works_at:req.body.works_at,
            speciality:req.body.speciality,
            experience:req.body.experience
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


