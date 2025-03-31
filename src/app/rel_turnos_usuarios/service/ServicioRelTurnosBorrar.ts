import pool from "../../../config/connection/dbConnection";
import RelTurnos from "../model/RelTurnos";
import { Response } from "express";
import { SQL_RELTURNO } from "../repository/sql_relturnos";


class ServicioRelTurnosBorrar {
  protected static async borrar(obj: RelTurnos, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        const resultado = await consulta.result(SQL_RELTURNO.DELETE, [
          obj.codTurnoUsuario,
        ]);

        return {
          caso: resultado.rowCount > 0 ? 2 : 3, // 2 = eliminado, 3 = no encontrado
        };
      })
      .then((respuesta) => {
        switch (respuesta.caso) {
          case 2:
            res.status(200).json({ mensaje: "Rel Turno eliminado con éxito" });
            break;

          case 3:
          default:
            res.status(404).json({ mensaje: "Registro no encontrado" });
            break;
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json({ mensaje: "Error eliminando la relación" });
      });
  }
}

export default ServicioRelTurnosBorrar;