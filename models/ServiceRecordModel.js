var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ServiceRecordModelSchema = new Schema({
    serviceCategory: {
        type: String,
        required: [true, 'Service Category field is required!'],
        maxlength: 100
    },
    vehicleProblemDescription: {
        type: String,
        required: [true, 'Vehicle Problem Description field is required!'],
        maxlength: 250
    },
    serviceDescription: {
        type: String,
        required: [true, 'Service Description field is required!'],
        maxlength: 250
    },
    serviceAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceAgent',
        required: [true, 'Service agent field is required!']
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ServiceRecord', ServiceRecordModelSchema);
