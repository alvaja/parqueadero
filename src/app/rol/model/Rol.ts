class Rol {
  private _codRol: number;
  private _nombreRol: string;

  constructor(cod: number, nom: string) {
    this._codRol = cod;
    this._nombreRol = nom;
  }

  public get codRol(): number {
    return this._codRol;
  }

  public get nombreRol(): string {
    return this._nombreRol;
  }

  public set codRol(cod: number) {
    this._codRol = cod;
  }

  public set nombreRol(nom: string) {
    this._nombreRol = nom;
  }
}
export default Rol;
