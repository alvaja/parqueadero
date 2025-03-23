import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

class ValidarDatos {

    public ahora(req: Request, res: Response, next: NextFunction): void{
        const Errores = validationResult(req);
        if(Errores.isEmpty()){
            next();
        }else{
            res.status(400).json({respuesta: Errores.array()})
        }
    }
}

const validarDatos = new ValidarDatos();
export default validarDatos;