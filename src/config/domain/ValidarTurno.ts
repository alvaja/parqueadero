import { body, param } from "express-validator";

export const datosTurnoCrear = [
  body("codParqueadero", "Debe ser un número entero").isInt(),
  body("descripcionTurno", "La descripción no puede estar vacía").trim().not().isEmpty(),
  body("fechaTurno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
  body("horaInicioTurno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
  body("horaFinTurno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];

export const datosTurnoBorrar = [
  param("codTurno", "Debe ser un numero").isInt(),
  param("codTurno", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosTurnoActualizar = [
  body("codTurno", "Debe ser un número entero").isInt(),
  body("codParqueadero", "Debe ser un número entero").isInt(),
  body("descripcionTurno", "La descripción no puede estar vacía").trim().not().isEmpty(),
  body("fechaTurno", "La fecha debe tener formato YYYY-MM-DD").isDate(),
  body("horaInicioTurno", "La hora de inicio debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
  body("horaFinTurno", "La hora de fin debe tener formato HH:MM:SS").matches(/^\d{2}:\d{2}:\d{2}$/),
];