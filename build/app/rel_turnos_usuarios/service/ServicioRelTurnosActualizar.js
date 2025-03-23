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
                let caso = 1;
                let objActualizado;
                const relTurnosExiste = yield consulta.one(sql_relturnos_1.SQL_RELTURNO.FIND_BY_ID, [obj.cod_turnousuario]);
                if (relTurnosExiste.cantidad != 0) {
                    caso = 2;
                    objActualizado = yield consulta.result(sql_relturnos_1.SQL_RELTURNO.UPDATE, [
                        obj.cod_turnousuario,
                        obj.cod_turno,
                        obj.cod_usuario,
                    ]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ mensaje: "No se encontro el turno." });
                        break;
                    default:
                        res
                            .status(200)
                            .json({
                            mensaje: "Actualización exitosa.",
                            detalle: objActualizado.rowCount,
                        });
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ mensaje: "Error Actualizando" });
            });
        });
    }
}
exports.default = ServicioRelTurnosActualizar;
