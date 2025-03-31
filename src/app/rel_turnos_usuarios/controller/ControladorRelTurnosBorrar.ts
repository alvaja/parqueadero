import RelTurnos from "../model/RelTurnos";
import ServicioRelTurnosBorrar from "../service/ServicioRelTurnosBorrar";
import { Request, Response } from "express";


class ControladorRelTurnosBorrar extends ServicioRelTurnosBorrar{
    public llamarBorrar(req: Request, res: Response): void{
        //console.log("params recibido:", req.params);
        const codTurnoUsuario = Number(req.params.codTurnoUsuario);
        const objRelTurno =  new RelTurnos(codTurnoUsuario, 0, 0);
        ServicioRelTurnosBorrar.borrar(objRelTurno, res);
    }
}
const controladorRelTurnosBorrar = new ControladorRelTurnosBorrar();
export default controladorRelTurnosBorrar;