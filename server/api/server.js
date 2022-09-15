const express = require('express');
const axios = require('axios');
const server = express();

const SUPERVISORS_URL = 'https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers';
const test_data = require('./test_data.js');

//Main route
server.get('/api', (req, res) => {
    res.send(`<h2>Server is online!</h2><br><div>Visit: <a href='https://github.com/RobertDGordon/lf-react-node'>https://github.com/RobertDGordon/lf-react-node</a> for more API info.</div>`)
});

//Managers route
server.get('/api/supervisors', async (req, res) => {
    // let response = await axios(SUPERVISORS_URL);

    //remove numerical jurisdictions
    let filtered = test_data.data.filter(item => !isFinite(item.jurisdiction));

    console.log(filtered, filtered.length);

    res.status(200).json({response: filtered});

})


module.exports = server;