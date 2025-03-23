import { Request, Response } from "express";
import ServicioAccesoConsulta from "../service/ServicioAccesoConsulta";

class ControladorAccesoConsulta extends ServicioAccesoConsulta {
  public llamarObtenerTodos(req: Request, res: Response): void {
    ServicioAccesoConsulta.obtenerTodos(res);
  }
}

const controladorAccesoConsulta = new ControladorAccesoConsulta();
export default controladorAccesoConsulta;
