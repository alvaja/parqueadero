import { Request, Response } from "express";
import Turno from "../model/Turno";
import ServicioTurnoActualizar from "../service/ServicioTurnoActualizar";

class ControladorTurnoActualizar extends ServicioTurnoActualizar {
  public llamarActualizarTurno(req: Request, res: Response): void {
    //console.log("Body recibido:", req.body);
    const objTemporal = new Turno(0, 0, "", "", "", "");
    objTemporal.cod_turno = req.body.cod_turno;
    objTemporal.cod_parqueadero =  req.body.cod_parqueadero;
    objTemporal.descripcion_turno = req.body.descripcion_turno;
    objTemporal.fecha_turno = req.body.fecha_turno;
    objTemporal.hora_inicio_turno = req.body.hora_inicio_turno;
    objTemporal.hora_fin_turno = req.body.hora_fin_turno;
    ServicioTurnoActualizar.actualizarTurno(objTemporal, res);
  }
}

const controladorTurnoActualizar = new ControladorTurnoActualizar();
export default controladorTurnoActualizar;