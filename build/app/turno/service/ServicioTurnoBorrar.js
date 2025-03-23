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
const sql_turno_1 = require("../repository/sql_turno");
class ServicioTurnoBorrar {
    static borrar(obj, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => {
                return consulta.result(sql_turno_1.SQL_TURNOS.DELETE, [obj.cod_turno]);
            })
                .then((respuesta) => {
                if (respuesta.rowCount > 0) {
                    res.status(200).json({ Respuesta: "Turno eliminado con éxito" });
                }
                else {
                    res.status(404).json({ Respuesta: "Turno no encontrado" });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ Respuesta: "Error Elimnando" });
            });
        });
    }
}
exports.default = ServicioTurnoBorrar;
