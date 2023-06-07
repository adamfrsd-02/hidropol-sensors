module.exports = app => {
    const sensors = require("../controllers/SensorController");
    var router = require('express').Router();

    //get sensors data 
    router.get('/', sensors.findAll);

    //post sensor data
    router.post('/', sensors.create);

    //export routing
    app.use('/api/v1/sensors', router);
}