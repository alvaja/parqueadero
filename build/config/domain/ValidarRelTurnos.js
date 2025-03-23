"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRelTurnosActualizar = exports.datosRelTurnosBorrar = exports.datosRelTurnosCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosRelTurnosCrear = [
    (0, express_validator_1.body)("cod_turnousuario", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("cod_turno", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("cod_usuario", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("cod_turnousuario", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRelTurnosBorrar = [
    (0, express_validator_1.param)("cod_turnousuario", "Debe ser un numero").isInt(),
    (0, express_validator_1.param)("cod_turno", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRelTurnosActualizar = [
    (0, express_validator_1.body)("cod_turnousuario", "Debe ser un número entero").isInt().not().isEmpty(),
    (0, express_validator_1.body)("cod_turno", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("cod_usuario", "Debe ser un número entero").isInt(),
];
