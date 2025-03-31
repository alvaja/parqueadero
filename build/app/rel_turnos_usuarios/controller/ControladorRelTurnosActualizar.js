"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RelTurnos_1 = __importDefault(require("../model/RelTurnos"));
const ServicioRelTurnosActualizar_1 = __importDefault(require("../service/ServicioRelTurnosActualizar"));
class ControladorRelTurnosActualizar extends ServicioRelTurnosActualizar_1.default {
    llamarActualizarRelTurnos(req, res) {
        //console.log("Body recibido:", req.body);
        const objRelTurno = new RelTurnos_1.default(0, 0, 0);
        objRelTurno.codTurnoUsuario = req.body.codTurnoUsuario;
        objRelTurno.codTurno = req.body.codTurno;
        objRelTurno.codUsuario = req.body.codUsuario;
        ServicioRelTurnosActualizar_1.default.actualizarRelTurnos(objRelTurno, res);
    }
}
const controladorRelTurnosActualizar = new ControladorRelTurnosActualizar();
exports.default = controladorRelTurnosActualizar;
