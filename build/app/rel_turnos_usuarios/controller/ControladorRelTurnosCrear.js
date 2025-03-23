"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceRelTurnosCrear_1 = __importDefault(require("../service/ServiceRelTurnosCrear"));
const RelTurnos_1 = __importDefault(require("../model/RelTurnos"));
class ControladorRelTurnosCrear extends ServiceRelTurnosCrear_1.default {
    llamarGrabarRelTurnos(req, resp) {
        //console.log("Body recibido:", req.body);  //     
        const objTemporal = new RelTurnos_1.default(0, 0, 0);
        objTemporal.cod_turnousuario = req.body.cod_turnousuario;
        objTemporal.cod_turno = req.body.cod_turno;
        objTemporal.cod_usuario = req.body.cod_usuario;
        ServiceRelTurnosCrear_1.default.grabarRelTurnos(objTemporal, resp); //
    }
}
const controladorRelTurnosCrear = new ControladorRelTurnosCrear();
exports.default = controladorRelTurnosCrear;
