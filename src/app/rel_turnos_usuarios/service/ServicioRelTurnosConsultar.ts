import { SQL_RELTURNO } from "../repository/sql_relturnos";
import { Response } from "express";
import pool from "../../../config/connection/dbConnection";

class SerivicioRelTurnosConsultar {
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
          .result(SQL_RELTURNO.FIND_ALL)
          .then((misDatos) => {
            res.status(200).json(misDatos.rows);
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ respuesta: "Error SQL!" });
          });
    }
}
export default SerivicioRelTurnosConsultar;