"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RelTurnos_1 = __importDefault(require("../model/RelTurnos"));
const ServicioRelTurnosActualizar_1 = __importDefault(require("../service/ServicioRelTurnosActualizar"));
class ControladorRelTurnosActualizar extends ServicioRelTurnosActualizar_1.default {
    llamarActualizarRelTurnos(req, res) {
        const objRelTurno = new RelTurnos_1.default(0, 0, 0);
        objRelTurno.cod_turnousuario = req.body.cod_turnousuario;
        objRelTurno.cod_turno = req.body.cod_turno;
        objRelTurno.cod_usuario = req.body.cod_usuario;
        ServicioRelTurnosActualizar_1.default.actualizarRelTurnos(objRelTurno, res);
    }
}
const controladorRelTurnosActualizar = new ControladorRelTurnosActualizar();
exports.default = controladorRelTurnosActualizar;
