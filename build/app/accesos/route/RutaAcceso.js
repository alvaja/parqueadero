"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorAccesoCrear_1 = __importDefault(require("../controller/ControladorAccesoCrear"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ValidarAcceso_1 = require("../../../config/domain/ValidarAcceso");
const ControladorAccesoConsulta_1 = __importDefault(require("../controller/ControladorAccesoConsulta"));
const ControladorAccesoBorrar_1 = __importDefault(require("../controller/ControladorAccesoBorrar"));
const ControladorAccesoActualizar_1 = __importDefault(require("../controller/ControladorAccesoActualizar"));
class RutaAccesso {
    constructor() {
        this.rutaAccesoApi = (0, express_1.Router)();
        this.rutaAccesoApi.get("/getall", ControladorAccesoConsulta_1.default.llamarObtenerTodos);
        this.rutaAccesoApi.post("/add", ValidarAcceso_1.datosAccesoCrear, ValidarDatos_1.default.ahora, ControladorAccesoCrear_1.default.llamarAccesoCrear);
        this.rutaAccesoApi.delete("/delete/:cod_usuario", ValidarAcceso_1.datosAccesoBorrar, ValidarDatos_1.default.ahora, ControladorAccesoBorrar_1.default.llamarBorar);
        this.rutaAccesoApi.put("/update", ValidarAcceso_1.datosAccesoActualizar, ValidarDatos_1.default.ahora, ControladorAccesoActualizar_1.default.llamarActualizarAcceso);
    }
}
const rutaAcceso = new RutaAccesso();
exports.default = rutaAcceso.rutaAccesoApi;
