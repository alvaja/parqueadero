"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTurnoConsulta_1 = __importDefault(require("../service/ServicioTurnoConsulta"));
class ControladorTurnoConsulta extends ServicioTurnoConsulta_1.default {
    llamarObtenerTodos(req, res) {
        ServicioTurnoConsulta_1.default.obtenerTodos(res);
    }
}
const controladorTurnoConsulta = new ControladorTurnoConsulta;
exports.default = controladorTurnoConsulta;
