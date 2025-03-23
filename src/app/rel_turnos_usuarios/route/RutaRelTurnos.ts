import { Router } from "express";
import controladorRelTurnosCrear from "../controller/ControladorRelTurnosCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import { datosRelTurnosActualizar, datosRelTurnosBorrar, datosRelTurnosCrear } from "../../../config/domain/ValidarRelTurnos";
import controladorRelTurnosConsulta from "../controller/ControladorRelTurnosConsultar";
import controladorRelTurnosBorrar from "../controller/ControladorRelTurnosBorrar";
import controladorRelTurnosActualizar from "../controller/ControladorRelTurnosActualizar";

class RutaRelTurno{
    public rutaRelTurnoApi: Router;

    constructor(){
        this.rutaRelTurnoApi = Router();
        this.rutaRelTurnoApi.post("/add", datosRelTurnosCrear, validarDatos.ahora,controladorRelTurnosCrear.llamarGrabarRelTurnos);
        this.rutaRelTurnoApi.get("/getall", controladorRelTurnosConsulta.llamarObtenerTodos);
        this.rutaRelTurnoApi.delete("/delete",datosRelTurnosBorrar ,controladorRelTurnosBorrar.llamarBorrar);
        this.rutaRelTurnoApi.put("/update", datosRelTurnosActualizar, validarDatos.ahora,controladorRelTurnosActualizar.llamarActualizarRelTurnos);
    }

}
const rutaRelTurno = new RutaRelTurno();
export default rutaRelTurno.rutaRelTurnoApi;