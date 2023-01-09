const express = require('express');
const app = express();
var cors = require('cors');
const XLSX = require('xlsx');
const xlsxFile= require ('read-excel-file/node')
const fs = require('fs');

const workbook = XLSX.readFile('/Users/machine/api/api01/test.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

var student = [];

xlsxFile('./test.xlsx').then((rows)=> {
    for (var i=1; i<rows.length; i++){
        student.push({ name:rows[i][0], age: rows[i][1]});
    }
});


app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/data',function (req, res){
    res.send(student)
})

app.listen(3000)