const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const controller = require('./controller/index.controller');
const Success = require('./handlers/success-handler');
const config = require('./config');

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

router.get("/" + config.routeMatcher + "/test", (req, res) => {
  res.status(200).send(new Success({message: "Hi there! I'm alive and kicking"}))
})

router.get(`/${config.routeMatcher}/country-list/`, controller.getCountryMaster);
router.get(`/${config.routeMatcher}/:id`, controller.get);
router.post(`/${config.routeMatcher}/:id`, controller.post);
router.post(`/${config.routeMatcher}/register`, controller.register);

app.use("/", router)
app.listen(config.PORT, (res, err) => {
  if(err) {
    res.status(500).send(new Error(err));
  }
  console.log(`Listening at ${config.PORT}`)
}) 

module.exports = router;