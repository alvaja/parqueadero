export class Turno {
    public cod_turno: number;
    public cod_parqueadero: number;
    public descripcion_turno: string;
    public fecha_turno: string;
    public hora_inicio_turno: string;
    public hora_fin_turno: string;

    constructor(
        cod_turno: number,
        cod_parqueadero: number,
        descripcion_turno: string,
        fecha_turno: string,
        hora_inicio_turno: string,
        hora_fin_turno: string,
    ) {
        this.cod_turno = cod_turno;
        this.cod_parqueadero = cod_parqueadero;
        this.descripcion_turno = descripcion_turno;
        this.fecha_turno = fecha_turno;
        this.hora_inicio_turno = hora_inicio_turno;
        this.hora_fin_turno = hora_fin_turno;
    }

    public getCodTurno(): number{
        return this.cod_turno;
    }

    public getCodParqueadero(): number {
        return this.cod_parqueadero;
    }

    public getDescripcionTurno(): string {
        return this.descripcion_turno;
    }

    public getFechaTurno(): string {
        return this.fecha_turno;
    }

    public getHoraInicioTurno(): string {
        return this.hora_inicio_turno;
    }

    public getHoraFinTurno(): string {
        return this.hora_fin_turno;
    }

    public setCodTurno(cod_turno: number): void {
        this.cod_turno = cod_turno;
    }

    public setCodParqueadero(cod_parqueadero: number): void {
        this.cod_parqueadero = cod_parqueadero;
    }

    public setDescripcionTurno(descripcion_turno: string): void {
        this.descripcion_turno = descripcion_turno;
    }

    public setFechaTurno(fecha_turno: string): void {
        this.fecha_turno = fecha_turno;
    }

    public setHoraInicioTurno(hora_inicio_turno: string): void {
        this.hora_inicio_turno = hora_inicio_turno;
    }

    public setHoraFinTurno(hora_fin_turno: string): void {
        this.hora_fin_turno = hora_fin_turno;
    }
}

export default Turno;