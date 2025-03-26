"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRelTurnosActualizar = exports.datosRelTurnosBorrar = exports.datosRelTurnosCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosRelTurnosCrear = [
    (0, express_validator_1.body)("codTurnoUsuario", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("codTurno", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("codUsuario", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("codTurnoUsuario", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRelTurnosBorrar = [
    (0, express_validator_1.param)("codTurnoUsuario", "Debe ser un numero").isInt(),
    (0, express_validator_1.param)("codTurno", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRelTurnosActualizar = [
    (0, express_validator_1.body)("codTurnoUsuario", "Debe ser un número entero").isInt().not().isEmpty(),
    (0, express_validator_1.body)("codTurno", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("codUsuario", "Debe ser un número entero").isInt(),
];
