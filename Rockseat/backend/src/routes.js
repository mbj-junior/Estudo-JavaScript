const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) =>{
    const body = req.body
    console.log(body)

    return res.json({
        event: 'Agora',
        aluno: 'Marcio'
    })
})

module.exports = routes