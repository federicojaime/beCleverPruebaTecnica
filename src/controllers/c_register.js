const db = require("../db/connection.js");
const Validate = require("../utils/validate.js");

const register = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  var verificar = {
    date: { type: "date" },
  };
  var valid = new Validate(null);
  valid.validar(req.body, verificar);
  if (valid.hasErrors()) { 
    res.status(409).json(valid.getErrors());
    return;
  }
  let conn = db();
  conn.query(
    `INSERT INTO registros SET idemployee = ${req.body.idemployee}, date= '${req.body.date}', hora= '${req.body.hora}', registertype= ${req.body.registertype},  
      businesslocation= ${req.body.businesslocation}`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "Se inserto el registro de forma correcta.";
      respuesta.totalRegistros = results.length;
      respuesta.data = results;
      res.status(200).json(respuesta.msg);
    }
  );
};

const registerEmployee = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  let conn = db();
  conn.query(
    `INSERT INTO personal SET nombre = '${req.body.nombre}', apellido= '${req.body.apellido}', sexo= '${req.body.sexo}'`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "Se inserto el empleado de forma correcta.";
      respuesta.totalRegistros = results.length;
      respuesta.data = results;
      res.status(200).json(respuesta.msg);
    }
  );
};

module.exports = { register, registerEmployee };
