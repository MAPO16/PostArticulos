const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.post('/rest/articulos',  (req, res, ) => { 

   //Body
   var Id_Articulo = req.body;
   var Nombre_Articulo = req.body;
  var Estatus = req.body;
   
   //Mensaje para mostrar en consola
   

      //conexion
   connection.query('INSERT INTO Articulos SET ?', [Id_Articulo,Nombre_Articulo,Estatus],
  (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(2498, function () {
 console.log('Node app is running on port 2498');

});