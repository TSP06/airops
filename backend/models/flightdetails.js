const mongoose = require('mongoose');



const flightdetailsSchema = new mongoose.Schema({
    /*uniqueid:{
        type:String,
        required:true
    },*/
    flightnumber:{
        type:Number,
        required:true
    },
    airline:{
        type:String,
        required:true
    },
    originairport:{
        type:String,
        required:true
    },
    origincity:{
        type:String,
        required:true
    },
    destinationairport:{
        type:String,
        required:true
    },
    destinationcity:{
        type:String,
        required:true
    },
    scheduledeparturetime:{
        type:Date,
        required:true
    },

    scheduledarrivaltime:{
        type:Date,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    }


})


const FlightDetails = mongoose.model('FlightDetails',flightdetailsSchema);

module.exports = FlightDetails;