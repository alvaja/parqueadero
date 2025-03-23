"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRolActualizar = exports.datosRolBorrar = exports.datosRolCrear = void 0;
const express_validator_1 = require("express-validator");
exports.datosRolCrear = [
    (0, express_validator_1.body)("nombreRol")
        .notEmpty().withMessage("Rol requerido")
        .isLength({ min: 5 }).withMessage("Mínimo 5 caracteres")
];
exports.datosRolBorrar = [
    (0, express_validator_1.param)("codRol", "Debe ser un numero").isInt(),
    (0, express_validator_1.param)("codRol", "Maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRolActualizar = [
    (0, express_validator_1.body)("codRol", "Codigo requerido").not().isEmpty(),
    (0, express_validator_1.body)("codRol", "Codigo numerico").isInt(),
    (0, express_validator_1.body)("nombreRol", "Rol requerido").trim().not().isEmpty(),
    (0, express_validator_1.body)("nombreRol", "minimo 5 caracteres").isLength({ min: 6 }),
];
