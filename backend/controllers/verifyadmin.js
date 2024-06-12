const express = require('express');



// Import the flight routes


const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;


// Middleware to verify admin token
const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.adminUsername = decoded.username;
        next();
    });
};

module.exports = verifyAdmin;