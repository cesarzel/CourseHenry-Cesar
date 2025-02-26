const moongose = require ('mongoose')

const URL_CONECTION = 'mongodb+srv://cesaralejandrozelaarias:d8huVL56ve13LxJf@cluster.5wkmh.mongodb.net/movies'

const dbConfig = async () => {
    await moongose.connect(URL_CONECTION)
}

module.exports = dbConfig;