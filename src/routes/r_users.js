const { Router } = require("express");
const { setUser, loginUser } = require("../controllers/c_users.js");

const rUsers = Router();

rUsers.post("/users", setUser); // Endpoint extra para setear nuevos usuarios en el sistema.

rUsers.post("/users/login", loginUser); //Este es el servicio n°1 que retorna un token cuando es correcto el user y el pass.

module.exports = rUsers;
