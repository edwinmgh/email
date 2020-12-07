
const db = require('../config/dataBase');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

module.exports.enviaremail = async(req, res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "edwin.mghdez@gmail.com", // generated ethereal user
        pass: "**********", // generated ethereal password
        },
    });
    let mailOptions = {
        from: "edwin.mghdez@gmail.com", // sender address
        to: "winnie06032001@gmail.com", // list of receivers
        subject: "Enviado desde nodemailer", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.status(500).send(error.message)
        } else {
            console.log("Email enviado");
            res.status(200).json();
        }
    });
}


module.exports.obtenerUsuarios = async(req, res) => {
    try {
        let usuarios = await db.usuarios.findAll();
        if(usuarios){
            return res.json(usuarios);
        }else{
            return res.json({mensaje:'No existen datos'});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

 module.exports.guardarUsuarios = async(req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        await db.usuarios.create(req.body);
        return res.json({mensaje:'usuario agregado satisfactoriamente'})
    } catch (error) {
        res.status(400).json(error);
    }
}
/*module.exports.actualizarUsuarios = async(req, res) => {
    try {
        await db.usuarios.update({id: ""}, { 
        where:{
            id:null
        }
        });
        return res.json({mensaje:'usuario agregado satisfactoriamente'})
    } catch (error) {
        res.status(400).json(error);
    }
} 

module.exports.eliminarUsuarios = async(req, res) =>{
    try {
        await User.destroy({
            where: {
                id: "1"
            }
        })
    } catch (error) {
        res.status(400).json(error);
    }
}*/