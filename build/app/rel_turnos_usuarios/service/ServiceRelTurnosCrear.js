"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const sql_relturnos_1 = require("../repository/sql_relturnos");
class ServicioRelTurnosCrear {
    static grabarRelTurnos(obj, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const { cantidad } = yield consulta.one(sql_relturnos_1.SQL_RELTURNO.HOW_MANY, [
                    obj.codUsuario,
                ]);
                if (Number(cantidad) > 0) {
                    return { caso: 1 };
                }
                try {
                    const objGrabado = yield consulta.one(sql_relturnos_1.SQL_RELTURNO.ADD, [
                        obj.codTurno,
                        obj.codUsuario,
                    ]);
                    return { caso: 2, objGrabado };
                }
                catch (error) {
                    if (error.code === "23503") {
                        const detalle = error.detail || "";
                        if (detalle.includes("cod_turno"))
                            return { caso: 3 };
                        if (detalle.includes("cod_usuario"))
                            return { caso: 4 };
                        return { caso: 5 };
                    }
                    return { caso: 6 };
                }
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        resp.status(400).json({ mensaje: "Ya existe una relación con ese usuario." });
                        break;
                    case 2:
                        resp.status(200).json({ mensaje: "Relación creada correctamente.", objGrabado });
                        break;
                    case 3:
                        resp.status(400).json({ mensaje: "El turno especificado no existe. codTurno inválido." });
                        break;
                    case 4:
                        resp.status(400).json({ mensaje: "El usuario especificado no existe. codUsuario inválido." });
                        break;
                    case 5:
                        resp.status(400).json({ mensaje: "Violación de llave foránea." });
                        break;
                    case 6:
                    default:
                        resp.status(400).json({ mensaje: "Error SQL desconocido." });
                        break;
                }
            })
                .catch((error) => {
                console.error("Error inesperado fuera del task:", error);
                resp.status(500).json({ mensaje: "Error inesperado del servidor." });
            });
        });
    }
}
exports.default = ServicioRelTurnosCrear;
