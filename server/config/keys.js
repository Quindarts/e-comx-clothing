module.exports = {
    appConfig: {
        name: "e-comx-clothing",
        apiURL: "",
        serverURL: "",
        clientURL:  process.env.CLIENT_URL,
    },
    port: process.env.PORT || 3000,
    database: {
        url: process.env.BASE_URL_DB,
    },
    jwt: {
        secret: "",
        tokenLife: "",
    },
};
