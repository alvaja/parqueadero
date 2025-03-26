import pool from "../../../config/connection/dbConnection";
import RelTurnos from "../model/RelTurnos";
import { Response } from "express";
import { SQL_RELTURNO } from "../repository/sql_relturnos";


class ServicioRelTurnosBorrar {
    protected static async borrar(obj: RelTurnos, res: Response): Promise<any> {
        await pool
          .task((consulta) => {
            return consulta.result(SQL_RELTURNO.DELETE, [obj.codTurnoUsuario]);
          })
          .then((respuesta) => {
            if (respuesta.rowCount > 0) {
              res.status(200).json({ mensaje: "Registro eliminado" });
            } else {
              res.status(404).json({ mensaje: "Registro no encontrado" });
            }
          })
          .catch((miError) => {
            console.log(miError);
            res.status(400).json({ mensaje: "Error Elimnando" });
        });
    }
}

export default ServicioRelTurnosBorrar;