const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');



const app = express();

// Production
/*app.use(cors({
    origin: 'http://meuapp.com'
}));
*
*/

app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;
