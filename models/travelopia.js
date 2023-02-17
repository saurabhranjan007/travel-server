const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TravelopiaData = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    noOfTravelers: { type: String, required: true },
    budgetPerPerson: { type: String, required: true },
})

TravelopiaData.set("toObject", { getters: true })
module.exports = mongoose.model("TravelopiaData", TravelopiaData)
