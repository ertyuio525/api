// src/server/V1RouteHandler.js
const Cybersource = require('../../middleware/encryptions/Cybersource');

class V1RouteHandler {
    constructor() { }

    async handle(req, res) {
        res.json({ status: true, ...req.encryptedData, version: req.version, author: '@bruxo_dev77' });
    }
}

module.exports = {
    V1RouteHandler,
    Cybersource
};