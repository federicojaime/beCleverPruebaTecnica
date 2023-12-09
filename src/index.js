const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const rUsers = require("./routes/r_users.js");
const rRegister = require("./routes/r_register.js");
const rSearch = require("./routes/r_search.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const port = process.env.PORT || 3000;
const config = require("./utils/config.js");
const privateKey = config.PRIVATE_KEY_JWT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

/* INICIO DEL MIDDLEWARE */

app.use((req, res, next) => {
  let autorizado = ["/users/login"];
  if (
    autorizado.includes(req.originalUrl) ||
    req.originalUrl.startsWith("/api-docs")
  ) {
    next();
    return;
  }
  try {
    if (!req.headers["authorization"]) {
      res.send("Error no está autorizado por Token");
    }
    var token = req.headers["authorization"].split(" ");

    jwt.verify(token[1], privateKey, (err, user) => {
      if (err) {
        res.send("Error Token Invalido. " + err);
        return;
      }
      next();
    });
  } catch (error) {
    res.status(401).send("Error, token invalido.");
  }
});

/* FIN DEL MIDDLEWARE */

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.use(rUsers); //Rutas de los usuarios
app.use(rRegister); //Rutas de los registros
app.use(rSearch); //Rutas de las busquedas o filtros

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`App funcionando en el puerto: ${port}`);
});
