const express = require('express');

const FlightDetails = require('../models/flightdetails');

//getting all flights


const getAllFlights = async (req, res) => {
    const flights = await FlightDetails.find();
    res.send(flights);
}


//get a single flight

const getFlight = async (req, res) => {
    const flight = await FlightDetails.findById(req.params.id);

    if (!flight) { // Change from !id to !flight
        res.send("No such flight exists");
    }
    res.send(flight);
};

//updating a flight
const updateFlight = async (req, res) => {
    await FlightDetails.findByIdAndUpdate(req.params.id, req.body);
    res.send('Flight updated');
}

//deleting a flight

const deleteFlight = async (req, res) => {
    await Flight.findByIdAndDelete(req.params.id);
    res.send('Flight deleted');
}

//adding a flight 
const addFlight = async(req,res)=>{
    const newFlight = new FlightDetails(req.body);
    await newFlight.save();
    res.send('Flight added');
}

module.exports = {addFlight,getAllFlights,getFlight,updateFlight,deleteFlight}