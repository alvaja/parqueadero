import pool from "../../../config/connection/dbConnection";
import { Response } from "express";
import { SQL_RELTURNO } from "../repository/sql_relturnos";
import RelTurnos from "../model/RelTurnos";

class ServicioRelTurnosCrear {
  protected static async grabarRelTurnos(obj: RelTurnos, resp: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        const { cantidad } = await consulta.one(SQL_RELTURNO.HOW_MANY, [
          obj.codUsuario,
        ]);
  
        if (Number(cantidad) > 0) {
          return { caso: 1 };
        }
  
        try {
          const objGrabado = await consulta.one(SQL_RELTURNO.ADD, [
            obj.codTurno,
            obj.codUsuario,
          ]);
          return { caso: 2, objGrabado };
        }catch(error: any){
          if (error.code === "23503") {
            const detalle = error.detail || "";
            if (detalle.includes("cod_turno")) return { caso: 3 };
            if (detalle.includes("cod_usuario")) return { caso: 4 };
            return { caso: 5 };
          }

          return { caso: 6 };
        }
      })
      .then(({ caso, objGrabado }) => {
        switch (caso) {
          case 1:
            resp.status(400).json({ mensaje: "Ya existe una relación con ese usuario." });
            break;
          case 2:
            resp.status(200).json({ mensaje: "Relación creada correctamente.", objGrabado });
            break;
          case 3:
            resp.status(400).json({ mensaje: "El turno especificado no existe. codTurno inválido." });
            break;
          case 4:
            resp.status(400).json({ mensaje: "El usuario especificado no existe. codUsuario inválido." });
            break;
          case 5:
            resp.status(400).json({ mensaje: "Violación de llave foránea." });
            break;
          case 6:
          default:
            resp.status(400).json({ mensaje: "Error SQL desconocido." });
            break;
        }
      })
      .catch((error) => {
        console.error("Error inesperado fuera del task:", error);
        resp.status(500).json({ mensaje: "Error inesperado del servidor." });
      });
  }
  
}

export default ServicioRelTurnosCrear;
