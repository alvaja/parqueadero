"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorTurnoCrear_1 = __importDefault(require("../controller/ControladorTurnoCrear"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ValidarTurno_1 = require("../../../config/domain/ValidarTurno");
const ControladorTurnoConsulta_1 = __importDefault(require("../controller/ControladorTurnoConsulta"));
const ControladorTurnoBorrar_1 = __importDefault(require("../controller/ControladorTurnoBorrar"));
const ControladorTurnoActualizar_1 = __importDefault(require("../controller/ControladorTurnoActualizar"));
class RutaTurno {
    constructor() {
        this.rutaTurnoApi = (0, express_1.Router)();
        this.rutaTurnoApi.get("/getall", ControladorTurnoConsulta_1.default.llamarObtenerTodos);
        this.rutaTurnoApi.post("/add", ValidarTurno_1.datosTurnoCrear, ValidarDatos_1.default.ahora, ControladorTurnoCrear_1.default.llamargrabarTurno);
        this.rutaTurnoApi.delete("/delete/:codTurno", ValidarTurno_1.datosTurnoBorrar, ValidarDatos_1.default.ahora, ControladorTurnoBorrar_1.default.llamarBorrar);
        this.rutaTurnoApi.put("/update", ValidarTurno_1.datosTurnoActualizar, ValidarDatos_1.default.ahora, ControladorTurnoActualizar_1.default.llamarActualizarTurno);
    }
}
const rutaTurno = new RutaTurno();
exports.default = rutaTurno.rutaTurnoApi;
