"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acceso_1 = __importDefault(require("../model/Acceso"));
const ServicioAccesoBorrar_1 = __importDefault(require("../service/ServicioAccesoBorrar"));
class ControladorAccesoBorrar extends ServicioAccesoBorrar_1.default {
    llamarBorar(req, res) {
        console.log("Params recibido:", req.params);
        const codigo = Number(req.params.cod_usuario);
        const objAcceso = new Acceso_1.default(codigo, "", "", "");
        ServicioAccesoBorrar_1.default.borrar(objAcceso, res);
    }
}
const controladorAccesoBorrar = new ControladorAccesoBorrar();
exports.default = controladorAccesoBorrar;
