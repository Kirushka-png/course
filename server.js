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
    .catch(er =>{
        res.send(er)
    })
})

// Вставки
app.post('/insertTypeOfDelivery', (req,res) => {
    dbOperation.insertTypeOfDelivery(req.body.Код_вида_доставки,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertPositions', (req,res) => {
    dbOperation.insertPositions(req.body.Код_должности,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertUnitsOfMeasurement', (req,res) => {
    dbOperation.insertUnitsOfMeasurement(req.body.Код_единицы_измерения,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertCustomTools', (req,res) => {
    dbOperation.insertCustomTools(req.body.Код_заказа,req.body.Код_товара,req.body.Количество_товара).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertCustomers', (req,res) => {
    dbOperation.insertCustomers(req.body.Код_заказчика,req.body.Фамилия,req.body.Имя,req.body.Отчество,req.body.Телефон,req.body.Логин,req.body.Пароль,req.body.Дата_рождения,req.body.Почта,req.body.Дата_регистрации).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertOrders', (req,res) => {
    dbOperation.insertOrders(req.body.Код_заказа,req.body.Код_заказчика,req.body.Вид_оплаты,req.body.Код_вида_доставки,req.body.Дата_заказа,req.body.Область_доставки,req.body.Город_доставки,req.body.УлицаКвДом_доставки,req.body.Код_статуса_заказа,req.body.Код_сотрудника,req.body.Цена).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertCategories', (req,res) => {
    dbOperation.insertCategories(req.body.Код_категории_сладостей,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertSupplyOfGoods', (req,res) => {
    dbOperation.insertSupplyOfGoods(req.body.Код_поставки,req.body.Код_товара,req.body.Количество_товара).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertSupplies', (req,res) => {
    dbOperation.insertSupplies(req.body.Код_поставки,req.body.ИНН_поставщика,req.body.Дата_поставки,req.body.Цена).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertSuppliers', (req,res) => {
    dbOperation.insertSuppliers(req.body.ИНН_поставщика,req.body.Название_организации,req.body.Область,req.body.Город,req.body.УлицаКвДом,req.body.Телефон).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertManufacturer', (req,res) => {
    dbOperation.insertManufacturer(req.body.ИНН_производителя,req.body.Название_организации,req.body.Область,req.body.Город,req.body.УлицаКвДом,req.body.Телефон).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertEmployees', (req,res) => {
    dbOperation.insertEmployees(req.body.Код_сотрудника,req.body.Фамилия,req.body.Имя,req.body.Отчество,req.body.Код_должности,req.body.Телефон,req.body.Область,req.body.Город,req.body.УлицаКвДом).then(r =>{
        res.send(r)
    })    
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertOrderStatus', (req,res) => {
    dbOperation.insertOrderStatus(req.body.Код_статуса_заказа,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/insertProducts', (req,res) => {
    dbOperation.insertProducts(req.body.Код_товара,req.body.Наименование,req.body.Код_единицы_измерения,req.body.Цена,req.body.Количество_остатка,req.body.Срок_годности,req.body.Код_категории_сладостей,req.body.Номер_сертификата,req.body.Состав,req.body.ИНН_производителя).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
// Обновления
app.post('/updateTypeOfDelivery', (req,res) => {
    dbOperation.updateTypeOfDelivery(req.body.Код_вида_доставки,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updatePositions', (req,res) => {
    dbOperation.updatePositions(req.body.Код_должности,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateUnitsOfMeasurement', (req,res) => {
    dbOperation.updateUnitsOfMeasurement(req.body.Код_единицы_измерения,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateCustomTools', (req,res) => {
    dbOperation.updateCustomTools(req.body.Код_заказа,req.body.Код_товара,req.body.Количество_товара).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateCustomers', (req,res) => {
    dbOperation.updateCustomers(req.body.Код_заказчика,req.body.Фамилия,req.body.Имя,req.body.Отчество,req.body.Телефон,req.body.Логин,req.body.Пароль,req.body.Дата_рождения,req.body.Почта,req.body.Дата_регистрации).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateOrders', (req,res) => {
    dbOperation.updateOrders(req.body.Код_заказа,req.body.Код_заказчика,req.body.Вид_оплаты,req.body.Код_вида_доставки,req.body.Дата_заказа,req.body.Область_доставки,req.body.Город_доставки,req.body.УлицаКвДом_доставки,req.body.Код_статуса_заказа,req.body.Код_сотрудника,req.body.Цена).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateCategories', (req,res) => {
    dbOperation.updateCategories(req.body.Код_категории_сладостей,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateSupplyOfGoods', (req,res) => {
    dbOperation.updateSupplyOfGoods(req.body.Код_поставки,req.body.Код_товара,req.body.Количество_товара).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateSupplies', (req,res) => {
    dbOperation.updateSupplies(req.body.Код_поставки,req.body.ИНН_поставщика,req.body.Дата_поставки,req.body.Цена).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateSuppliers', (req,res) => {
    dbOperation.updateSuppliers(req.body.ИНН_поставщика,req.body.Название_организации,req.body.Область,req.body.Город,req.body.УлицаКвДом,req.body.Телефон).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateManufacturer', (req,res) => {
    dbOperation.updateManufacturer(req.body.ИНН_производителя,req.body.Название_организации,req.body.Область,req.body.Город,req.body.УлицаКвДом,req.body.Телефон).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateEmployees', (req,res) => {
    dbOperation.updateEmployees(req.body.Код_сотрудника,req.body.Фамилия,req.body.Имя,req.body.Отчество,req.body.Код_должности,req.body.Телефон,req.body.Область,req.body.Город,req.body.УлицаКвДом).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateOrderStatus', (req,res) => {
    dbOperation.updateOrderStatus(req.body.Код_статуса_заказа,req.body.Наименование).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
    })
})
app.post('/updateProducts', (req,res) => {
    dbOperation.updateProducts(req.body.Код_товара,req.body.Наименование,req.body.Код_единицы_измерения,req.body.Цена,req.body.Количество_остатка,req.body.Срок_годности,req.body.Код_категории_сладостей,req.body.Номер_сертификата,req.body.Состав,req.body.ИНН_производителя).then(r =>{
        res.send(r)
    })
    .catch(er =>{
        res.send(er)
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