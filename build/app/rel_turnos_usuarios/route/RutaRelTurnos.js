"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorRelTurnosCrear_1 = __importDefault(require("../controller/ControladorRelTurnosCrear"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ValidarRelTurnos_1 = require("../../../config/domain/ValidarRelTurnos");
const ControladorRelTurnosConsultar_1 = __importDefault(require("../controller/ControladorRelTurnosConsultar"));
const ControladorRelTurnosBorrar_1 = __importDefault(require("../controller/ControladorRelTurnosBorrar"));
const ControladorRelTurnosActualizar_1 = __importDefault(require("../controller/ControladorRelTurnosActualizar"));
class RutaRelTurno {
    constructor() {
        this.rutaRelTurnoApi = (0, express_1.Router)();
        this.rutaRelTurnoApi.get("/getall", ControladorRelTurnosConsultar_1.default.llamarObtenerTodos);
        this.rutaRelTurnoApi.post("/add", ValidarRelTurnos_1.datosRelTurnosCrear, ValidarDatos_1.default.ahora, ControladorRelTurnosCrear_1.default.llamarGrabarRelTurnos);
        this.rutaRelTurnoApi.delete("/delete/:codTurnoUsuario", ValidarRelTurnos_1.datosRelTurnosBorrar, ValidarDatos_1.default.ahora, ControladorRelTurnosBorrar_1.default.llamarBorrar);
        this.rutaRelTurnoApi.put("/update", ValidarRelTurnos_1.datosRelTurnosActualizar, ValidarDatos_1.default.ahora, ControladorRelTurnosActualizar_1.default.llamarActualizarRelTurnos);
    }
}
const rutaRelTurno = new RutaRelTurno();
exports.default = rutaRelTurno.rutaRelTurnoApi;
