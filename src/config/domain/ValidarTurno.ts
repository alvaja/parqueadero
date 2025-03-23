import { body, param } from "express-validator";

export const datosTurnoCrear = [
  body("cod_parqueadero", "Debe ser un número entero").isInt(),
  body("descripcion_turno", "La descripción no puede estar vacía").trim().not().isEmpty(),
  body("fecha_turno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
  body("hora_inicio_turno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
  body("hora_fin_turno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];

export const datosTurnoBorrar = [
  param("codTurno", "Debe ser un numero").isInt(),
  param("codTurno", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosTurnoActualizar = [
  body("cod_turno", "Debe ser un número entero").isInt(),
  body("cod_parqueadero", "Debe ser un número entero").isInt(),
  body("descripcion_turno", "La descripción no puede estar vacía").trim().not().isEmpty(),
  body("fecha_turno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
  body("hora_inicio_turno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
  body("hora_fin_turno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];