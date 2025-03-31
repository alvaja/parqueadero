import pool from "../../../config/connection/dbConnection";
import RelTurnos from "../model/RelTurnos";
import { SQL_RELTURNO } from "../repository/sql_relturnos";
import { Response } from "express";

class ServicioRelTurnosActualizar {
  protected static async actualizarRelTurnos(
    obj: RelTurnos,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        try {
          // Verificamos si existe el registro a actualizar
          const relTurno = await consulta.oneOrNone(SQL_RELTURNO.FIND_BY_ID, [
            obj.codTurnoUsuario,
          ]);

          if (!relTurno) {
            return { caso: 1 }; // No existe
          }

          // Ejecutamos el UPDATE
          const resultado = await consulta.result(SQL_RELTURNO.UPDATE, [
            obj.codTurnoUsuario,
            obj.codTurno,
            obj.codUsuario,
          ]);

          if (resultado.rowCount > 0) {
            return { caso: 2 };
          } else {
            return { caso: 3 }; // No se realizó cambio (valores iguales)
          }
        } catch (error: any) {
          if (error.code === "23503") {
            const detalle = error.detail || "";
            if (detalle.includes("cod_turno")) return { caso: 4 };
            if (detalle.includes("cod_usuario")) return { caso: 5 };
            return { caso: 6 };
          }

          return { caso: 7 };
        }
      })
      .then(({ caso }) => {
        switch (caso) {
          case 1:
            res.status(400).json({ mensaje: "No existe el código TurnoUsuario." });
            break;
          case 2:
            res.status(200).json({ mensaje: "Relación actualizada exitosamente." });
            break;
          case 3:
            res.status(200).json({ mensaje: "No se realizó ningún cambio porque los datos son iguales." });
            break;
          case 4:
            res.status(400).json({ mensaje: "El turno especificado no existe." });
            break;
          case 5:
            res.status(400).json({ mensaje: "El usuario especificado no existe." });
            break;
          case 6:
            res.status(400).json({ mensaje: "Violación de clave foránea." });
            break;
          case 7:
            res.status(400).json({ mensaje: "Error al intentar actualizar la relación." });
            break;
          case 8:
          default:
            res.status(500).json({ mensaje: "Error interno del servidor." });
            break;
        }
      })
      .catch((miError) => {
        console.error("Error fuera del task:", miError);
        res.status(500).json({ mensaje: "Error inesperado del servidor." });
      });
  }
}

export default ServicioRelTurnosActualizar;