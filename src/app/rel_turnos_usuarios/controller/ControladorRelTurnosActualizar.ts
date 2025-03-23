import RelTurnos from "../model/RelTurnos";
import ServicioRelTurnosActualizar from "../service/ServicioRelTurnosActualizar";
import { Request, Response } from "express";


class ControladorRelTurnosActualizar extends ServicioRelTurnosActualizar {
    public llamarActualizarRelTurnos(req: Request, res: Response): void {
        const objRelTurno = new RelTurnos(0, 0, 0);
        objRelTurno.cod_turnousuario = req.body.cod_turnousuario;
        objRelTurno.cod_turno = req.body.cod_turno;
        objRelTurno.cod_usuario = req.body.cod_usuario;
        ServicioRelTurnosActualizar.actualizarRelTurnos(objRelTurno, res);
    }
}
const controladorRelTurnosActualizar = new ControladorRelTurnosActualizar();
export default controladorRelTurnosActualizar;