import { Request, Response } from "express";

import Rol from "../model/Rol";
import ServicioRolCrear from "../service/ServicioRolCrear";

class ControladorRolCrear extends ServicioRolCrear {
  public llamarGrabarRol(req: Request, resp: Response): void {
    //console.log("Body recibido:", req.body);
    const objTemporal = new Rol(0, "");
    objTemporal.nombreRol = req.body.nombreRol;
    ServicioRolCrear.grabalRol(objTemporal, resp);

  }
}

const controladorRolCrear = new ControladorRolCrear();
export default controladorRolCrear;
