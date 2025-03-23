"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESOS = void 0;
exports.SQL_ACCESOS = {
    FIND_ALL: "SELECT cod_usuario, correo_acceso, uuid_acceso FROM accesos ORDER BY cod_usuario",
    HOW_MANY: "SELECT COUNT(a.cod_usuario) as cantidad FROM accesos a \
    WHERE a.cod_usuario = $1",
    FIND_BY_ID: "SELECT cod_usuario, correo_acceso, uuid_acceso FROM accesos WHERE cod_usuario = $1",
    ADD: "INSERT INTO accesos (cod_usuario, correo_acceso, clave_acceso, uuid_acceso) VALUES ($1, $2, $3, $4) RETURNING cod_usuario",
    DELETE: "DELETE FROM accesos WHERE cod_usuario = $1",
    UPDATE: "UPDATE accesos SET correo_acceso = $2, clave_acceso = $3 WHERE cod_usuario = $1",
};
