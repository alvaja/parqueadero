"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RelTurnos_1 = __importDefault(require("../model/RelTurnos"));
const ServicioRelTurnosBorrar_1 = __importDefault(require("../service/ServicioRelTurnosBorrar"));
class ControladorRelTurnosBorrar extends ServicioRelTurnosBorrar_1.default {
    llamarBorrar(req, res) {
        //console.log("params recibido:", req.params);
        const codTurnoUsuario = Number(req.params.codTurnoUsuario);
        const objRelTurno = new RelTurnos_1.default(codTurnoUsuario, 0, 0);
        ServicioRelTurnosBorrar_1.default.borrar(objRelTurno, res);
    }
}
const controladorRelTurnosBorrar = new ControladorRelTurnosBorrar();
exports.default = controladorRelTurnosBorrar;
