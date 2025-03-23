import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/sql_rol";

class ServicioRolConsulta {
  protected static async obtenerTodos(res: Response): Promise<any> {
    await pool
      .result(SQL_ROL.FIND_ALL)
      .then((misDatos) => {
        console.log(misDatos  + "sss");
        res.status(200).json(misDatos.rows);
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Se totió el SQL mano" });
      });
  }
}

export default ServicioRolConsulta;
