const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
    origin:'*'
};

server.use(bodyParser.json())
server.use(cors(corsOptions))

server.get('/', (request, response) => {
    response.status(200).json(
        {
            running:"ok"
        }
    )
})

const port = 8000

server.listen(port, () => { 
    console.log(`Running on ${port}`)
})