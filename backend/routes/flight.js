const express = require('express');
const router = express.Router();
const { addFlight, getAllFlights, getFlight, updateFlight, deleteFlight } = require('../controllers/flight');

// Import verifyAdmin from admin file
const verifyAdmin  = require('../controllers/verifyadmin');


// Route definitions
router.post('/', verifyAdmin, addFlight);
router.patch('/:id', verifyAdmin, updateFlight);
router.delete('/:id', verifyAdmin, deleteFlight);
router.get('/', verifyAdmin, getAllFlights);
router.get('/:id', verifyAdmin, getFlight);

module.exports = router;
