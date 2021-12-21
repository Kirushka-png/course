const config = require('./dbConfig'),
    sql = require('mssql')
const getEmployees = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Категория_сладостей")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getPositions = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Должность")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const setEmployees = async(elem) => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query(`INSERT INTO Категория_сладостей VALUES (${elem.id},'${elem.name}')`)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}
const deleteEmployeeWithID = async(id) => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query(`DELETE FROM Категория_сладостей WHERE Категория_сладостей.Код_категории_сладостей='${id}';`)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getDeliveriesByDeliverer = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check1 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}

const getDeliverers = async() => {
    try {
        let pool = await sql.connect(config);
        let deliverers = pool.request().query("SELECT Код_заказчика, Фамилия, Имя, Отчество from Заказчики")
        console.log(deliverers)
        return deliverers
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    getEmployees,
    setEmployees,
    deleteEmployeeWithID,
    getDeliveriesByDeliverer,
    getDeliverers
}
