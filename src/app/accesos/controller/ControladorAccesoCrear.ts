import { Request, Response } from "express";
import Acceso from "../model/Acceso";
import ServicioAccesoCrear from "../service/ServicioAccesoCrear";

class ControladorAccesoCrear extends ServicioAccesoCrear {
    public llamarAccesoCrear(req: Request, resp: Response): void {
        console.log("Body recibido:", req.body);
        const objTemporal = new Acceso(0, "", "", "");
        objTemporal.codUsuario = req.body.cod_usuario;
        objTemporal.correoAcceso = req.body.correo_acceso;
        objTemporal.claveAcceso = req.body.claveAcceso;
        objTemporal.uuidAcceso = req.body.uuid_acceso;
        ServicioAccesoCrear.grabarAcceso(objTemporal, resp);
    }
}

const controladorAccesoCrear = new ControladorAccesoCrear();
export default controladorAccesoCrear;