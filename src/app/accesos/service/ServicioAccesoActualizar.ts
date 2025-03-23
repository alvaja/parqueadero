import pool from "../../../config/connection/dbConnection";
import Acceso from "../model/Acceso";
import { Response } from "express";
import { SQL_ACCESOS } from "../repository/sql_accesos";

class ServicioAccesoActualizar {
  protected static async actualizarAcceso(objAcceso: Acceso, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objActualizado: any;
        const acceso = await consulta.one(SQL_ACCESOS.HOW_MANY, [
          objAcceso.codUsuario,
        ]);
        if (acceso.cantidad != 0) {
          caso = 2;
          objActualizado = await consulta.result(SQL_ACCESOS.UPDATE, [
            objAcceso.codUsuario,
            objAcceso.correoAcceso,
            objAcceso.claveAcceso,
          ]);
        }
        return { caso, objActualizado };
      })
      .then(({ caso, objActualizado }) => {
        switch (caso) {
          case 1:
            res.status(400).json({ respuesta: "No existe el usuario" });
            break;
          default:
            res
              .status(200)
              .json({
                respuesta: "Actualizado correctamente",
                detalle: objActualizado.rowCount,
              });
            break;
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Fatal error!" });
      });
  }
}

export default ServicioAccesoActualizar;
