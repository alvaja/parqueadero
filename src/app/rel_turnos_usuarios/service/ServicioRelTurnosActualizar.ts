import pool from "../../../config/connection/dbConnection";
import RelTurnos from "../model/RelTurnos";
import { SQL_RELTURNO } from "../repository/sql_relturnos";
import { Response } from "express";


class ServicioRelTurnosActualizar {
    protected static async actualizarRelTurnos(obj: RelTurnos, res: Response): Promise<any> {
        await pool
          .task(async (consulta) => {
            let caso = 1;
            let objActualizado: any;
            const relTurnosExiste = await consulta.one(SQL_RELTURNO.FIND_BY_ID, [obj.cod_turnousuario]);
            if (relTurnosExiste.cantidad != 0) {
              caso = 2;
              objActualizado = await consulta.result(SQL_RELTURNO.UPDATE, [
                obj.cod_turnousuario,
                obj.cod_turno,
                obj.cod_usuario,
              ]);
            }
            return { caso, objActualizado };
          })
          .then(({ caso, objActualizado }) => {
            switch (caso) {
              case 1:
                res.status(400).json({ mensaje: "No se encontro el turno." });
                break;
              default:
                res
                  .status(200)
                  .json({
                    mensaje: "Actualización exitosa.",
                    detalle: objActualizado.rowCount,
                  });
                break;
            }
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ mensaje: "Error Actualizando" });
          });
    }
}
export default ServicioRelTurnosActualizar;