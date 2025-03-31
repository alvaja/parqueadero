
import { body, param } from "express-validator";

export const datosRelTurnosCrear = [
    body("codTurno", "Debe ser un número entero").isInt(),
    body("codUsuario", "Debe ser un número entero").isInt(), 
];

export const datosRelTurnosBorrar = [
    param("codTurnoUsuario", "Debe ser un numero").isInt(),
];

export const datosRelTurnosActualizar = [
    body("codTurnoUsuario", "Debe ser un número entero").isInt().not().isEmpty(),
    body("codTurno", "Debe ser un número entero").isInt(),
    body("codUsuario", "Debe ser un número entero").isInt(),
];