import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import Acceso from "../model/Acceso";
import { SQL_ACCESOS } from "../repository/sql_accesos";

class ServicioAccesoBorrar {
  protected static async borrar(obj: Acceso, res: Response): Promise<any> {
    await pool
      .task((consulta) => {
        return consulta.result(SQL_ACCESOS.DELETE, [obj.codUsuario]);
      })
      .then((respuesta) => {
        res
          .status(200)
          .json({ respuesta: "Borrado", "Filas borradas": respuesta.rowCount });
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ Respuesta: "Error Elimnando" });
      });
  }
}

export default ServicioAccesoBorrar;
