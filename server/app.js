require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Twit = require('twit');

const router = require('./routes');
const app = express();
// console.log(router);
app.use(cors());

app.use('/', router);
let Twitter = new Twit({
    consumer_key:         'YpQK9nYyda42qDchQVSBUMICX',
    consumer_secret:      '23MFXSeXFntwbLmmetLOfhTNKA7M9jSJWDmmCwa1AUcM76hAGk',
    access_token:         '1267386003557437441-BBsGAvLZoTpy2odxA3nX52TXy3KG0q',
    access_token_secret:  'Nrf68kRpD24TZV8B9P5cALTbjnx3crd1lESPyEt1PpoLC',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL 
})

app.get('/users', (req, res)=> {
    let querry = req.query;
    console.log(querry);
    Twitter.get('users/search', { q: querry.q, count:parseInt(querry.count)}, function(err, data, response) {
        console.log(data)
        res.json(data);
 }) 
})

app.get('/posts', (req, res)=> {
    let querry = req.query;
    console.log(querry.userid);
    Twitter.get('statuses/user_timeline', { user_id:parseInt(querry.userid), count: querry.count }, function(err, data, response) {
        console.log(data);
        res.json(data);
 }) 
})
app.get('/hashtags', (req, res)=> {
    let querry = req.query;
    console.log(querry);
    Twitter.get('search/tweets',{q:`%23${querry.q}`, result_type:'recent', count: 4 }, function(err, data, response) {
        console.log('hii');
        console.log(data)
        res.json(data)
      })
})

const port = process.env.PORT || 3200;
app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});   