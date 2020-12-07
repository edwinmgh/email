const router = require("express").Router();
const {obtenerUsuarios, guardarUsuarios, enviaremail} = require('../controllers/usuarios.controller');

router.get("/", (req, res) => res.send("Hola mundo"));
router.get("/usuarios", obtenerUsuarios);
router.get("/enviar", enviaremail);
router.post("/usuarios", guardarUsuarios);



module.exports = router;