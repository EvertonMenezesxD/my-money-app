const express = require('express')

module.exports = function(server) {

    //DEFINIR URL BASE PARA TODAS AS ROTAS
    const router = express.Router()
    server.use('/api', router)

    //ROTAS DE CICLO DE PAGAMENTO
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}