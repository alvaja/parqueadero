import pool from "../../../config/connection/dbConnection";
import { Response } from "express";
import { SQL_ACCESOS } from "../repository/sql_accesos";
import Acceso from "../model/Acceso";

class ServicioAccesoCrear {
    protected static async grabarAcceso(obj: Acceso, resp: Response): Promise<any> {
        await pool
          .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const acceso = await consulta.one(SQL_ACCESOS.HOW_MANY, [
              obj.codUsuario,
            ]);
            if (acceso.cantidad == 0) {
              caso = 2;
              objGrabado = await consulta.one(SQL_ACCESOS.ADD, [
                obj.codUsuario,
                obj.correoAcceso,
                obj.claveAcceso,
                obj.uuidAcceso,
              ]);
            }
            return { caso, objGrabado };
          })
          .then(({ caso, objGrabado }) => {
            switch (caso) {
              case 1:
                resp.status(400).json({ Respuesta: "Ya existe" });
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

export default ServicioAccesoCrear;