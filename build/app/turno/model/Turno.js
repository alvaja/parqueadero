"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turno = void 0;
class Turno {
    constructor(cod_turno, cod_parqueadero, descripcion_turno, fecha_turno, hora_inicio_turno, hora_fin_turno) {
        this.cod_turno = cod_turno;
        this.cod_parqueadero = cod_parqueadero;
        this.descripcion_turno = descripcion_turno;
        this.fecha_turno = fecha_turno;
        this.hora_inicio_turno = hora_inicio_turno;
        this.hora_fin_turno = hora_fin_turno;
    }
    getCodTurno() {
        return this.cod_turno;
    }
    getCodParqueadero() {
        return this.cod_parqueadero;
    }
    getDescripcionTurno() {
        return this.descripcion_turno;
    }
    getFechaTurno() {
        return this.fecha_turno;
    }
    getHoraInicioTurno() {
        return this.hora_inicio_turno;
    }
    getHoraFinTurno() {
        return this.hora_fin_turno;
    }
    setCodTurno(cod_turno) {
        this.cod_turno = cod_turno;
    }
    setCodParqueadero(cod_parqueadero) {
        this.cod_parqueadero = cod_parqueadero;
    }
    setDescripcionTurno(descripcion_turno) {
        this.descripcion_turno = descripcion_turno;
    }
    setFechaTurno(fecha_turno) {
        this.fecha_turno = fecha_turno;
    }
    setHoraInicioTurno(hora_inicio_turno) {
        this.hora_inicio_turno = hora_inicio_turno;
    }
    setHoraFinTurno(hora_fin_turno) {
        this.hora_fin_turno = hora_fin_turno;
    }
}
exports.Turno = Turno;
exports.default = Turno;
