import pool from "../../../config/connection/dbConnection";
import { Response } from "express";
import { SQL_RELTURNO } from "../repository/sql_relturnos";
import RelTurnos from "../model/RelTurnos";

class ServicioRelTurnosCrear {
    protected static async grabarRelTurnos(obj: RelTurnos, resp: Response): Promise<any> {
        await pool
          .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const acceso = await consulta.one(SQL_RELTURNO.HOW_MANY, [
              obj.cod_turnousuario,
            ]);
            if (acceso.cantidad == 0) {
              caso = 2;
              objGrabado = await consulta.one(SQL_RELTURNO.ADD, [
                obj.cod_turnousuario,
                obj.cod_turno,
                obj.cod_usuario,
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

export default ServicioRelTurnosCrear;