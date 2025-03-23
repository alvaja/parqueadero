"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosTurnoActualizar = exports.datosTurnoBorrar = exports.datosTurnoCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosTurnoCrear = [
    (0, express_validator_1.body)("cod_parqueadero", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("descripcion_turno", "La descripción no puede estar vacía").trim().not().isEmpty(),
    (0, express_validator_1.body)("fecha_turno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
    (0, express_validator_1.body)("hora_inicio_turno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
    (0, express_validator_1.body)("hora_fin_turno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];
exports.datosTurnoBorrar = [
    (0, express_validator_1.param)("codTurno", "Debe ser un numero").isInt(),
    (0, express_validator_1.param)("codTurno", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosTurnoActualizar = [
    (0, express_validator_1.body)("cod_turno", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("cod_parqueadero", "Debe ser un número entero").isInt(),
    (0, express_validator_1.body)("descripcion_turno", "La descripción no puede estar vacía").trim().not().isEmpty(),
    (0, express_validator_1.body)("fecha_turno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
    (0, express_validator_1.body)("hora_inicio_turno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
    (0, express_validator_1.body)("hora_fin_turno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];
