import { Request, Response } from "express";
import Acceso from "../model/Acceso";
import ServicioAccesoActualizar from "../service/ServicioAccesoActualizar";

class ControladorAccesoActualizar extends ServicioAccesoActualizar{
    public llamarActualizarAcceso(req: Request, res: Response): void{
        console.log("Body recibido:", req.body);
        const objetito = new Acceso(0, "", "", "");
        objetito.codUsuario = req.body.cod_usuario;
        objetito.correoAcceso = req.body.correo_acceso;
        objetito.claveAcceso = req.body.claveAcceso;
        ServicioAccesoActualizar.actualizarAcceso(objetito, res);
    }

}

const controladorAccesoActualizar = new ControladorAccesoActualizar();
export default controladorAccesoActualizar;