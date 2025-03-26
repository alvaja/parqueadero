import { Request, Response } from "express";
import ServicioTurnoCrear from "../service/ServicioTurnoCrear";
import Turno from "../model/Turno";

class ControladorTurnoCrear extends ServicioTurnoCrear {
  public llamargrabarTurno(req: Request, resp: Response) {
    //console.log("Body recibido:", req.body);
    const objTemporal = new Turno(0, 0, "", "", "", "");
    objTemporal.codParqueadero = req.body.codParqueadero;
    objTemporal.descripcionTurno = req.body.descripcionTurno;
    objTemporal.fechaTurno = req.body.fechaTurno
    objTemporal.horaInicioTurno = req.body.horaInicioTurno;
    objTemporal.horaFinTurno = req.body.horaFinTurno;
    ServicioTurnoCrear.grabarTurno(objTemporal, resp);
  }
}

const controladorTurnoCrear = new ControladorTurnoCrear;
export default controladorTurnoCrear;