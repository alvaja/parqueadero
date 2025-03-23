import { body, param } from "express-validator";

export const datosAccesoCrear = [
    body("cod_usuario", "No puede estar vacio").trim().not().isEmpty(),
    body("cod_usuario", "Debe ser un numero").isInt(),
    body("correo_acceso", "No puede estar vacio el correo").trim().not().isEmpty(),
    body("claveAcceso", "No puede estar vacio en la clave").not().isEmpty(),
    body("uuid_acceso", "No puede estar vacio el uuid").trim().not().isEmpty()
];

export const datosAccesoBorrar = [
    param("cod_usuario", "Debe ser un numero").isInt(),
];

export const datosAccesoActualizar = [
    body("cod_usuario", "Codigo requerido").not().isEmpty(),
    body("cod_usuario", "Codigo numerico").isInt(),
    body("correo_acceso","No puede estar vacio el correo").trim().not().isEmpty(),
    body("claveAcceso", "No puede estar vacio en la clave").not().isEmpty(),
];