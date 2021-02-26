const  ServiceRecord  = require("../models/ServiceRecordModel");
const  Appointment  = require("../models/AppointmentModel")


exports.createServiceRecord = async (req, res) => {

    var newServiceRecord = new ServiceRecord(req.body);
    newServiceRecord.serviceAgent = req.user._id;

    try {

        await newServiceRecord.save()
        return res.status(201).json({
            success: true,
            message: "New service record is created",
        }); 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }  
};


exports.updateServiceRecord = async (req, res) => {
    const id = req.params.id
    try {
        const record = await ServiceRecord.findByIdAndUpdate(id, req.body, {new:true})
        return res.status(200).json({
            success: false,
            message: "Service record update successfully",
            data:record
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteServiceRecord = async (req, res) => {
    const id = req.params.id

    try {

        const vehicle = await ServiceRecord.findByIdAndDelete(id)
        if(!vehicle){
            return res.status(404).json({
                success: false,
                message: "Invalid id!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Record deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// filter by appointment, by customer, by vehicle, by srvice record of vehicle

exports.viewAppointmentById = async (req, res) => {
    const id = req.params.id

    try {
        const appointment = await Appointment.findById(id)
        if(!appointment){
            return res.status(404).json({
                success: false,
                message: "No appointment found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Appointment retrieved",
            data:appointment
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
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

exports.viewServiceRecordById = async (req, res) => {
    const id = req.params.id

    try {
        const record = await ServiceRecord.findById(id)
        if(!record){
            return res.status(404).json({
                success: false,
                message: "No record found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Record retrieved",
            data:record
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};