const express = require('express');
const axios = require('axios');
const server = express();
const validator = require('../middleware/validator');

const SUPERVISORS_URL = 'https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers';
const test_data = require('./test_data.js');

server.use(express.json());

//Main route
server.get('/api', (req, res) => {
    res.send(`<h2>Server is online!</h2><br><div>Visit: <a href='https://github.com/RobertDGordon/lf-react-node'>https://github.com/RobertDGordon/lf-react-node</a> for more API info.</div>`)
});

//Managers route
server.get('/api/supervisors', async (req, res) => {
    try {
        // let response = await axios(SUPERVISORS_URL);
        let response = test_data;

        //remove numerical jurisdictions
        let filtered = response.data.filter(item => !isFinite(item.jurisdiction));

        //sort by jurisdiction, then lastName, then firstName (could be chained to above, but kept separate for readability)
        let sorted = filtered.sort((a, b) => {
            const jurisdiction = a.jurisdiction.localeCompare(b.jurisdiction);
            const lastName = a.lastName.localeCompare(b.lastName);
            const firstName = a.firstName.localeCompare(b.firstName);

            return jurisdiction || lastName || firstName
        });

        console.log(`Returning ${sorted.length} items.`);

        res.status(200).json({response: sorted});

    } catch (error) {
        console.log('Error:', error.message);
        res.status(418).json({message: error.message})
    }
});

//Post Notification route with validation middleware
server.post('/api/submit', validator, (req, res) => {

    res.status(201).json({response: "success"})
    
});

module.exports = server;