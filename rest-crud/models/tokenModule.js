const jwt = require('jsonwebtoken')

const secretKey = 'covidhack2020'

const generate = (data) => {
    jwt.sign({
        data: data,
    },
    secretKey, {expiresIn: '24h'}
    )
}

const check = (request, response, next) => {
    const token = request.headers['x-access-token'] || request.headers['authorization']
    if(token){
        jwt.verify(token, secretKey, (error, decoded) => {
            if(error){
                return response.status(401).json({error:'invalid token'})
            }else{
                request.decodedToken = decoded
                next()
            }
        })
    }else{
        return response.status(401).json({error:'token not found'})
    }
}

module.exports = {
    generate,
    check
}