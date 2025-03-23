import ServicioRelTurnosCrear from "../service/ServiceRelTurnosCrear";
import { Request, Response } from "express";
import RelTurnos from "../model/RelTurnos";



class ControladorRelTurnosCrear  extends ServicioRelTurnosCrear {
    public llamarGrabarRelTurnos(req: Request, resp: Response) {
        //console.log("Body recibido:", req.body);  //     
        const objTemporal = new RelTurnos (0,0,0);
        objTemporal.cod_turnousuario = req.body.cod_turnousuario;
        objTemporal.cod_turno = req.body.cod_turno;
        objTemporal.cod_usuario = req.body.cod_usuario;
        ServicioRelTurnosCrear.grabarRelTurnos(objTemporal, resp);  //
    }
}
const controladorRelTurnosCrear = new ControladorRelTurnosCrear();
export default controladorRelTurnosCrear;