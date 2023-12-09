const { Router } = require("express");
const { register, registerEmployee } = require("../controllers/c_register.js");

const rRegister = Router();

rRegister.post("/register", register); //Service 2 solicitado para generar registros de ingresos y egresos del personal.

rRegister.post("/register/employee", registerEmployee); // Endpoint extra para generar nuevos empleados.

module.exports = rRegister;
