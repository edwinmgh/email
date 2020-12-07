
const express = require("express");
const app = express();
const morgan = require("morgan");
require('./server/config/dataBase');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", require("./server/routes/routes"))

module.exports = app;
app.listen(5000, () => {
    console.log("Servidor iniciado en http://localhost:5000");
});