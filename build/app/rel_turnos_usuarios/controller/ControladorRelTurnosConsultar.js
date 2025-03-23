"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioRelTurnosConsultar_1 = __importDefault(require("../service/ServicioRelTurnosConsultar"));
class ControladorRelTurnoConsulta extends ServicioRelTurnosConsultar_1.default {
    llamarObtenerTodos(req, res) {
        ServicioRelTurnosConsultar_1.default.obtenerTodos(res);
    }
}
const controladorRelTurnosConsulta = new ControladorRelTurnoConsulta();
exports.default = controladorRelTurnosConsulta;
