export class Turno {
    public codTurno: number;
    public codParqueadero: number;
    public descripcionTurno: string;
    public fechaTurno: string;
    public horaInicioTurno: string;
    public horaFinTurno: string;

    constructor(
        codTurno: number,
        codParqueadero: number,
        descripcionTurno: string,
        fechaTurno: string,
        horaInicioTurno: string,
        horaFinTurno: string,
    ) {
        this.codTurno = codTurno;
        this.codParqueadero = codParqueadero;
        this.descripcionTurno = descripcionTurno;
        this.fechaTurno = fechaTurno;
        this.horaInicioTurno = horaInicioTurno;
        this.horaFinTurno = horaFinTurno;
    }

    public getCodTurno(): number{
        return this.codTurno;
    }

    public getCodParqueadero(): number {
        return this.codParqueadero;
    }

    public getDescripcionTurno(): string {
        return this.descripcionTurno;
    }

    public getFechaTurno(): string {
        return this.fechaTurno;
    }

    public getHoraInicioTurno(): string {
        return this.horaInicioTurno;
    }

    public getHoraFinTurno(): string {
        return this.horaFinTurno;
    }

    public setCodTurno(cod_turno: number): void {
        this.codTurno = cod_turno;
    }

    public setCodParqueadero(cod_parqueadero: number): void {
        this.codParqueadero = cod_parqueadero;
    }

    public setDescripcionTurno(descripcion_turno: string): void {
        this.descripcionTurno = descripcion_turno;
    }

    public setFechaTurno(fecha_turno: string): void {
        this.fechaTurno = fecha_turno;
    }

    public setHoraInicioTurno(hora_inicio_turno: string): void {
        this.horaInicioTurno = hora_inicio_turno;
    }

    public setHoraFinTurno(hora_fin_turno: string): void {
        this.horaFinTurno = hora_fin_turno;
    }
}

export default Turno;