"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const RutaRol_1 = __importDefault(require("../../app/rol/route/RutaRol"));
const RutaAcceso_1 = __importDefault(require("../../app/accesos/route/RutaAcceso"));
const RutaTurno_1 = __importDefault(require("../../app/turno/route/RutaTurno"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.set("PORT", 3123); // Solo un set para el puerto
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100Mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use("/api/rol", RutaRol_1.default);
        this.app.use("/api/acceso", RutaAcceso_1.default);
        this.app.use("/api/turno", RutaTurno_1.default);
    }
    arranquelo() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Listo el backed en el puerto ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
