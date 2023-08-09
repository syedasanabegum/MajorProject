const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/Recipient")


// Register
router.post("/recipient", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        // const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            patient_name:req.body.patient_name,
            relationship_with_patient:req.body.relationship_with_patient,
            blood_group:req.body.blood_group,
            units_required:req.body.units_required,
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


