const PRIVATE_KEY_JWT = process.env.PRIVATE_KEY_JWT || "asdasdashdijuhqweqweu";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME || "beclever";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "";

module.exports = {
  PRIVATE_KEY_JWT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
};
