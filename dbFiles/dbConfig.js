const config = {
    user: 'KERIL',
    password: '12345',
    server: "LAPTOP-8J2AIRNH",
    database: 'Курсовая',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: "SQLEXPRESS"
    },
    port: 1433
};

// const config = {
//     user: 'QWERTY',
//     password: 'foo',
//     server: "DESKTOP-T9387QK",
//     database: 'Курсовая',
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: false,
//         enableArithAbort: true,
//         instancename: "SQLEXPRESS01"
//     },
//     port: 1433
// };


module.exports = config