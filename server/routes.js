require('dotenv').config();
const express = require('express');
const router = express();
const Twit = require('twit');

let Twitter = new Twit({
    consumer_key:         'YpQK9nYyda42qDchQVSBUMICX',
    consumer_secret:      '23MFXSeXFntwbLmmetLOfhTNKA7M9jSJWDmmCwa1AUcM76hAGk',
    access_token:         '1267386003557437441-BBsGAvLZoTpy2odxA3nX52TXy3KG0q',
    access_token_secret:  'Nrf68kRpD24TZV8B9P5cALTbjnx3crd1lESPyEt1PpoLC',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,
})

router.get('users', (req, res)=> {
    Twitter.get('users/search', { q: 'Narendra Modi', count: 4 }, function(err, data, response) {
        console.log(data)
        res.json(data);
 })
})
module.exports = router;

