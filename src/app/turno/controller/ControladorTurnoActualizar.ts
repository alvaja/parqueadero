import { Request, Response } from "express";
import Turno from "../model/Turno";
import ServicioTurnoActualizar from "../service/ServicioTurnoActualizar";

class ControladorTurnoActualizar extends ServicioTurnoActualizar {
  public llamarActualizarTurno(req: Request, res: Response): void {
    //console.log("Body recibido:", req.body);
    const objTemporal = new Turno(0, 0, "", "", "", "");
    objTemporal.codTurno = req.body.codTurno;
    objTemporal.codParqueadero =  req.body.codParqueadero;
    objTemporal.descripcionTurno = req.body.descripcionTurno;
    objTemporal.fechaTurno = req.body.fechaTurno;
    objTemporal.horaInicioTurno = req.body.horaInicioTurno;
    objTemporal.horaFinTurno = req.body.horaFinTurno;
    ServicioTurnoActualizar.actualizarTurno(objTemporal, res);
  }
}

const controladorTurnoActualizar = new ControladorTurnoActualizar();
export default controladorTurnoActualizar;