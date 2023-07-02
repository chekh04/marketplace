const express = require('express');
const bodyParser = require('body-parser');
const mongoRoutes = require('./routes/mongo-routes');
const cors = require('cors');
const app = express();
const {mongoConnect} = require('./utils/mongo-db');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Initial page')
})

app.use(mongoRoutes);

mongoConnect(() => {
    app.listen(3000, () => {
        console.log('Server listening on 3000')
    })
})

