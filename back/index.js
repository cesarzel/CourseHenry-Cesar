const app = require('./src/server')
const router = require('./src/routes/movies')
const dbConfig = require('./src/config/dbConfig')

const PORT = 3000;

app.use(router);

dbConfig().then(() =>{
    app.listen(PORT, ()=> {
        console.log('server conect in port  '+ PORT);
    });  
}) .catch((err) => console.log("error db", err) );


