const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/Donor")


// Register
router.post("/donor", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        // const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            date_of_birth: req.body.date_of_birth,
            age:req.body.age,
            gender:req.body.gender,
            blood_group:req.body.blood_group,
            adhaar_id:req.body.adhaar_id
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


