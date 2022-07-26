const express = require("express");
const pacienteController = require("../controllers/pacienteController");

const routes = express.Router();

routes.get("/paciente/lista", pacienteController.listarPaciente);
routes.post("/paciente/criar", pacienteController.cadastrarPaciente);

module.exports = routes;