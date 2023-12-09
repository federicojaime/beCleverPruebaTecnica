const db = require("../db/connection.js");
const bcryt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config.js");
const privateKey = config.PRIVATE_KEY_JWT;

const setUser = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al insertar el registro.",
  };
  let hash = await bcryt.hash(req.body.pass, 10);
  let conn = db();
  conn.query(
    `INSERT INTO usuarios SET user = '${req.body.user}', pass = '${hash}'`,
    function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      respuesta.ok = true;
      respuesta.msg = "Se inserto el usuario de forma correcta.";
      res.status(200).json(respuesta);
      return;
    }
  );
};

const loginUser = async (req, res) => {
  var respuesta = {
    ok: false,
    msg: "Ocurrio un error al consultar los registros.",
    totalRegistros: 0,
    data: [],
  };
  let conn = db();
  conn.query(
    `SELECT * FROM usuarios WHERE user = '${req.body.user}'`,
    async function (error, results, fields) {
      if (error) {
        res.status(409).json(respuesta);
        return;
      }
      if (results.legth > 0) {
        let ok = await bcryt.compare(req.body.pass, results[0].pass);
        if (ok) {
          let token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
              data: {
                id: results[0].id,
                user: results[0].user,
              },
            },
            privateKey,
            { algorithm: "HS256" }
          );
          res.status(200).json({ token: token });
          return;
        }
      }
      res.status(401).json({ token: null });
      return;
    }
  );
};

module.exports = { setUser, loginUser };
