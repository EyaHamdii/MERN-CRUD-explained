// the controller does the CRUD
// the controller must be related to the model
// importing the mode:
const Hero =require("../models/hero.model")
console.log(Hero);

// ===============================CRUD==============================
// Read All
// *I can call the readAll from any other file after exporting it:
module.exports.readAll =(req , res)=>{
    Hero.find()

    // ?====== here allHeroes will return an array of objects====
// *Hero.find() returns a promise
    .then((allHeroes) =>{res.json(allHeroes)})
    .catch((err) =>{res.json ({message:'Something went wrong when connecting to the database ', error:err})})
    
}

// CREATE 
module.exports.create =(req , res)=>{
// * to create something i need to send the data to the server ,my data is inside the req.body
//! if i will send a "path variable"(writen in the url) i use req.params because it's inside the params
    Hero.create(req.body)
// the returned result going to be puted inside a variable called createdhero
    .then((createdhero) =>{
// here the created hero going to be returned to the user as a response
        res.json(createdhero)})
    .catch((err) =>{res.json ({message:'Something went wrong when connecting to the database ', error:err})})
};

// Read One
module.exports.findOnehero = (req, res) => {
    Hero.findOne({ _id: req.params.id })
        .then(oneSingleHero => {
            res.json({ hero: oneSingleHero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


// Update
module.exports.update = (req, res) => {
    Hero.findOneAndUpdate({ _id: req.params.id }, req.body,
    //?======= these two arguments are related to the update:
    // * new:true :response with the updated object
    {new:true, runValidators:true})
        .then((updatedhero) => {
            res.json({ hero: updatedhero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
// Delete
module.exports.delete = (req, res) => {
    Hero.deleteOne({ _id: req.params.id })
        .then(deleteHero => {
            res.json({ hero: deleteHero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
