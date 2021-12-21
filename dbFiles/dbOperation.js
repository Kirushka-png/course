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

const getTypeOfDelivery = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Вид_доставки")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getUnitsOfMeasurement = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Единицы_измерения")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getCustomTools = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Заказ_товары")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getCustomers = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Заказчики")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getOrders = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Заказы")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getSupplyOfGoods = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Поставка_товары")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getSupplies = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Поставки")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getSuppliers = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Поставщики")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getManufacturer = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Производитель")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getEmployees1 = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Сотрудники")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getOrderStatus = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Статус_заказа")
        console.log(emploeeys)
        return emploeeys
    }
    catch(e){
        console.log(e)
    }
}

const getProducts = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("SELECT * from Товары")
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
const getSupplierAndSupplies = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check2 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getRestOfGoods = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check3 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getLastDeliveryOfGoods = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check4 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getCustomersLastOrder = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check5 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getEmployeeOrders = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check6 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getProductsOfCategory = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check7 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getProductsOfManufacturer = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check8 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getOrdersInStatus = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check9 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getProductsOfUnitOfMeasurement = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check10 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getAnal1 = async(param,param1) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check11 ${param},${param1} `)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getAnal2 = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check12 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getAnal3 = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check13 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getAnal4 = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check14 ${param}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const getAnal5 = async(param) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check15 ${param}`)
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
    getDeliverers,
    getAnal1,
    getAnal2,
    getAnal3,
    getAnal4,
    getAnal5
}
