const config = require('./dbConfig'),
    sql = require('mssql')

const getCategories = async() => {
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

const getEmployees = async() => {
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
        let deliveries = pool.request().query(`exec check8 '${param}'`)
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
        let deliveries = pool.request().query(`exec check15 '${param}'`)
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

/*Вставки*/
const insertTypeOfDelivery = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Вид_доставки values(${id},'${name}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertPositions = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Должность values(${id},'${name}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertUnitsOfMeasurement  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Единицы_измерения values(${id},'${name}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertCustomTools  = async(id1,id2,count) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Заказ_товары values(${id1},${id2},${count})`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertCustomers  = async(id,f,i,o,phone,login,password,date,mail,date_reg) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check_customer_phone ${id},'${f}','${i}','${o}','${phone}','${login}','${password}','${date}','${mail}','${date_reg}'`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertOrders  = async(id,id_customer,pay,id_deliver,date,area,city,street,id_status,id_employee,price) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check_order_customer_pay_men ${id},${id_customer},'${pay}',${id_deliver},'${date}','${area}','${city}','${street}',${id_status},${id_employee},${price}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertCategories  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Категория_сладостей values(${id},'${name}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertSupplyOfGoods  = async(id1,id2,count) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check_shipmentproduct_count ${id1},${id2},${count}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertSupplies  = async(id,inn,date,price) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Поставки values(${id},'${inn}','${date}',${price})`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertSuppliers  = async(inn,name,area,city,street,phone) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Поставщики values('${inn}','${name}','${area}','${city}','${street}','${phone}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertManufacturer  = async(inn,name,area,city,street,phone) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Производитель values('${inn}','${name}','${area}','${city}','${street}','${phone}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertEmployees  = async(id,f,i,o,id_post,phone,area,city,street) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Сотрудники values(${id},'${f}','${i}','${o}',${id_post},'${phone}','${area}','${city}','${street}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertOrderStatus  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`insert into Статус_заказа values(${id},'${name}')`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const insertProducts  = async(id,name,id_unit,price,count,expiration_date,id_category,certificate,structure,inn) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`exec check_product_count ${id},'${name}',${id_unit},${price},${count},'${expiration_date}',${id_category},'${certificate}','${structure}','${inn}'`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}


/*Обновления*/
const updateTypeOfDelivery = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Вид_доставки set Наименование='${name}' where Код_вида_доставки=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updatePositions = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Должность set Наименование='${name}' where Код_должности=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateUnitsOfMeasurement  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Единицы_измерения set Наименование='${name}' where Код_единицы_измерения=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateCustomTools  = async(id1,id2,count) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Заказ_товары set Код_товара=${id2}, Количество_товара=${count} where Код_заказа=${id1}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateCustomers  = async(id,f,i,o,phone,login,password,date,mail,date_reg) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Заказчики set Фамилия='${f}', Имя='${i}', Отчество='${o}', Телефон='${phone}', Логин='${login}', Пароль='${password}', Дата_рождения='${date}', Почта='${mail}', Дата_регистрации='${date_reg}' where Код_заказчика=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateOrders  = async(id,id_customer,pay,id_deliver,date,area,city,street,id_status,id_employee,price) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Заказы set Код_заказчика=${id_customer}, Вид_оплаты='${pay}', Код_вида_доставки=${id_deliver}, Дата_заказа='${date}', Область_доставки='${area}', Город_доставки='${city}', УлицаКвДом_доставки='${street}', Код_статуса_заказа=${id_status}, Код_сотрудника=${id_employee}, Цена=${price} where Код_заказа=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateCategories  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Категория_сладостей set Наименование='${name}' where Код_категории_сладостей=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateSupplyOfGoods  = async(id1,id2,count) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Поставка_товары set Код_товара=${id2},Количество_товара=${count} where Код_поставки=${id1}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateSupplies  = async(id,inn,date,price) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Поставки set ИНН_поставщика='${inn}',Дата_поставки='${date}',Цена=${price} where Код_поставки=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateSuppliers  = async(inn,name,area,city,street,phone) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Поставщики set Название_организации='${name}',Область='${area}',Город='${city}',УлицаКвДом='${street}',Телефон='${phone}' where ИНН_поставщика='${inn}'`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateManufacturer  = async(inn,name,area,city,street,phone) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Производитель set set Название_организации='${name}',Область='${area}',Город='${city}',УлицаКвДом='${street}',Телефон='${phone}' where ИНН_производителя='${inn}'`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateEmployees  = async(id,f,i,o,id_post,phone,area,city,street) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Сотрудники set Фамилия='${f}',Имя='${i}',Отчество='${o}',Код_должности=${id_post},Телефон='${phone}',Область='${area}',Город='${city}',УлицаКвДом='${street}' where Код_сотрудника=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateOrderStatus  = async(id,name) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Статус_заказа set Наименование='${name}' where Код_статуса_заказа=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}
const updateProducts  = async(id,name,id_unit,price,count,expiration_date,id_category,certificate,structure,inn) => {
    try {
        let pool = await sql.connect(config);
        let deliveries = pool.request().query(`update Товары set Наименование='${name}', Код_единицы_измерения=${id_unit}, Цена=${price}, Количество_остатка=${count}, Срок_годности='${expiration_date}', Код_категории_сладостей=${id_category}, Номер_сертификата='${certificate}', Состав='${structure}', ИНН_производителя='${inn}' where Код_товара=${id}`)
        console.log(deliveries)
        return deliveries
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    setEmployees,
    deleteEmployeeWithID,
    getDeliveriesByDeliverer,
    getDeliverers,
    getAnal1,
    getAnal2,
    getAnal3,
    getAnal4,
    getAnal5,
    getEmployees,
    getPositions,
    getTypeOfDelivery,
    getUnitsOfMeasurement,
    getSupplies,
    getCustomTools,
    getProducts,
    getOrderStatus,
    getManufacturer,
    getSuppliers,
    getSupplyOfGoods,
    getOrders,
    getCategories,
    getCustomers,
    insertCategories,
    insertCustomTools,
    insertCustomers,
    insertEmployees,
    insertManufacturer,
    insertOrderStatus,
    insertOrders,
    insertPositions,
    insertProducts,
    insertSuppliers,
    insertSupplies,
    insertSupplyOfGoods,
    insertTypeOfDelivery,
    insertUnitsOfMeasurement,
    updateCategories,
    updateCustomTools,
    updateCustomers,
    updateEmployees,
    updateManufacturer,
    updateOrderStatus,
    updateOrders,
    updatePositions,
    updateProducts,
    updateSuppliers,
    updateSupplies,
    updateSupplyOfGoods,
    updateTypeOfDelivery,
    updateUnitsOfMeasurement,
    getLastDeliveryOfGoods,
    getCustomersLastOrder,
    getEmployeeOrders,
    getProductsOfManufacturer
}   
