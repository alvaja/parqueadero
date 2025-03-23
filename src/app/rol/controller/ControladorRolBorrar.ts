import { Request, Response } from "express";
import ServicioRolBorrar from "../service/ServicioRolBorrar";
import Rol from "../model/Rol";

class ControladorRolBorrar extends ServicioRolBorrar{

    public llamarBorrar(req: Request, res: Response): void{
        const codigo = Number(req.params.codRol);
        const objRol =  new Rol(codigo, "");
        ServicioRolBorrar.borrar(objRol, res);
    }

}

const controladorRolBorrar = new ControladorRolBorrar();
export default controladorRolBorrar;