import RelTurnos from "../model/RelTurnos";
import ServicioRelTurnosBorrar from "../service/ServicioRelTurnosBorrar";
import { Request, Response } from "express";


class ControladorRelTurnosBorrar extends ServicioRelTurnosBorrar{
    public llamarBorrar(req: Request, res: Response): void{
        const codigo = Number(req.body.objRelTurno);
        const objRelTurno =  new RelTurnos(codigo, 0, 0);
        ServicioRelTurnosBorrar.borrar(objRelTurno, res);
    }
}
const controladorRelTurnosBorrar = new ControladorRelTurnosBorrar();
export default controladorRelTurnosBorrar;