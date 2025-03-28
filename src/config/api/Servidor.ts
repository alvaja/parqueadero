import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaRolApi from "../../app/rol/route/RutaRol";
import rutaAccesoApi from "../../app/accesos/route/RutaAcceso";
import rutaTurnoApi from "../../app/turno/route/RutaTurno";
import rutaRelTurnosApi from "../../app/rel_turnos_usuarios/route/RutaRelTurnos";

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.set("PORT", 3123); // Solo un set para el puerto
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({limit: "100Mb"}));
    this.app.use(express.urlencoded({extended: true}));

    this.app.use("/api/rol", rutaRolApi);
    this.app.use("/api/acceso", rutaAccesoApi);
    this.app.use("/api/turno", rutaTurnoApi); 
    this.app.use("/api/relturnos", rutaRelTurnosApi);
  }

  public arranquelo(): void{
    this.app.listen(this.app.get("PORT"), ()=>{
        console.log("Listo el backed en el puerto ", this.app.get("PORT"));
    });
  }
}

export default Servidor;
