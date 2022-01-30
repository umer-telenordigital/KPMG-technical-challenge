var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Record = require('./record');

function add_record(req, res) {
    Record.create({
        name : req.body.name,
        address : req.body.address,
        email_address : req.body.email_addr,
        phone_number : req.body.ph_number
    });
}

// CREATES A NEW RECORD
router.post('/user', function (req, res) {
    add_record(req, res)
});

// RETURNS ALL THE RECORDS IN THE DATABASE
router.get('/', function (req, res) {
    Record.find({}, function (err, records) {
        if (err) return res.status(500).send("There was a problem finding the records.");
        res.status(200).send(records);
    });
});

module.exports = router;