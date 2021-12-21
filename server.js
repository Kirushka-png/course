const express = require('express'),
bodyParser = require("body-parser"),
dbOperation = require('./dbFiles/dbOperation'),
cors = require('cors'),
Classes = require('./dbFiles/Classes')

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getCategories', (req,res) => {
    dbOperation.getCategories().then(r => {
        res.send(r)
    })
})

app.get('/getEmployees', (req,res) => {
    dbOperation.getEmployees().then(r => {
        res.send(r)
    })
})

app.get('/getPositions', (req,res) => {
    dbOperation.getPositions().then(r => {
        res.send(r)
    })
})

app.get('/getTypeOfDelivery', (req,res) => {
    dbOperation.getTypeOfDelivery().then(r => {
        res.send(r)
    })
})

app.get('/getUnitsOfMeasurement', (req,res) => {
    dbOperation.getUnitsOfMeasurement().then(r => {
        res.send(r)
    })
})

app.get('/getSupplies', (req,res) => {
    dbOperation.getSupplies().then(r => {
        res.send(r)
    })
})

app.get('/getCustomTools', (req,res) => {
    dbOperation.getCustomTools().then(r => {
        res.send(r)
    })
})

app.get('/getProducts', (req,res) => {
    dbOperation.getProducts().then(r => {
        res.send(r)
    })
})

app.get('/getOrderStatus', (req,res) => {
    dbOperation.getOrderStatus().then(r => {
        res.send(r)
    })
})

app.get('/getManufacturer', (req,res) => {
    dbOperation.getManufacturer().then(r => {
        res.send(r)
    })
})

app.get('/getSuppliers', (req,res) => {
    dbOperation.getSuppliers().then(r => {
        res.send(r)
    })
})

app.get('/getSupplyOfGoods', (req,res) => {
    dbOperation.getSupplyOfGoods().then(r => {
        res.send(r)
    })
})

app.get('/getOrders', (req,res) => {
    dbOperation.getOrders().then(r => {
        res.send(r)
    })
})

app.get('/getCategories', (req,res) => {
    dbOperation.getCategories().then(r => {
        res.send(r)
    })
})

app.get('/getCustomers', (req,res) => {
    dbOperation.getCustomers().then(r => {
        res.send(r)
    })
})

app.get('/getDeliverers', (req,res) => {
    dbOperation.getDeliverers().then(r => {
        res.send(r)
    })
})
app.post('/getAnal1', (req,res) => {
    dbOperation.getAnal1(req.body.id,req.body.date).then(r =>{
        res.send(r)
    })
})
app.post('/getAnal2', (req,res) => {
    dbOperation.getAnal2(req.body.id).then(r =>{
        res.send(r)
    })
})
app.post('/getAnal3', (req,res) => {
    dbOperation.getAnal3(req.body.id).then(r =>{
        res.send(r)
    })
})
app.post('/getAnal4', (req,res) => {
    dbOperation.getAnal4(req.body.id).then(r =>{
        res.send(r)
    })
})
app.post('/getAnal5', (req,res) => {
    dbOperation.getAnal5(req.body.id).then(r =>{
        res.send(r)
    })
})


app.post('/getDeliveriesByDeliverer', (req,res) => {
    dbOperation.getDeliveriesByDeliverer(req.body.param).then(r =>{
        res.send(r)
    })
})
// app.get('/quit', (req,res) => {
//     console.log('Called quit')
//     res.send({result:"Bye"})
// })

let temp = new Classes.Category(10,'Мороженное')

//dbOperation.deleteEmployeeWithID(10)

//dbOperation.setEmployees(temp)



app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))