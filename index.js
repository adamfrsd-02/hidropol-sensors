const express = require('express'),
    app = express(),
    cors = require('cors'),
    db = require('./app/models'),
    port = 3001;

//cors allow all origin
const corsOptions = {
    origin: '*'
};

//db connect
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => {
        console.log("Connnected to DB !");
    }).catch(error => {
        console.log("Failed Connect to DB !");
        console.log(error.message);
    });

//middleware global
app.use(cors(corsOptions));
app.use(express.json());

//define routing
app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hidropol API: Sensors"
    });
});

require('./app/router/Routes')(app);

//start server
app.listen(port, () => console.log(`Server for Sensors start on Localhost at port ${port}`));