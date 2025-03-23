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
const sql_rol_1 = require("../repository/sql_rol");
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
class ServicioRolCrear {
    static grabalRol(obj, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objGrabado;
                const roles = yield consulta.one(sql_rol_1.SQL_ROL.HOW_MANY, [obj.nombreRol]);
                if (roles.cantidad == 0) { //roles is empty
                    caso = 2;
                    objGrabado = yield consulta.one(sql_rol_1.SQL_ROL.ADD, [obj.nombreRol]);
                }
                return { caso, objGrabado }; //go to then
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        resp.status(400).json({ Respuesta: "Ya existe" });
                        break;
                    default:
                        resp.status(202).json(objGrabado);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                resp.status(400).json({ Respuesta: "Error SQL" });
            });
        });
    }
}
exports.default = ServicioRolCrear;
