
var express = require('express'),
    bodyParser      = require('body-parser'),
	mongoDBOptions = { 
	useNewUrlParser : true
	}
	
var mongoose = require('mongoose');
var log4js = require('log4js');
	
log4js.configure({
  appenders: { phoneblog: { type: 'file', filename: 'phone-book.log' } },
  categories: { default: { appenders: ['phoneblog'], level: 'error' } }
  });
	
    
logger = log4js.getLogger();
logger.level = 'debug';

mongoose.connect('mongodb://127.0.0.1:27017/phone-book?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9', mongoDBOptions);

logger.info('Successfully connected to MongoDB::phone-book ...');

var recordsController = require('./db/records-controller')
var app = express();
app.use('/add', recordsController);
app.use('/', recordsController);
app.use(bodyParser.json());
app.use(express.static("client"));
app.use(bodyParser.urlencoded({
    extended: true
}));

function post_response(res, data) {
    if(!res.headersSent) { 
        res.write(data);
        res.flushHeaders();
    }
}

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/*app.post('/addRecord', function(req, res, next) {
    logger.info('adding record ...')
    recordsController.add_record(req, function(err, data){
        if(err) {
            logger.error('error adding record: '+err)
            err = '<html>' + err + '</html>';
            res.write(err);
            res.flushHeaders();
            res.end(err);
        }
     });
    post_response(res, "Record added successfully !")
});*/


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), "0.0.0.0", function () {
    logger.info('Express server listening on port ' + app.get('port'));
});



