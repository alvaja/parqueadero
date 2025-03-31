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
class ServicioRelTurnosActualizar {
    static actualizarRelTurnos(obj, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                try {
                    // Verificamos si existe el registro a actualizar
                    const relTurno = yield consulta.oneOrNone(sql_relturnos_1.SQL_RELTURNO.FIND_BY_ID, [
                        obj.codTurnoUsuario,
                    ]);
                    if (!relTurno) {
                        return { caso: 1 }; // No existe
                    }
                    // Ejecutamos el UPDATE
                    const resultado = yield consulta.result(sql_relturnos_1.SQL_RELTURNO.UPDATE, [
                        obj.codTurnoUsuario,
                        obj.codTurno,
                        obj.codUsuario,
                    ]);
                    if (resultado.rowCount > 0) {
                        return { caso: 2 };
                    }
                    else {
                        return { caso: 3 }; // No se realizó cambio (valores iguales)
                    }
                }
                catch (error) {
                    if (error.code === "23503") {
                        const detalle = error.detail || "";
                        if (detalle.includes("cod_turno"))
                            return { caso: 4 };
                        if (detalle.includes("cod_usuario"))
                            return { caso: 5 };
                        return { caso: 6 };
                    }
                    return { caso: 7 };
                }
            }))
                .then(({ caso }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ mensaje: "No existe el código TurnoUsuario." });
                        break;
                    case 2:
                        res.status(200).json({ mensaje: "Relación actualizada exitosamente." });
                        break;
                    case 3:
                        res.status(200).json({ mensaje: "No se realizó ningún cambio porque los datos son iguales." });
                        break;
                    case 4:
                        res.status(400).json({ mensaje: "El turno especificado no existe." });
                        break;
                    case 5:
                        res.status(400).json({ mensaje: "El usuario especificado no existe." });
                        break;
                    case 6:
                        res.status(400).json({ mensaje: "Violación de clave foránea." });
                        break;
                    case 7:
                        res.status(400).json({ mensaje: "Error al intentar actualizar la relación." });
                        break;
                    case 8:
                    default:
                        res.status(500).json({ mensaje: "Error interno del servidor." });
                        break;
                }
            })
                .catch((miError) => {
                console.error("Error fuera del task:", miError);
                res.status(500).json({ mensaje: "Error inesperado del servidor." });
            });
        });
    }
}
exports.default = ServicioRelTurnosActualizar;
