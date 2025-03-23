import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ACCESOS } from "../repository/sql_accesos";

class ServicioAccesoConsulta {
  protected static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_ACCESOS.FIND_ALL)
      .then((misDatos) => {
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error SQL!" });
      });
  }
}

export default ServicioAccesoConsulta;
