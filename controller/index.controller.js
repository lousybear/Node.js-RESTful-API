const _ = require('lodash');

module.exports = {
    get: (req, res) => {
        const params = req.params;
        const query = req.query;
        console.log("get works");
    },

    post: (req, res) => {
        const params = req.params;
        const body = req.body;
        console.log("post works");
    }
}