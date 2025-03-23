import { Response } from "express";
import Turno from "../model/Turno";
import pool from "../../../config/connection/dbConnection";
import { SQL_TURNOS } from "../repository/sql_turno";

class ServicioTurnoBorrar{
    protected static async borrar(obj: Turno, res: Response): Promise<any> {
        await pool
          .task((consulta) => {
            return consulta.result(SQL_TURNOS.DELETE, [obj.cod_turno]);
          })
          .then((respuesta) => {
            if (respuesta.rowCount > 0) {
                res.status(200).json({ Respuesta: "Turno eliminado con éxito" });
            } else {
                res.status(404).json({ Respuesta: "Turno no encontrado" });
            }
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ Respuesta: "Error Elimnando" });
          });
      }

}

export default ServicioTurnoBorrar;