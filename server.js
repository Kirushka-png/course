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

// Вставки
app.post('/InsertTypeOfDelivery', (req,res) => {
    dbOperation.InsertTypeOfDelivery(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/InsertPositions', (req,res) => {
    dbOperation.InsertPositions(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/InsertUnitsOfMeasurement', (req,res) => {
    dbOperation.InsertUnitsOfMeasurement(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/InsertCustomTools', (req,res) => {
    dbOperation.InsertCustomTools(req.body.id1,req.body.id2,req.body.count).then(r =>{
        res.send(r)
    })
})
app.post('/InsertCustomers', (req,res) => {
    dbOperation.InsertCustomers(req.body.id,req.body.f,req.body.i,req.body.o,req.body.phone,req.body.login,req.body.password,req.body.date,req.body.mail,req.body.date_reg).then(r =>{
        res.send(r)
    })
})
app.post('/InsertOrders', (req,res) => {
    dbOperation.InsertOrders(req.body.id,req.body.id_customer,req.body.pay,req.body.id_deliver,req.body.date,req.body.area,req.body.city,req.body.street,req.body.id_status,req.body.id_employee,req.body.price).then(r =>{
        res.send(r)
    })
})
app.post('/InsertCategories', (req,res) => {
    dbOperation.InsertCategories(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/InsertSupplyOfGoods', (req,res) => {
    dbOperation.InsertSupplyOfGoods(req.body.id1,req.body.id2,req.body.count).then(r =>{
        res.send(r)
    })
})
app.post('/InsertSupplies', (req,res) => {
    dbOperation.InsertSupplies(req.body.id,req.body.inn,req.body.date,req.body.price).then(r =>{
        res.send(r)
    })
})
app.post('/InsertSuppliers', (req,res) => {
    dbOperation.InsertSuppliers(req.body.inn,req.body.name,req.body.area,req.body.city,req.body.street,req.body.phone).then(r =>{
        res.send(r)
    })
})
app.post('/InsertManufacturer', (req,res) => {
    dbOperation.InsertManufacturer(req.body.inn,req.body.name,req.body.area,req.body.city,req.body.street,req.body.phone).then(r =>{
        res.send(r)
    })
})
app.post('/InsertEmployees', (req,res) => {
    dbOperation.InsertEmployees(req.body.id,req.body.f,req.body.i,req.body.o,req.body.id_post,req.body.phone,req.body.area,req.body.city,req.body.street).then(r =>{
        res.send(r)
    })
})
app.post('/InsertOrderStatus', (req,res) => {
    dbOperation.InsertOrderStatus(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/InsertProducts', (req,res) => {
    dbOperation.InsertProducts(req.body.id,req.body.name,req.body.id_unit,req.body.price,req.body.count,req.body.expiration_date,req.body.id_category,req.body.certificate,req.body.structure,req.body.inn).then(r =>{
        res.send(r)
    })
})
// Обновления
app.post('/UpdateTypeOfDelivery', (req,res) => {
    dbOperation.UpdateTypeOfDelivery(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/UpdatePositions', (req,res) => {
    dbOperation.UpdatePositions(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateUnitsOfMeasurement', (req,res) => {
    dbOperation.UpdateUnitsOfMeasurement(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateCustomTools', (req,res) => {
    dbOperation.UpdateCustomTools(req.body.id1,req.body.id2,req.body.count).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateCustomers', (req,res) => {
    dbOperation.UpdateCustomers(req.body.id,req.body.f,req.body.i,req.body.o,req.body.phone,req.body.login,req.body.password,req.body.date,req.body.mail,req.body.date_reg).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateOrders', (req,res) => {
    dbOperation.UpdateOrders(req.body.id,req.body.id_customer,req.body.pay,req.body.id_deliver,req.body.date,req.body.area,req.body.city,req.body.street,req.body.id_status,req.body.id_employee,req.body.price).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateCategories', (req,res) => {
    dbOperation.UpdateCategories(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateSupplyOfGoods', (req,res) => {
    dbOperation.UpdateSupplyOfGoods(req.body.id1,req.body.id2,req.body.count).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateSupplies', (req,res) => {
    dbOperation.UpdateSupplies(req.body.id,req.body.inn,req.body.date,req.body.price).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateSuppliers', (req,res) => {
    dbOperation.UpdateSuppliers(req.body.inn,req.body.name,req.body.area,req.body.city,req.body.street,req.body.phone).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateManufacturer', (req,res) => {
    dbOperation.UpdateManufacturer(req.body.inn,req.body.name,req.body.area,req.body.city,req.body.street,req.body.phone).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateEmployees', (req,res) => {
    dbOperation.UpdateEmployees(req.body.id,req.body.f,req.body.i,req.body.o,req.body.id_post,req.body.phone,req.body.area,req.body.city,req.body.street).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateOrderStatus', (req,res) => {
    dbOperation.UpdateOrderStatus(req.body.id,req.body.name).then(r =>{
        res.send(r)
    })
})
app.post('/UpdateProducts', (req,res) => {
    dbOperation.UpdateProducts(req.body.id,req.body.name,req.body.id_unit,req.body.price,req.body.count,req.body.expiration_date,req.body.id_category,req.body.certificate,req.body.structure,req.body.inn).then(r =>{
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