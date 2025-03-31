import pool from "../../../config/connection/dbConnection";
import Turno from "../model/Turno";
import { Response } from "express";
import { SQL_TURNOS } from "../repository/sql_turno";

class ServicioTurnoActualizar {
  protected static async actualizarTurno(obj: Turno,res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objActualizado: any;
        const turnoExiste = await consulta.one(SQL_TURNOS.FIND_BY_ID, [obj.codTurno]);
        if (turnoExiste.cantidad != 0) {
          caso = 2;
          objActualizado = await consulta.result(SQL_TURNOS.UPDATE, [
            obj.codTurno,
            obj.codParqueadero,
            obj.descripcionTurno,
            obj.fechaTurno,
            obj.horaInicioTurno,
            obj.horaInicioTurno,
          ]);
        }
        return { caso, objActualizado };
      })
      .then(({ caso, objActualizado }) => {
        switch (caso) {
          case 1:
            res.status(400).json({ respuesta: "No se encontro el turno." });
            break;
          default:
            res
              .status(200)
              .json({
                respuesta: "Actualización exitosa.",
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
export default ServicioTurnoActualizar;
