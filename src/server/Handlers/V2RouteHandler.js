// src/server/V2RouteHandler.js
const CyberV2 = require('../../middleware/encryptions/CybersourceV2');

class V2RouteHandler {
    constructor() { }

    async handle(req, res) {
         res.json({ status: true, ...req.encryptedData, author: '@bruxo_dev77' });
    }
}

module.exports = {
    V2RouteHandler,
    CyberV2
};