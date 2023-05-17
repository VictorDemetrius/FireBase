const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine" , "handlebars")

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

app.get("/", function(req,res){
    res.render("primeira_pagina")
})

app.get("/consulta", function(req,res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " +erro)
    })
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        estado: req.body.estado,
        cidade: req.body.cidade
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao cadastrar: "+erro)
    })
    
})

app.get("/excluir/:id", function(req,res){
    post.destroy({
        where: {'id': req.params.id},
        force: true
      }).then(function(){
        res.redirect("/consulta")
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " +erro)
    })
})


app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
