"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTurnoCrear_1 = __importDefault(require("../service/ServicioTurnoCrear"));
const Turno_1 = __importDefault(require("../model/Turno"));
class ControladorTurnoCrear extends ServicioTurnoCrear_1.default {
    llamargrabarTurno(req, resp) {
        //console.log("Body recibido:", req.body);
        const objTemporal = new Turno_1.default(0, 0, "", "", "", "");
        objTemporal.codParqueadero = req.body.codParqueadero;
        objTemporal.descripcionTurno = req.body.descripcionTurno;
        objTemporal.fechaTurno = req.body.fechaTurno;
        objTemporal.horaInicioTurno = req.body.horaInicioTurno;
        objTemporal.horaFinTurno = req.body.horaFinTurno;
        ServicioTurnoCrear_1.default.grabarTurno(objTemporal, resp);
    }
}
const controladorTurnoCrear = new ControladorTurnoCrear;
exports.default = controladorTurnoCrear;
