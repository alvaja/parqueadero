import { Router } from "express";
import controladorRelTurnosCrear from "../controller/ControladorRelTurnosCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import { datosTurnoCrear } from "../../../config/domain/ValidarTurno";

class RutaRelTurno{
    public rutaRelTurnoApi: Router;

    constructor(){
        this.rutaRelTurnoApi = Router();
        this.rutaRelTurnoApi.post("/add", controladorRelTurnosCrear.llamarGrabarRelTurnos);
    }

}
const rutaRelTurno = new RutaRelTurno();
export default rutaRelTurno.rutaRelTurnoApi;