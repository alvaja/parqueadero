import pool from "../../../config/connection/dbConnection";
import { Response } from "express";
import { SQL_RELTURNO } from "../repository/sql_relturnos";
import RelTurnos from "../model/RelTurnos";

class ServicioRelTurnosCrear {
  protected static async grabarRelTurnos(obj: RelTurnos, resp: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        console.log(obj.codTurno, obj.codUsuario);
        const { cantidad } = await consulta.one(SQL_RELTURNO.HOW_MANY, [
          obj.codUsuario,
        ]);

        if (Number(cantidad) > 0) {
          return { caso: 1 };
        }

        const objGrabado = await consulta.one(SQL_RELTURNO.ADD, [
          obj.codTurno,
          obj.codUsuario  
        ]);

        return { caso: 2, objGrabado };
      })
      .then(({ caso, objGrabado }) => {
        if (caso === 1) {
          resp.status(400).json({ Respuesta: 'Ya existe' });
        } else {
          resp.status(201).json(objGrabado);
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.code == "23503") {
          resp.status(409).json({ Respuesta: 'No se puede agregar el turno porque viola la llave foránea.' });
        } else{
          resp.status(400).json({ Respuesta: 'Error SQL' });
        }
        
      });
  }
}


export default ServicioRelTurnosCrear;