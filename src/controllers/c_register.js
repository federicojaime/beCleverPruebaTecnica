const db = require("../db/connection.js");
const Validate = require("../utils/validate.js");

const register = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
  };
  var verificar = {
    idemployee: { type: "number", min: 1 },
    date: { type: "date" },
    hora: { type: "time" },
    registertype: { type: "number", min: 1 },
    businesslocation: { type: "number", min: 1 },
  };
  var valid = new Validate(null);
  valid.validar(req.body, verificar);
  if (valid.hasErrors()) {
    res.status(409).json(valid.getErrors());
    return;
  }
  let conn = db();
  conn.query(
    `INSERT INTO registros SET idemployee = ${req.body.idemployee}, date= '${req.body.date}', hora= '${req.body.hora}', registertype= ${req.body.registertype},businesslocation= ${req.body.businesslocation}`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(error);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "Se inserto el registro de horario de forma correcta.";
      res.status(200).json(respuesta);
    }
  );
};

const registerEmployee = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
  };
  var verificar = {
    nombre: { type: "string", min: 3, max: 10 },
    apellido: { type: "string", min: 3, max: 10 },
    sexo: { type: "string", max: 1 },
  };
  var valid = new Validate(null);
  valid.validar(req.body, verificar);
  if (valid.hasErrors()) {
    res.status(409).json(valid.getErrors());
    return;
  }
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
      res.status(200).json(respuesta);
    }
  );
};

module.exports = { register, registerEmployee };
