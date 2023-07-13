const db = require("../models");
const jwt = require("jsonwebtoken");
const Sensor = db.sensors;

module.exports = {
    create: async (req, res) => {
        try {
            if (!req.headers.authorization) {
                return res.status(500).json({
                    message: "Authorization key not defined!"
                });
            }

            const key = req.headers.authorization.replace("Bearer ", "");
            const verif = jwt.verify(key, 'sensor-key');

            // console.log(verif);

            const insertData = await Sensor.insertMany(req.body);

            return res.status(200).json({
                message: "succesfully insert sensors data!",
                data: insertData
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    findAll: async (req, res) => {
        try {
            const data = await Sensor.find();

            return res.status(200).json({
                message: "succesfully get all sensors data!",
                data: data.length < 1 ? 'no sensor logs found!' : data
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    },

    destroyAll: async (req, res) => {
        try {
            const query = await Sensor.deleteMany();

            return res.status(200).json({
                message: "succesfully get all sensors data!",
                data: query
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }


}