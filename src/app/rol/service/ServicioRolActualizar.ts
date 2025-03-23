import pool from "../../../config/connection/dbConnection"
import Rol from "../model/Rol"
import { Response } from 'express';
import { SQL_ROL } from "../repository/sql_rol";

class ServicioRolActualizar{
    protected static async actualizarRol(objRol: Rol, res: Response): Promise<any>{
        await pool.task(async (consulta) =>{
            let caso = 1;
            let objActualizado: any;
            const roles = await consulta.one(SQL_ROL.HOW_MANY, [objRol.nombreRol]);
            if(roles.cantidad == 0){
                caso = 2;
                objActualizado = await consulta.result(SQL_ROL.UPDATE, [objRol.nombreRol, objRol.codRol]); 
            }
            return {caso, objActualizado}
        }).then(({caso, objActualizado}) =>{
            switch (caso) {
                case 1:
                    res.status(400).json({respuesta: "Ya existe el rol"});
                    break;
                default:
                    res.status(200).json({respuesta: "todo bien", detalle: objActualizado.rowCount});
                    break;
            }
        }).catch((miError)=>{
            console.log(miError);
            res.status(400).json({respuesta: "Fatal error!"});
        });
    }

}

export default ServicioRolActualizar;