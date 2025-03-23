import { Request, Response } from "express";
import ServicioTurnoBorrar from "../service/ServicioTurnoBorrar";
import Turno from "../model/Turno";

class ControladorTurnoBorrar extends ServicioTurnoBorrar{
    public llamarBorrar(req: Request, res: Response): void{
        const codigo = Number(req.params.codTurno);
        const objRol =  new Turno(codigo,0, "", "", "", "");
        ServicioTurnoBorrar.borrar(objRol, res);
    }
}

const controladorTurnoBorrar = new ControladorTurnoBorrar();
export default controladorTurnoBorrar;