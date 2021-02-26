const  ServiceRecord  = require("../models/ServiceRecordModel");
const  Appointment  = require("../models/AppointmentModel")
const  Vehicle  = require("../models/VehicleModel")


exports.viewServiceRecordById = async (req, res) => {
    const id = req.params.id
    try {
        const record = await ServiceRecord.findById(id)

        if(!record){
            return res.status(404).json({
                success: false,
                message: "No service record found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Service Record received!",
            data: record
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.createAppointment = async (req, res) => {

    var newAppointment = new Appointment(req.body);
    newAppointment.User = req.user_id;

    try {

        await newAppointment.save()
        return res.status(201).json({
            success: true,
            message: "New appointment is created",
        }); 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.viewAppointmentById = async (req, res) => {
    const id = req.params.id
    try {
        const appointment = await Appointment.findById(id)

        if(!appointment){
            return res.status(404).json({
                success: false,
                message: "No appointment record found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Appointments received!",
            data: appointment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.updateAppointment = async (req, res) => {
    const id = req.params.id
    try {
        const appointment = await Appointment.findByIdAndUpdate(id, req.body, {new:true})
        return res.status(200).json({
            success: false,
            message: "Appointment update successfully",
            data:appointment
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteAppointment = async (req, res) => {
    const id = req.params.id
    try {

        const appointment = await Appointment.findByIdAndDelete(id)
        if(!appointment){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Appointment deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.createVehicle = async (req, res) => {

    var newVehicle = new Vehicle(req.body);
    newVehicle.User = req.user_id;

    try {

        await newVehicle.save()
        return res.status(201).json({
            success: true,
            message: "New vehicle is created",
        }); 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.viewVehicleById = async (req, res) => {
    const id = req.params.id
    try {
        const vehicle = await Vehicle.findById(id)

        if(!vehicle){
            return res.status(404).json({
                success: false,
                message: "No vehicle found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Vehicle received!",
            data: vehicle
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.updateVehicle = async (req, res) => {
    const id = req.params.id
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(id, req.body, {new:true})
        return res.status(200).json({
            success: false,
            message: "Vehicle update successfully",
            data:vehicle
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteVehicle = async (req, res) => {
    const id = req.params.id

    try {

        const vehicle = await Vehicle.findByIdAndDelete(id)
        if(!vehicle){
            return res.status(404).json({
                success: false,
                message: "Invalid id!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Vehicle deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }

};