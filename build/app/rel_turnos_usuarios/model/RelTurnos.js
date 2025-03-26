"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelTurnos = void 0;
class RelTurnos {
    constructor(codTurnoUsuario, codTurno, codUsuario) {
        this.codTurnoUsuario = codTurnoUsuario;
        this.codTurno = codTurno;
        this.codUsuario = codUsuario;
    }
    getCodTurnousuario() {
        return this.codTurnoUsuario;
    }
    setCodTurnousuario(codTurnoUsuario) {
        this.codTurnoUsuario = codTurnoUsuario;
    }
    getCodTurno() {
        return this.codTurno;
    }
    setCodTurno(codTurno) {
        this.codTurno = codTurno;
    }
    getCodUsuario() {
        return this.codUsuario;
    }
    setCodUsuario(codUsuario) {
        this.codUsuario = codUsuario;
    }
}
exports.RelTurnos = RelTurnos;
exports.default = RelTurnos;
