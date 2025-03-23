import { Response } from "express";
import Rol from "../model/Rol";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/sql_rol";

class ServicioRolBorrar {
  protected static async borrar(obj: Rol, res: Response): Promise<any> {
    await pool
      .task((consulta) => {
        return consulta.result(SQL_ROL.DELETE, [obj.codRol]);
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

export default ServicioRolBorrar;
