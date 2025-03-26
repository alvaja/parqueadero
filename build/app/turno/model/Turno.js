"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turno = void 0;
class Turno {
    constructor(codTurno, codParqueadero, descripcionTurno, fechaTurno, horaInicioTurno, horaFinTurno) {
        this.codTurno = codTurno;
        this.codParqueadero = codParqueadero;
        this.descripcionTurno = descripcionTurno;
        this.fechaTurno = fechaTurno;
        this.horaInicioTurno = horaInicioTurno;
        this.horaFinTurno = horaFinTurno;
    }
    getCodTurno() {
        return this.codTurno;
    }
    getCodParqueadero() {
        return this.codParqueadero;
    }
    getDescripcionTurno() {
        return this.descripcionTurno;
    }
    getFechaTurno() {
        return this.fechaTurno;
    }
    getHoraInicioTurno() {
        return this.horaInicioTurno;
    }
    getHoraFinTurno() {
        return this.horaFinTurno;
    }
    setCodTurno(cod_turno) {
        this.codTurno = cod_turno;
    }
    setCodParqueadero(cod_parqueadero) {
        this.codParqueadero = cod_parqueadero;
    }
    setDescripcionTurno(descripcion_turno) {
        this.descripcionTurno = descripcion_turno;
    }
    setFechaTurno(fecha_turno) {
        this.fechaTurno = fecha_turno;
    }
    setHoraInicioTurno(hora_inicio_turno) {
        this.horaInicioTurno = hora_inicio_turno;
    }
    setHoraFinTurno(hora_fin_turno) {
        this.horaFinTurno = hora_fin_turno;
    }
}
exports.Turno = Turno;
exports.default = Turno;
