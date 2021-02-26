const express = require("express");
const router = express.Router();

const AdminController = require("../controller/AdminController");
const Admin = require("../middleware/admin");

router.post("/admin/create-agent", [ Admin], AdminController.createAgent);

router.delete(
  "/admin/delete-agent/:id",
  [ Admin],
  AdminController.deleteAgent
);

router.get("/admin/view-all-agents", [ Admin], AdminController.getAllAgents);

//Manage all customers
router.get(
  "/admin/view-all-customers",
  [ Admin],
  AdminController.getAllCustomers
);

router.delete(
  "/admin/delete-customer/:id",
  [ Admin],
  AdminController.deleteCustomer
);

//Manage all vehicles
router.get(
  "/admin/view-all-vehicles",
  [ Admin],
  AdminController.getAllCustomerVehicles
);

router.delete(
  "/admin/delete-vehicle/:id",
  [ Admin],
  AdminController.deleteCustomerVehicle
);

//Manage all vehicle service records
router.get(
  "/admin/view-all-service-records",
  [ Admin],
  AdminController.getAllCustomerVehiclesRecords
);

router.delete(
  "/admin/delete-vehicle-service-record/:id",
  [ Admin],
  AdminController.deleteCustomerVehicleRecord
);

module.exports = router;
