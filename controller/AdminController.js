const  User  = require("../models/UserModel");

const  Vehicle  = require("../models/VehicleModel");
const ServiceRecord  = require("../models/ServiceRecordModel");


//Manage service agents 
exports.createAgent = async ( req,res ) => {
    
    try {
        
        const user = new User(req.body);
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Successfully Signed Up!"
        });
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: "Please enter unique email & username!",
            data: err
        });
    }

    
};

exports.deleteAgent = async ( req, res ) => {
    const id = req.params.id

    try {
        const agent = await User.findById(id)
        if(!agent){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        if(agent.role != "ADMIN"){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        await User.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Agent deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Service Error"
        });
    }

    
}

exports.getAllAgents = async (req, res) => {
    try {
        const agents = await User.find({role:'SERVICE_AGENT'})
        return res.status(200).json({
            success: true,
            message: "Received all agents!",
            data: agents
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
    
};

//Manage all customers

exports.getAllCustomers = async (req, res) => {
    try {
        const customer = await User.find({role:'CUSTOMER'})
        return res.status(200).json({
            success: true,
            message: "Received all customers!",
            data: customer
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteCustomer = async ( req, res ) => {
    const id = req.params.id

    try {
        const agent = await User.findById(id)
        if(!agent){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        if(agent.role != "CUSTOMER"){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }

        await User.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Customer deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }

};

//Manage all vehicles

exports.getAllCustomerVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find()
        return res.status(200).json({
            success: true,
            message: "Received all vehicles!",
            data: vehicles
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteCustomerVehicle = async ( req, res ) => {
    const id = req.params.id

    try {

        const vehicle = await Vehicle.findByIdAndDelete(id)
        if(!vehicle){
            return res.status(422).json({
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

//Manage all vehicles service records

exports.getAllCustomerVehiclesRecords = async (req, res) => {
    try {
        const records = await ServiceRecord.find()
        return res.status(200).json({
            success: true,
            message: "Received all records!",
            data: records
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

exports.deleteCustomerVehicleRecord = async ( req, res ) => {
    const id = req.params.id

    try {

        const records = await ServiceRecord.findByIdAndDelete(id)
        if(!records){
            return res.status(422).json({
                success: false,
                message: "Invalid id!"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Records deleted!"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }

};


