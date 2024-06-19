/*Insert the data in DB listings*/
const mongoose = require("mongoose");
/*Requiring the data in data.js and Listing Model */
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => console.log(err));

async function main() {
    //await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    await mongoose.connect('mongodb+srv://nankisandhu24:qKcEUBwZvFk5Rf0S@cluster0.ddt4fmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connected to DB");
}

const initDB=async()=>{
    await Listing.deleteMany({});
    //adding owner property
    initdata.data=initdata.data.map((obj)=>({...obj, owner: "667101dcd5bf149ea2637c6c"}));
    await Listing.insertMany(initdata.data); 
    console.log("data is saved");
};

initDB();
