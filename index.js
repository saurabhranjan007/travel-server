const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");

const TripPlan = require("./models/travelopia")

const app = express()
app.use(express.json())
app.use(cors()); 
 
// connecting db 
mongoose.connect(
    `mongodb+srv://nodeuser:nodeuser@cluster0.dfhaetf.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
)

// CREATE TRIP 
app.post("/create/plan", async(req, res) => {
    console.log("Inside createPlan", req.body);

    if(!req.body) return

    try {
        const createPlan = new TripPlan({
            name: req.body.data.name,
            email: req.body.data.email,
            destination: req.body.data.dest,
            noOfTravelers: req.body.data.noTravelers,
            budgetPerPerson: req.body.data.budget,
        })
    
        await createPlan.save(); 
        console.log("create plan ", createPlan);

        res.send(createPlan)

    } catch (error) {
        console.log("Error in creating plan", error);
        res.send("Error in creating plan")
    }
})

// GET PLANS 
app.post("/get/plans", async(req, res) => {
    console.log("Inside getPlans.. dataId ", req.body);

    try {
        const getPlans = await TripPlan.find({ _id: req.body.dataId }).exec();
        console.log("getPlans ", getPlans);

        res.send(getPlans)

    } catch (error) {
        console.log("Error in getting trip plans", error);
        res.send("Error in getting trip plans")
    }
}); 


app.listen(4000, async() => {
    console.log("App running @4000");
})
