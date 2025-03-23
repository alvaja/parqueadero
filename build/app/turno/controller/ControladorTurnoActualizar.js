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
        objTemporal.cod_turno = req.body.cod_turno;
        objTemporal.cod_parqueadero = req.body.cod_parqueadero;
        objTemporal.descripcion_turno = req.body.descripcion_turno;
        objTemporal.fecha_turno = req.body.fecha_turno;
        objTemporal.hora_inicio_turno = req.body.hora_inicio_turno;
        objTemporal.hora_fin_turno = req.body.hora_fin_turno;
        ServicioTurnoActualizar_1.default.actualizarTurno(objTemporal, res);
    }
}
const controladorTurnoActualizar = new ControladorTurnoActualizar();
exports.default = controladorTurnoActualizar;
