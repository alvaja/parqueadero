"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ValidarDatos {
    ahora(req, res, next) {
        const Errores = (0, express_validator_1.validationResult)(req);
        if (Errores.isEmpty()) {
            next();
        }
        else {
            res.status(400).json({ respuesta: Errores.array() });
        }
    }
}
const validarDatos = new ValidarDatos();
exports.default = validarDatos;
