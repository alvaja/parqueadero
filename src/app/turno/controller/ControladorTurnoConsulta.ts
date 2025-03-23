import { Request, Response } from "express";
import ServicioTurnoConsulta from "../service/ServicioTurnoConsulta";

class ControladorTurnoConsulta extends ServicioTurnoConsulta{
    public  llamarObtenerTodos(req: Request, res: Response): void {
        ServicioTurnoConsulta.obtenerTodos(res);
    }
}

const controladorTurnoConsulta = new ControladorTurnoConsulta;
export default controladorTurnoConsulta;