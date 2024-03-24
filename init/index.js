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
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    console.log("Connected to DB");
}

const initDB=async()=>{
    await Listing.deleteMany({});
    //adding owner property
    initdata.data=initdata.data.map((obj)=>({...obj, owner: "65f89240ec51e8521bd863e2"}));
    await Listing.insertMany(initdata.data); 
    console.log("data is saved");
};

initDB();
