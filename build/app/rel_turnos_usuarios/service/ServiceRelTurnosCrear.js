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
                console.log(obj.codTurno, obj.codUsuario);
                const { cantidad } = yield consulta.one(sql_relturnos_1.SQL_RELTURNO.HOW_MANY, [
                    obj.codUsuario,
                ]);
                if (Number(cantidad) > 0) {
                    return { caso: 1 };
                }
                const objGrabado = yield consulta.one(sql_relturnos_1.SQL_RELTURNO.ADD, [
                    obj.codTurno,
                    obj.codUsuario
                ]);
                return { caso: 2, objGrabado };
            }))
                .then(({ caso, objGrabado }) => {
                if (caso === 1) {
                    resp.status(400).json({ Respuesta: 'Ya existe' });
                }
                else {
                    resp.status(201).json(objGrabado);
                }
            })
                .catch((error) => {
                console.error(error);
                if (error.code == "23503") {
                    resp.status(409).json({ Respuesta: 'No se puede agregar el turno porque viola la llave foránea.' });
                }
                else {
                    resp.status(400).json({ Respuesta: 'Error SQL' });
                }
            });
        });
    }
}
exports.default = ServicioRelTurnosCrear;
