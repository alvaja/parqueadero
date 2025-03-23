import { body, param } from "express-validator";

export const datosRolCrear = [
    body("nombreRol")
        .notEmpty().withMessage("Rol requerido")
        .isLength({ min: 5 }).withMessage("Mínimo 5 caracteres")
];

export const datosRolBorrar = [
    param("codRol", "Debe ser un numero").isInt(),
    param("codRol", "Maximo 6 caracteres").isLength({ max: 6}),
];

export const datosRolActualizar = [
    body("codRol", "Codigo requerido").not().isEmpty(),
    body("codRol", "Codigo numerico").isInt(),
    body("nombreRol", "Rol requerido").trim().not().isEmpty(),
    body("nombreRol", "minimo 5 caracteres").isLength({ min: 6}),
];