import { Request, Response } from "express";
import Acceso from "../model/Acceso";
import ServicioAccesoBorrar from "../service/ServicioAccesoBorrar";

class ControladorAccesoBorrar extends ServicioAccesoBorrar{
    public llamarBorar(req: Request, res: Response): void{
        console.log("Params recibido:", req.params);
        const codigo = Number(req.params.cod_usuario);
        const objAcceso =  new Acceso(codigo, "", "", "");
        ServicioAccesoBorrar.borrar(objAcceso, res);
    }
}

const controladorAccesoBorrar = new ControladorAccesoBorrar();
export default controladorAccesoBorrar;