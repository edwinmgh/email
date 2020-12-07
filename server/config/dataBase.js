const Sequelize = require("sequelize");
const usuariosModel = require("../models/usuarios");
const sequelize = new Sequelize('bdprueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const usuarios = usuariosModel(sequelize,Sequelize);
  sequelize.sync({force:false})
  .then(()=> {
      console.log("tablas sincronizadas");
  });
  
  module.exports = {usuarios}