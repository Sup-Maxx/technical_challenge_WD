const router = require("express").Router()
const mongoose = require("mongoose")
const axios = require("axios")
const Phone = require("../models/Phone.model")

const phoneData = require("../../phone_cave/public/phones.json")

router.get("/phones", (req, res, next) => {
    console.log("fetched")
    res.json(phoneData);
    
})

router.get("/phones/:id", (req, res, next) => {
    console.log("fetched with follow info: ", req.params.id)
    Phone.findById(req.params.id)
    .then(response => res.json(phoneData))
})

module.exports = router