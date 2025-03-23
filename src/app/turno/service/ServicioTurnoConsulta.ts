import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TURNOS } from "../repository/sql_turno";

class ServicioTurnoConsulta{
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
          .result(SQL_TURNOS.FIND_ALL)
          .then((misDatos) => {
            //console.log(misDatos);
            res.status(200).json(misDatos.rows);
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ respuesta: "Se totió el SQL mano" });
          });
      }
}

export default ServicioTurnoConsulta;