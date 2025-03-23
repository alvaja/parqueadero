"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorRelTurnosCrear_1 = __importDefault(require("../controller/ControladorRelTurnosCrear"));
class RutaRelTurno {
    constructor() {
        this.rutaRelTurnoApi = (0, express_1.Router)();
        this.rutaRelTurnoApi.post("/add", ControladorRelTurnosCrear_1.default.llamarGrabarRelTurnos);
    }
}
const rutaRelTurno = new RutaRelTurno();
exports.default = rutaRelTurno.rutaRelTurnoApi;
