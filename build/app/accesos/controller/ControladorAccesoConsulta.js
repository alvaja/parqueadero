"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioAccesoConsulta_1 = __importDefault(require("../service/ServicioAccesoConsulta"));
class ControladorAccesoConsulta extends ServicioAccesoConsulta_1.default {
    llamarObtenerTodos(req, res) {
        ServicioAccesoConsulta_1.default.obtenerTodos(res);
    }
}
const controladorAccesoConsulta = new ControladorAccesoConsulta();
exports.default = controladorAccesoConsulta;
