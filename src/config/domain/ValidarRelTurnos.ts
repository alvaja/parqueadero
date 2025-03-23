
import { body, param } from "express-validator";

export const datosRelTurnosCrear = [
    body("cod_turnousuario", "Debe ser un número entero").isInt(),
    body("cod_turno", "Debe ser un número entero").isInt(),
    body("cod_usuario", "Debe ser un número entero").isInt(), 
    body("cod_turnousuario", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosRelTurnosBorrar = [
    param("cod_turnousuario", "Debe ser un numero").isInt(),
    param("cod_turno", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosRelTurnosActualizar = [
    body("cod_turnousuario", "Debe ser un número entero").isInt().not().isEmpty(),
    body("cod_turno", "Debe ser un número entero").isInt(),
    body("cod_usuario", "Debe ser un número entero").isInt(),
];