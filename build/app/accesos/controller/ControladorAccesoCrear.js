"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acceso_1 = __importDefault(require("../model/Acceso"));
const ServicioAccesoCrear_1 = __importDefault(require("../service/ServicioAccesoCrear"));
class ControladorAccesoCrear extends ServicioAccesoCrear_1.default {
    llamarAccesoCrear(req, resp) {
        console.log("Body recibido:", req.body);
        const objTemporal = new Acceso_1.default(0, "", "", "");
        objTemporal.codUsuario = req.body.cod_usuario;
        objTemporal.correoAcceso = req.body.correo_acceso;
        objTemporal.claveAcceso = req.body.claveAcceso;
        objTemporal.uuidAcceso = req.body.uuid_acceso;
        ServicioAccesoCrear_1.default.grabarAcceso(objTemporal, resp);
    }
}
const controladorAccesoCrear = new ControladorAccesoCrear();
exports.default = controladorAccesoCrear;
