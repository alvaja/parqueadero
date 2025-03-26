import RelTurnos from "../model/RelTurnos";
import ServicioRelTurnosActualizar from "../service/ServicioRelTurnosActualizar";
import { Request, Response } from "express";


class ControladorRelTurnosActualizar extends ServicioRelTurnosActualizar {
    public llamarActualizarRelTurnos(req: Request, res: Response): void {
        const objRelTurno = new RelTurnos(0, 0, 0);
        objRelTurno.codTurno = req.body.codTurno;
        objRelTurno.codUsuario = req.body.codUsuario;
        ServicioRelTurnosActualizar.actualizarRelTurnos(objRelTurno, res);
    }
}
const controladorRelTurnosActualizar = new ControladorRelTurnosActualizar();
export default controladorRelTurnosActualizar;