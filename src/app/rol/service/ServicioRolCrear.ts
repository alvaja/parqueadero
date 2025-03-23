import { Response } from "express";
import Rol from "../model/Rol";
import { SQL_ROL } from "../repository/sql_rol";
import pool from "../../../config/connection/dbConnection";

class ServicioRolCrear {
  protected static async grabalRol(obj: Rol, resp: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;

        const roles = await consulta.one(SQL_ROL.HOW_MANY, [obj.nombreRol]);
        if (roles.cantidad == 0) { //roles is empty
            caso = 2;
            objGrabado = await consulta.one(SQL_ROL.ADD, [obj.nombreRol]);
        }
        return { caso, objGrabado }; //go to then
      })
      .then(({ caso, objGrabado }) => {
        switch(caso){
            case 1:
                resp.status(400).json({Respuesta: "Ya existe"});
                break;
            default:
                resp.status(202).json(objGrabado);
                break;
        }
      })
      .catch((miError) => {
        console.log(miError);
        resp.status(400).json({ Respuesta: "Error SQL" });
      });
  }
}

export default ServicioRolCrear;
