  import { Router } from "express";
  import controladorRolConsulta from "../controller/ControladorRolConsulta";
  import controladorRolCrear from "../controller/ControladorRolCrear";
  import { datosRolActualizar, datosRolBorrar, datosRolCrear } from "../../../config/domain/ValidarRol";
  import validarDatos from "../../../middleware/ValidarDatos";
  import controladorRolBorrar from "../controller/ControladorRolBorrar";
  import controladorRolActualizar from "../controller/ControladorRolActualizar";

  class RutaRol {
    public rutaRolApi: Router;

    constructor() {
      this.rutaRolApi = Router();
      this.rutaRolApi.get("/getall", controladorRolConsulta.llamarObtenerTodos);
      this.rutaRolApi.post(
        "/add",
        datosRolCrear,
        validarDatos.ahora,
        controladorRolCrear.llamarGrabarRol
      );
      this.rutaRolApi.delete(
        "/delete/:codRol",
        datosRolBorrar,
        validarDatos.ahora,
        controladorRolBorrar.llamarBorrar
      );
      this.rutaRolApi.put(
        "/update",
        datosRolActualizar,
        validarDatos.ahora,
        controladorRolActualizar.llamarActualizarRol,
      );
    }
  }

  const rutaRol = new RutaRol();
  export default rutaRol.rutaRolApi;
