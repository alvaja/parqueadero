import { Request, Response } from "express";
import ServicioTurnoCrear from "../service/ServicioTurnoCrear";
import Turno from "../model/Turno";

class ControladorTurnoCrear extends ServicioTurnoCrear {
  public llamargrabarTurno(req: Request, resp: Response) {
    //console.log("Body recibido:", req.body);
    const objTemporal = new Turno(0, 0, "", "", "", "");
    objTemporal.cod_parqueadero = req.body.cod_parqueadero;
    objTemporal.descripcion_turno = req.body.descripcion_turno;
    objTemporal.fecha_turno = req.body.fecha_turno
    objTemporal.hora_inicio_turno = req.body.hora_inicio_turno;
    objTemporal.hora_fin_turno = req.body.hora_fin_turno;
    ServicioTurnoCrear.grabarTurno(objTemporal, resp);
  }
}

const controladorTurnoCrear = new ControladorTurnoCrear;
export default controladorTurnoCrear;