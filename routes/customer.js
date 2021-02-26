const express = require('express')
const router = express.Router()

const CustomerController = require('../controller/CustomerController')
const Customer = require('../middleware/customer')

router.get("/service_record/:id", [ Customer], CustomerController.viewServiceRecordById);
//Manage Appointments
router.post("/create_appointment", [ Customer], CustomerController.createAppointment);
router.get("/appointment/:id", [ Customer], CustomerController.viewAppointmentById);
router.patch("/update_appointment/:id", [ Customer], CustomerController.updateAppointment);
router.delete("/delete_appointment/:id", [ Customer], CustomerController.deleteAppointment);

// Manage Vehicles
router.post("/create_vehicle", [ Customer], CustomerController.createVehicle);
router.get("/view-vehicle/:id", [ Customer], CustomerController.viewVehicleById);
router.patch("/update_vehicle/:id", [ Customer], CustomerController.updateVehicle);
router.delete("/delete_vehicle/:id", [ Customer], CustomerController.deleteVehicle);


module.exports = router