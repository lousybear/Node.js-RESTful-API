const MongoClient = require('mongodb').MongoClient;
const CONFIG = require('../config');

const state = {
    db: null
};

module.exports = {
    connect: con => {
        if (state.db) {
            con(state.db, null)
        } else {
            MongoClient.connect(CONFIG.HOST, {
                poolSize: 5,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then((db, err) => {
                if (err) {
                    if (state.db) {
                        state.db.close();
                    }
                } else {
                    state.db = db.db(CONFIG.DBNAME)
                    con(state.db, null)
                }
            }).catch(dberr => {
                con(null, dberr);
            });
        }
    }
}