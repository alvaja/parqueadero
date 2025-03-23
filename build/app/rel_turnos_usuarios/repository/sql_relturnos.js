"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_RELTURNO = void 0;
exports.SQL_RELTURNO = {
    FIND_ALL: "SELECT r.cod_turnousuario, r.cod_turno, r.cod_usuario \
    FROM rel_turno_usuario r ORDER BY r.cod_turnousuario",
    FIND_BY_ID: "SELECT  r.cod_turnousuario, r.nombre_rol FROM rel_turno_usuario r \
    WHERE  r.cod_turno = $1",
    HOW_MANY: "SELECT COUNT(r.cod_turnousuario) as cantidad FROM rel_turno_usuario r  \
    WHERE r.cod_turno = $1",
    ADD: "INSERT INTO rel_turno_usuario (cod_turnousuario, cod_turno, cod_usuario) VALUES ($1, $2, $3) \
    RETURNING cod_turnousuario",
    DELETE: "DELETE FROM rel_turno_usuario WHERE cod_turnousuario = $1",
    UPDATE: "UPDATE rel_turno_usuario SET cod_turno = $1, cod_usuario = $2 WHERE cod_rol = $3",
};
