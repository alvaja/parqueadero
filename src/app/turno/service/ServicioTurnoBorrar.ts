import { Response } from "express";
import Turno from "../model/Turno";
import pool from "../../../config/connection/dbConnection";
import { SQL_TURNOS } from "../repository/sql_turno";

class ServicioTurnoBorrar {
  protected static async borrar(obj: Turno, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        const { count } = await consulta.one<{ count: number }>(
          SQL_TURNOS.HOW_MANY_USUARIOS,
          [obj.codTurno]
        );

        if (Number(count) > 0) {
          return { caso: 1 };
        }

        const resultado = await consulta.result(SQL_TURNOS.DELETE, [obj.codTurno]);

        return {
          caso: resultado.rowCount > 0 ? 2 : 3, 
        };
      })
      .then((respuesta) => {
        switch (respuesta.caso) {
          case 1:
            res.status(400).json({
              Respuesta: "No se puede eliminar el turno porque está siendo referenciado.",
            });
            break;

          case 2:
            res.status(200).json({ Respuesta: "Turno eliminado con éxito" });
            break;

          case 3:
          default:
            res.status(400).json({ Respuesta: "Turno no encontrado" });
            break;
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json({ Respuesta: "Error eliminando" });
      });
  }
}

export default ServicioTurnoBorrar;