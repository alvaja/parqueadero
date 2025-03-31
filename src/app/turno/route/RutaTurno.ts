import { Router } from "express";
import controladorTurnoCrear from "../controller/ControladorTurnoCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import {
  datosTurnoActualizar,
  datosTurnoBorrar,
  datosTurnoCrear,
} from "../../../config/domain/ValidarTurno";
import controladorTurnoConsulta from "../controller/ControladorTurnoConsulta";
import controladorTurnoBorrar from "../controller/ControladorTurnoBorrar";
import controladorTurnoActualizar from "../controller/ControladorTurnoActualizar";

class RutaTurno {
  public rutaTurnoApi: Router;

  constructor() {
    this.rutaTurnoApi = Router();
    this.rutaTurnoApi.get(
      "/getall",
      controladorTurnoConsulta.llamarObtenerTodos
    );
    this.rutaTurnoApi.post(
      "/add",
      datosTurnoCrear,
      validarDatos.ahora,
      controladorTurnoCrear.llamargrabarTurno
    );
    this.rutaTurnoApi.delete(
      "/delete/:codTurno",
      datosTurnoBorrar,
      validarDatos.ahora,
      controladorTurnoBorrar.llamarBorrar
    );
    this.rutaTurnoApi.put(
      "/update",
      datosTurnoActualizar,
      validarDatos.ahora,
      controladorTurnoActualizar.llamarActualizarTurno
    );
  }
}
const rutaTurno = new RutaTurno();
export default rutaTurno.rutaTurnoApi;
