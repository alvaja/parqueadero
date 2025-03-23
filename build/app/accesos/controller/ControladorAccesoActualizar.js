"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acceso_1 = __importDefault(require("../model/Acceso"));
const ServicioAccesoActualizar_1 = __importDefault(require("../service/ServicioAccesoActualizar"));
class ControladorAccesoActualizar extends ServicioAccesoActualizar_1.default {
    llamarActualizarAcceso(req, res) {
        console.log("Body recibido:", req.body);
        const objetito = new Acceso_1.default(0, "", "", "");
        objetito.codUsuario = req.body.cod_usuario;
        objetito.correoAcceso = req.body.correo_acceso;
        objetito.claveAcceso = req.body.claveAcceso;
        ServicioAccesoActualizar_1.default.actualizarAcceso(objetito, res);
    }
}
const controladorAccesoActualizar = new ControladorAccesoActualizar();
exports.default = controladorAccesoActualizar;
