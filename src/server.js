const app = require("./app.js");
require("dotenv").config(); //va a cargar todas las variables de entorno en .env

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    //console.log('process -->', process.env);
    console.log('api escuchando el puerto: -->', PORT);
});