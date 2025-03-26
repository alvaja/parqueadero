export class RelTurnos {
    public codTurnoUsuario: number;
    public codTurno: number;
    public codUsuario: number;

    constructor(codTurnoUsuario: number, codTurno: number, codUsuario: number) {
        this.codTurnoUsuario = codTurnoUsuario;
        this.codTurno = codTurno;
        this.codUsuario = codUsuario;
    }  

    public getCodTurnousuario(): number{
        return this.codTurnoUsuario;
    }

    public setCodTurnousuario(codTurnoUsuario: number){
        this.codTurnoUsuario = codTurnoUsuario;
    }

    public getCodTurno(): number{
        return this.codTurno;
    }

    public setCodTurno(codTurno: number){
        this.codTurno = codTurno; 
    }

    public getCodUsuario(): number{
        return this.codUsuario;
    }

    public setCodUsuario(codUsuario: number){
        this.codUsuario = codUsuario;
    }




}

export default RelTurnos;