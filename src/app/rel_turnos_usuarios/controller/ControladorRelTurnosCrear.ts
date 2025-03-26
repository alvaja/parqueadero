import ServicioRelTurnosCrear from "../service/ServiceRelTurnosCrear";
import { Request, Response } from "express";
import RelTurnos from "../model/RelTurnos";

class ControladorRelTurnosCrear extends ServicioRelTurnosCrear {
    public llamarGrabarRelTurnos(req: Request, resp: Response): void {
      console.log("Body recibido:", req.body);
      const { codTurno, codUsuario } = req.body;
      const objTemporal = new RelTurnos(0, 0, 0);
      objTemporal.codTurno = codTurno;
      objTemporal.codUsuario = codUsuario;
      console.log(objTemporal);
      ServicioRelTurnosCrear.grabarRelTurnos(objTemporal, resp);
    }
  }
const controladorRelTurnosCrear = new ControladorRelTurnosCrear();
export default controladorRelTurnosCrear;