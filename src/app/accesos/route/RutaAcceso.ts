import { Router } from "express";
import controladorAccesoCrear from "../controller/ControladorAccesoCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import { datosAccesoActualizar, datosAccesoBorrar, datosAccesoCrear } from "../../../config/domain/ValidarAcceso";
import controladorAccesoConsulta from "../controller/ControladorAccesoConsulta";
import controladorAccesoBorrar from "../controller/ControladorAccesoBorrar";
import controladorAccesoActualizar from "../controller/ControladorAccesoActualizar";

class RutaAccesso {
  public rutaAccesoApi: Router;

  constructor() {
    this.rutaAccesoApi = Router();
    this.rutaAccesoApi.get("/getall", controladorAccesoConsulta.llamarObtenerTodos)
    this.rutaAccesoApi.post(
      "/add",
      datosAccesoCrear,
      validarDatos.ahora,
      controladorAccesoCrear.llamarAccesoCrear
    );
    this.rutaAccesoApi.delete("/delete/:cod_usuario", datosAccesoBorrar, validarDatos.ahora, controladorAccesoBorrar.llamarBorar);
    this.rutaAccesoApi.put("/update", datosAccesoActualizar, validarDatos.ahora, controladorAccesoActualizar.llamarActualizarAcceso);
  }
}

const rutaAcceso = new RutaAccesso();
export default rutaAcceso.rutaAccesoApi;
