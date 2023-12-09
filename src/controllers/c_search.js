const db = require("../db/connection.js");

const searchNombre = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  let conn = db();
  conn.query(
    `SELECT
        personal.nombre, personal.apellido, tipos.descripcion, bussines.nombre AS sucursal, COUNT(*) AS total
    FROM registros 
        INNER JOIN personal ON personal.id = registros.idemployee
        INNER JOIN tipos ON tipos.id = registros.registertype
        INNER JOIN bussines ON bussines.id = registros.businesslocation
    WHERE

        idemployee IN (SELECT id from personal WHERE personal.nombre LIKE "%${req.params.nombre}%")
        AND date BETWEEN '${req.params.fechaD}' AND '${req.params.fechaH}'
        AND businesslocation = (SELECT id from bussines WHERE bussines.nombre = "${req.params.sucursal}")
    GROUP BY personal.nombre, personal.apellido, tipos.descripcion, bussines.nombre`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "";
      respuesta.totalRegistros = results.length;
      respuesta.data = results;
      res.status(200).json(respuesta);
    }
  );
};

const searchApellido = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  let conn = db();
  conn.query(
    `SELECT
        personal.nombre, personal.apellido, tipos.descripcion, bussines.nombre AS sucursal, COUNT(*) AS total
    FROM registros 
        INNER JOIN personal ON personal.id = registros.idemployee
        INNER JOIN tipos ON tipos.id = registros.registertype
        INNER JOIN bussines ON bussines.id = registros.businesslocation
    WHERE

        idemployee IN (SELECT id from personal WHERE
        personal.apellido LIKE "%${req.params.apellido}%")
        AND date BETWEEN '${req.params.fechaD}' AND '${req.params.fechaH}'
        AND businesslocation = (SELECT id from bussines WHERE bussines.nombre = "${req.params.sucursal}")
    GROUP BY personal.nombre, personal.apellido, tipos.descripcion, bussines.nombre`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "";
      respuesta.totalRegistros = results.length;
      respuesta.data = results;
      res.status(200).json(respuesta);
    }
  );
};

const average = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  let conn = db();
  conn.query(
    `SELECT
    bussines.nombre AS sucursal,
  CAST(AVG(CASE WHEN personal.sexo = 'M' THEN 1 ELSE 0 END) * 100 AS DECIMAL(10, 0)) AS promedio_masculino,
  CAST(AVG(CASE WHEN personal.sexo = 'F' THEN 1 ELSE 0 END) * 100 AS DECIMAL(10, 0)) AS promedio_femenino,
  COUNT(*) AS total
FROM
  registros
  INNER JOIN personal ON personal.id = registros.idemployee
  INNER JOIN tipos ON tipos.id = registros.registertype
  INNER JOIN bussines ON bussines.id = registros.businesslocation
WHERE
  date BETWEEN '${req.params.fechaD}' AND '${req.params.fechaH}'
GROUP BY
  bussines.nombre`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = `Registros evaluados desde ${req.params.fechaD
        .split("-")
        .reverse()
        .join("/")} hasta ${req.params.fechaH.split("-").reverse().join("/")}.`;
      respuesta.totalRegistros = results.length;
      respuesta.data = results;
      res.status(200).json(respuesta);
    }
  );
};

module.exports = { searchNombre, searchApellido, average };
