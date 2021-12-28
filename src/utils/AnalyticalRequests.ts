export const anReq = [
    {
        mainData: "Код_заказчика",
        params: "number",
        link: "/getAnal1",
        description: "Просрочиваемые товары в течении x дней"
    },
    {
        mainData: "Код_заказчика",
        params: false,
        link: "/getAnal2",
        description: "Сумма покупок по месяцам"
    },
    {
        mainData: "Код_товара",
        params: false,
        link: "/getAnal3",
        description: "Сумма продаж по месяцам"
    },
    {
        mainData: "Код_товара",
        params: false,
        link: "/getAnal4",
        description: "Сумма поставок по месяцам"
    },
    {
        mainData: "Название_организации",
        params: false,
        link: "/getAnal5",
        description: "Заказчики и их товары"
    },
    {
        mainData: "Код_заказчика",
        params: false,
        link: "/getDeliveriesByDeliverer",
        description: "Заказы"
    },
    {
        mainData: "Код_товара",
        params: false,
        link: "/getLastDeliveryOfGoods",
        description: "Последняя поставка"
    },
    {
        mainData: "Код_заказчика",
        params: false,
        link: "/getCustomersLastOrder",
        description: "Последний заказ"
    },
    {
        mainData: "Код_сотрудника",
        params: false,
        link: "/getEmployeeOrders",
        description: "Количество заказов"
    },
    {
        mainData: "ИНН_производителя",
        params: false,
        link: "/getProductsOfManufacturer",
        description: "Товары"
    }
]
export default anReq