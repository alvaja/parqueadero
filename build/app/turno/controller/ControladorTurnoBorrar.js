"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTurnoBorrar_1 = __importDefault(require("../service/ServicioTurnoBorrar"));
const Turno_1 = __importDefault(require("../model/Turno"));
class ControladorTurnoBorrar extends ServicioTurnoBorrar_1.default {
    llamarBorrar(req, res) {
        const codigo = Number(req.params.codTurno);
        const objRol = new Turno_1.default(codigo, 0, "", "", "", "");
        ServicioTurnoBorrar_1.default.borrar(objRol, res);
    }
}
const controladorTurnoBorrar = new ControladorTurnoBorrar();
exports.default = controladorTurnoBorrar;
