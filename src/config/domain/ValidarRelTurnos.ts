
import { body, param } from "express-validator";

export const datosRelTurnosCrear = [
    body("codTurnoUsuario", "Debe ser un número entero").isInt(),
    body("codTurno", "Debe ser un número entero").isInt(),
    body("codUsuario", "Debe ser un número entero").isInt(), 
    body("codTurnoUsuario", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosRelTurnosBorrar = [
    param("codTurnoUsuario", "Debe ser un numero").isInt(),
    param("codTurno", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosRelTurnosActualizar = [
    body("codTurnoUsuario", "Debe ser un número entero").isInt().not().isEmpty(),
    body("codTurno", "Debe ser un número entero").isInt(),
    body("codUsuario", "Debe ser un número entero").isInt(),
];