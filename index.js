
'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const users = ['12345', '54321', '678910']

const assetList = require('./stub/assets.json');

const userData = [
    {
        'userId' : '12345',
        'personalDetails' : {
            'firstName' : 'Akarsh',
            'lastName' : 'Saraff',
            'emailAddress' : 'saraffakarsh@gmail.com',
            'gender' : 'Male'
        }
    },
    {
        'userId' : '67890',
        'personalDetails' : {
            'firstName' : 'Abhilash',
            'lastName' : 'Saraff',
            'emailAddress' : 'something@gmail.com',
            'gender' : 'Male'
        }
    }
];

app.use(express.static('images'));


app.get('/user/:userId/personal-details', (req, res) => {

    /**
     * valid user id : send the data
     *  else throw error
     * */
     userData.find(items => {
        if(items.userId === req.params.userId) {
            res.status(200).json({
                status: 'success',
                data: items,

            });
        } else {
            res.send('User details not found ...');
        }
    });

});

app.get('/list', (req, res) => {
    res.send(assetList.list);
});

app.post('/', (req, res) => {
    res.send('Post service requested');
});

app.put('/user', (req, res) => {
    res.send('PUT service requested for user');
});

app.delete('/user', (req, res) => {
    res.send('DELETE service requested for user');
});

app.listen(port, () => {
    console.log(`Port running at ${port}`);
});



