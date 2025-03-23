"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorRelTurnosCrear_1 = __importDefault(require("../controller/ControladorRelTurnosCrear"));
const ControladorRelTurnosConsultar_1 = __importDefault(require("../controller/ControladorRelTurnosConsultar"));
const ControladorRelTurnosBorrar_1 = __importDefault(require("../controller/ControladorRelTurnosBorrar"));
const ControladorRelTurnosActualizar_1 = __importDefault(require("../controller/ControladorRelTurnosActualizar"));
class RutaRelTurno {
    constructor() {
        this.rutaRelTurnoApi = (0, express_1.Router)();
        this.rutaRelTurnoApi.post("/add", ControladorRelTurnosCrear_1.default.llamarGrabarRelTurnos);
        this.rutaRelTurnoApi.get("/getall", ControladorRelTurnosConsultar_1.default.llamarObtenerTodos);
        this.rutaRelTurnoApi.delete("/delete", ControladorRelTurnosBorrar_1.default.llamarBorrar);
        this.rutaRelTurnoApi.put("/update", ControladorRelTurnosActualizar_1.default.llamarActualizarRelTurnos);
    }
}
const rutaRelTurno = new RutaRelTurno();
exports.default = rutaRelTurno.rutaRelTurnoApi;
