class Acceso {
    private _codUsuario: number;
    private _correoAcceso: string;
    private _claveAcceso: string;
    private _uuidAcceso: string;

    constructor(codUsuario: number, correoAcceso: string, claveAcceso: string, uuidAcceso: string) {
        this._codUsuario = codUsuario;
        this._correoAcceso = correoAcceso;
        this._claveAcceso = claveAcceso;
        this._uuidAcceso = uuidAcceso;
    }

    public get codUsuario(): number {
        return this._codUsuario;
    }

    public get correoAcceso(): string {
        return this._correoAcceso;
    }

    public get claveAcceso(): string {
        return this._claveAcceso;
    }

    public get uuidAcceso(): string {
        return this._uuidAcceso;
    }

    public set codUsuario(codUsuario: number){
        this._codUsuario = codUsuario;
    }

    public set correoAcceso(correoAcceso: string){
        this._correoAcceso = correoAcceso;
    }

    public set claveAcceso(claveAcceso: string){
        this._claveAcceso = claveAcceso;
    }

    public set uuidAcceso(uuidAcceso: string){
        this._uuidAcceso = uuidAcceso;
    }
}

export default Acceso;
