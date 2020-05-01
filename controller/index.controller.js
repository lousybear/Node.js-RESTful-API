const _ = require('lodash');
const db = require('../handlers/mongo-handler');
const errorHandler = require('../handlers/error-handler')
const successHandler = require('../handlers/success-handler')


module.exports = {
    get: (req, res) => {
        const params = req.params;
        const query = req.query;
    },

    post: (req, res) => {
        const params = req.params;
        const body = req.body;
    },

    getCountryMaster: (req, res) => {
        let query = {};
        let projection = {_id: 0, COUNTRY:1, CODE:1}
        if(req.query.CODE){
            query.CODE = req.query.CODE;
            projection = {_id: 0, CITIES: 1}
        }
        db.connect((dbo, dberr) => {
            if(!dberr){
                dbo.collection('COUNTRY_CITY_LIST')
                   .find(query, { projection: projection})
                   .toArray(async (err, result) => {
                       if(err){
                           res.status(500).send(new errorHandler(err))
                       } else {
                           res.send(new successHandler(result))
                       }
                   })
            } else {
                res.status(500).send(new errorHandler({ message : 'Database Connection Failed'}))
            }
        })
    },

    register: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
    }
}