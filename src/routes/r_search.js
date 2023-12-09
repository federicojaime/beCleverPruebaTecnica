const { Router } = require("express");
const { searchNombre, searchApellido, average } = require("../controllers/c_search.js");

const rSearch = Router();

rSearch.get("/search/:fechaD/:fechaH/:sucursal/apellido/:apellido", searchApellido); // Servicio N° 3 solicitado para consultar la cantidad de ingresos y egresos dado por un apellido en una sucursal.

rSearch.get("/search/:fechaD/:fechaH/:sucursal/nombre/:nombre", searchNombre); // Servicio N° 3 solicitado para consultar la cantidad de ingresos y egresos dado por un nombre en una sucursal.

rSearch.get("/average/:fechaD/:fechaH", average); // Servicio N° 4 solicitado para consultar promedio de hombres y mujeres por sucursal.

module.exports = rSearch;
