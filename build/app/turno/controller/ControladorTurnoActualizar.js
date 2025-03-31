"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Turno_1 = __importDefault(require("../model/Turno"));
const ServicioTurnoActualizar_1 = __importDefault(require("../service/ServicioTurnoActualizar"));
class ControladorTurnoActualizar extends ServicioTurnoActualizar_1.default {
    llamarActualizarTurno(req, res) {
        //console.log("Body recibido:", req.body);
        const objTemporal = new Turno_1.default(0, 0, "", "", "", "");
        objTemporal.codTurno = req.body.codTurno;
        objTemporal.codParqueadero = req.body.codParqueadero;
        objTemporal.descripcionTurno = req.body.descripcionTurno;
        objTemporal.fechaTurno = req.body.fechaTurno;
        objTemporal.horaInicioTurno = req.body.horaInicioTurno;
        objTemporal.horaFinTurno = req.body.horaFinTurno;
        ServicioTurnoActualizar_1.default.actualizarTurno(objTemporal, res);
    }
}
const controladorTurnoActualizar = new ControladorTurnoActualizar();
exports.default = controladorTurnoActualizar;
