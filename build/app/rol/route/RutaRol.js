"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorRolConsulta_1 = __importDefault(require("../controller/ControladorRolConsulta"));
const ControladorRolCrear_1 = __importDefault(require("../controller/ControladorRolCrear"));
const ValidarRol_1 = require("../../../config/domain/ValidarRol");
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ControladorRolBorrar_1 = __importDefault(require("../controller/ControladorRolBorrar"));
const ControladorRolActualizar_1 = __importDefault(require("../controller/ControladorRolActualizar"));
class RutaRol {
    constructor() {
        this.rutaRolApi = (0, express_1.Router)();
        this.rutaRolApi.get("/getall", ControladorRolConsulta_1.default.llamarObtenerTodos);
        this.rutaRolApi.post("/add", ValidarRol_1.datosRolCrear, ValidarDatos_1.default.ahora, ControladorRolCrear_1.default.llamarGrabarRol);
        this.rutaRolApi.delete("/delete/:codRol", ValidarRol_1.datosRolBorrar, ValidarDatos_1.default.ahora, ControladorRolBorrar_1.default.llamarBorrar);
        this.rutaRolApi.put("/update", ValidarRol_1.datosRolActualizar, ValidarDatos_1.default.ahora, ControladorRolActualizar_1.default.llamarActualizarRol);
    }
}
const rutaRol = new RutaRol();
exports.default = rutaRol.rutaRolApi;
