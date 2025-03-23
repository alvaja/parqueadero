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
        objTemporal.cod_parqueadero = req.body.cod_parqueadero;
        objTemporal.descripcion_turno = req.body.descripcion_turno;
        objTemporal.fecha_turno = req.body.fecha_turno;
        objTemporal.hora_inicio_turno = req.body.hora_inicio_turno;
        objTemporal.hora_fin_turno = req.body.hora_fin_turno;
        ServicioTurnoCrear_1.default.grabarTurno(objTemporal, resp);
    }
}
const controladorTurnoCrear = new ControladorTurnoCrear;
exports.default = controladorTurnoCrear;
