"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsPG_1 = require("./optionsPG");
dotenv_1.default.config({ path: "variables.env" });
const portDB = Number(process.env.PORT);
const dataDB = String(process.env.DATABASE);
const hostDB = String(process.env.HOST);
const userDB = String(process.env.USER_DB);
const passDB = String(process.env.USER_PASSWORD);
const pgp = (0, pg_promise_1.default)(optionsPG_1.optionsPG);
const pool = pgp({
    user: userDB,
    password: passDB,
    database: dataDB,
    host: hostDB,
    port: portDB,
});
pool
    .connect()
    .then((miConn) => {
    console.log("Conectado a: " + dataDB);
    miConn.done();
})
    .catch((miError) => {
    console.log(miError);
});
exports.default = pool;
