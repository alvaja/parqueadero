"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosAccesoActualizar = exports.datosAccesoBorrar = exports.datosAccesoCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosAccesoCrear = [
    (0, express_validator_1.body)("cod_usuario", "No puede estar vacio").trim().not().isEmpty(),
    (0, express_validator_1.body)("cod_usuario", "Debe ser un numero").isInt(),
    (0, express_validator_1.body)("correo_acceso", "No puede estar vacio el correo").trim().not().isEmpty(),
    (0, express_validator_1.body)("claveAcceso", "No puede estar vacio en la clave").not().isEmpty(),
    (0, express_validator_1.body)("uuid_acceso", "No puede estar vacio el uuid").trim().not().isEmpty()
];
exports.datosAccesoBorrar = [
    (0, express_validator_1.param)("cod_usuario", "Debe ser un numero").isInt(),
];
exports.datosAccesoActualizar = [
    (0, express_validator_1.body)("cod_usuario", "Codigo requerido").not().isEmpty(),
    (0, express_validator_1.body)("cod_usuario", "Codigo numerico").isInt(),
    (0, express_validator_1.body)("correo_acceso", "No puede estar vacio el correo").trim().not().isEmpty(),
    (0, express_validator_1.body)("claveAcceso", "No puede estar vacio en la clave").not().isEmpty(),
];
