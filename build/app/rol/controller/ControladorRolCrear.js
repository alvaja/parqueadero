"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rol_1 = __importDefault(require("../model/Rol"));
const ServicioRolCrear_1 = __importDefault(require("../service/ServicioRolCrear"));
class ControladorRolCrear extends ServicioRolCrear_1.default {
    llamarGrabarRol(req, resp) {
        //console.log("Body recibido:", req.body);
        const objTemporal = new Rol_1.default(0, "");
        objTemporal.nombreRol = req.body.nombreRol;
        ServicioRolCrear_1.default.grabalRol(objTemporal, resp);
    }
}
const controladorRolCrear = new ControladorRolCrear();
exports.default = controladorRolCrear;
