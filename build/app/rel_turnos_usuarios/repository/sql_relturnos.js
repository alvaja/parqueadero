"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_RELTURNO = void 0;
exports.SQL_RELTURNO = {
    FIND_ALL: "SELECT * FROM rel_turno_usuario ORDER BY cod_turnousuario",
    FIND_BY_ID: "SELECT * FROM rel_turno_usuario WHERE cod_turnousuario = $1",
    HOW_MANY: "SELECT COUNT(*) as cantidad FROM rel_turno_usuario  \
    WHERE cod_turnousuario = $1",
    ADD: "INSERT INTO rel_turno_usuario (cod_turno, cod_usuario) VALUES ($1, $2) \
    RETURNING cod_turnousuario",
    DELETE: "DELETE FROM rel_turno_usuario WHERE cod_turnousuario = $1",
    UPDATE: "UPDATE rel_turno_usuario SET cod_turno = $2, cod_usuario = $3 WHERE cod_turnousuario = $1 RETURNING cod_turnousuario",
};
