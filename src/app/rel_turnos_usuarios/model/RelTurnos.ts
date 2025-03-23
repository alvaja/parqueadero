export class RelTurnos {
    public cod_turnousuario: number;
    public cod_turno: number;
    public cod_usuario: number;

    constructor(cod_turnousuario: number, cod_turno: number, cod_usuario: number) {
        this.cod_turnousuario = cod_turnousuario;
        this.cod_turno = cod_turno;
        this.cod_usuario = cod_usuario;
    }  

    public getCodTurnousuario(): number{
        return this.cod_turnousuario;
    }

    public setCodTurnousuario(cod_turnousuario: number){
        this.cod_turnousuario = cod_turnousuario;
    }

    public getCodTurno(): number{
        return this.cod_turno;
    }

    public setCodTurno(cod_turno: number){
        this.cod_turno = cod_turno; 
    }

    public getCodUsuario(): number{
        return this.cod_usuario;
    }

    public setCodUsuario(cod_usuario: number){
        this.cod_usuario = cod_usuario;
    }




}

export default RelTurnos;