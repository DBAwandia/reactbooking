const express = require("express")
const router =express.Router()
const users = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
const stripe = require("stripe")(process.env.STRIPE_KEY)
const { verifyUserAndAuthorization,verifyIsAdmin } = require("../verification/verifyTokens")
// const { verifyTokenAndAuthorization,verifyIsAdmin } = require("../models/verification")

//register
router.post("/register", async(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password =CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC)
    const user = users({ username: username, email: email, password: password})
    try{
        const oldUser = await users.findOne({email: req.body.email})
        if(oldUser){
            res.status(400).json({message: "check your datils"})
        }else{
           await user.save()
            res.status(200).json( user)
        }
    }catch(err){
        res.status(500).json(err)
    }

})
//login
router.post("/login", async(req,res)=>{
    try{
        const user = await users.findOne({email: req.body.email})
        !user && res.status(400).json({message: "Please register"})
        

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        const originalPass = hashedPassword.toString(CryptoJS.enc.Utf8)
        originalPass !== req.body.password && res.status(400).json({message: "Error login"})

        const { password,isAdmin, ...others} =user._doc
        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },process.env.JWT_TOKEN,{expiresIn: "3d"})

        res.cookie("access_token",token,{httpOnly: true}).status(200).json({details: {...others},isAdmin})

    }catch(err){
        res.status(500).json(err)
    }
})
//update
router.put("/update/:id",verifyUserAndAuthorization, async(req,res)=>{
    try{
        const updatedUser = await users.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(201).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",verifyUserAndAuthorization, async (req,res)=>{
    try{
        await users.findByIdAndDelete(req.params.id)
        res.status(201).json("Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})
//get by id
router.get("/:id"),verifyIsAdmin, async(req,res)=>{
    try{
        const getUsers = await users.findById(req.params.id)
        res.status(200).json(getUsers)
    }catch(err){
        res.status(500).json(err)
    }
}
router.get("/"),verifyIsAdmin, async(req,res)=>{
    try{
        const getUsers = await users.find()
        res.status(200).json(getUsers)
    }catch(err){
        res.status(500).json(err)
    }
}
//Stripe payment
router.post("/checkout", (req,res)=>{
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd"
  }, (stripeErr,stripeRes)=>{
    if(stripeErr){
        res.status(500).json(stripeErr)
    }else{
        res.status(200).json(stripeRes)
    }
  })
})

module.exports = router