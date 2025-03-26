"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceRelTurnosCrear_1 = __importDefault(require("../service/ServiceRelTurnosCrear"));
const RelTurnos_1 = __importDefault(require("../model/RelTurnos"));
class ControladorRelTurnosCrear extends ServiceRelTurnosCrear_1.default {
    llamarGrabarRelTurnos(req, resp) {
        console.log("Body recibido:", req.body);
        const { codTurno, codUsuario } = req.body;
        const objTemporal = new RelTurnos_1.default(0, 0, 0);
        objTemporal.codTurno = codTurno;
        objTemporal.codUsuario = codUsuario;
        console.log(objTemporal);
        ServiceRelTurnosCrear_1.default.grabarRelTurnos(objTemporal, resp);
    }
}
const controladorRelTurnosCrear = new ControladorRelTurnosCrear();
exports.default = controladorRelTurnosCrear;
