import { Response } from "express";
import Turno from "../model/Turno";
import { SQL_TURNOS } from "../repository/sql_turno";
import pool from "../../../config/connection/dbConnection";

class ServicioTurnoCrear {
  protected static async grabarTurno(obj: Turno, resp: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objGrabado: any;

        const parqueaderoExiste = await consulta.one(SQL_TURNOS.HOW_MANY, [
          obj.cod_parqueadero
        ]);
        
        if (parqueaderoExiste.cantidad != 0) {
            caso = 2;
            objGrabado = await consulta.one(SQL_TURNOS.ADD, [
            obj.cod_parqueadero,
            obj.descripcion_turno,
            obj.fecha_turno,
            obj.hora_inicio_turno,
            obj.hora_fin_turno,
          ]);
          obj.setCodTurno(objGrabado.cod_turno);
        }        

        return { caso, objGrabado };//go to then
      })
      .then(({ caso, objGrabado }) => {
        switch (caso) {
          case 1:
            resp.status(400).json({ Respuesta: "No existe Parqueadero" });
            break;
          default:
            resp.status(202).json(objGrabado);
            break;
        }
      })
      .catch((miError) => {
        console.log(miError);
        resp.status(400).json({ Respuesta: "Error SQL" });
      });
  }
}

export default ServicioTurnoCrear;
