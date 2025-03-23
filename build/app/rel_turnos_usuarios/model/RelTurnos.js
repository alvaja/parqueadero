"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelTurnos = void 0;
class RelTurnos {
    constructor(cod_turnousuario, cod_turno, cod_usuario) {
        this.cod_turnousuario = cod_turnousuario;
        this.cod_turno = cod_turno;
        this.cod_usuario = cod_usuario;
    }
    getCodTurnousuario() {
        return this.cod_turnousuario;
    }
    setCodTurnousuario(cod_turnousuario) {
        this.cod_turnousuario = cod_turnousuario;
    }
    getCodTurno() {
        return this.cod_turno;
    }
    setCodTurno(cod_turno) {
        this.cod_turno = cod_turno;
    }
    getCodUsuario() {
        return this.cod_usuario;
    }
    setCodUsuario(cod_usuario) {
        this.cod_usuario = cod_usuario;
    }
}
exports.RelTurnos = RelTurnos;
exports.default = RelTurnos;
