var Asignatura = artifacts.require("Asignatura");
var _nombre = "BCDA";
var _curso = "2022";

module.exports = function(deployer) {
  deployer.deploy(Asignatura, _nombre, _curso);
};
