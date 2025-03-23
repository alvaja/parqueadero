"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rol_1 = __importDefault(require("../model/Rol"));
const ServicioRolActualizar_1 = __importDefault(require("../service/ServicioRolActualizar"));
class ControladorRolActualizar extends ServicioRolActualizar_1.default {
    llamarActualizarRol(req, res) {
        //console.log("Body recibido:", req.body);
        const objetito = new Rol_1.default(0, "");
        objetito.codRol = req.body.codRol;
        objetito.nombreRol = req.body.nombreRol;
        ServicioRolActualizar_1.default.actualizarRol(objetito, res);
    }
}
const controladorRolActualizar = new ControladorRolActualizar();
exports.default = controladorRolActualizar;
