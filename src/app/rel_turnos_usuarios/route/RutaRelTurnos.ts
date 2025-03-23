import { Router } from "express";
import controladorRelTurnosCrear from "../controller/ControladorRelTurnosCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import { datosTurnoCrear } from "../../../config/domain/ValidarTurno";
import controladorRelTurnosConsulta from "../controller/ControladorRelTurnosConsultar";
import controladorRelTurnosBorrar from "../controller/ControladorRelTurnosBorrar";
import controladorRelTurnosActualizar from "../controller/ControladorRelTurnosActualizar";

class RutaRelTurno{
    public rutaRelTurnoApi: Router;

    constructor(){
        this.rutaRelTurnoApi = Router();
        this.rutaRelTurnoApi.post("/add", controladorRelTurnosCrear.llamarGrabarRelTurnos);
        this.rutaRelTurnoApi.get("/getall", controladorRelTurnosConsulta.llamarObtenerTodos);
        this.rutaRelTurnoApi.delete("/delete", controladorRelTurnosBorrar.llamarBorrar);
        this.rutaRelTurnoApi.put("/update", controladorRelTurnosActualizar.llamarActualizarRelTurnos);
    }

}
const rutaRelTurno = new RutaRelTurno();
export default rutaRelTurno.rutaRelTurnoApi;