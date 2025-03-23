import SerivicioRelTurnosConsultar from "../service/ServicioRelTurnosConsultar";
import { Request, Response } from "express";



class ControladorRelTurnoConsulta  extends SerivicioRelTurnosConsultar{
    public llamarObtenerTodos ( req: Request, res: Response ): void{
        SerivicioRelTurnosConsultar.obtenerTodos(res);
    }

}
const controladorRelTurnosConsulta = new ControladorRelTurnoConsulta();
export default controladorRelTurnosConsulta;