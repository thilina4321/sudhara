const express = require('express')
const router = express.Router()

const ServiceAgentController = require('../controller/ServiceAgentController')
const ServiceAgent = require('../middleware/agent')


router.post("/create_service_record", [ ServiceAgent], ServiceAgentController.createServiceRecord);
router.patch("/update_service_record/:id", [ ServiceAgent], ServiceAgentController.updateServiceRecord);
router.delete("/delete_service_record/:id", [ ServiceAgent], ServiceAgentController.deleteServiceRecord);


module.exports = router