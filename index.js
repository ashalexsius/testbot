'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
source: 'webhook-echo-sample'
    });
  
    
});


restService.post('/fb', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
source: 'webhook-echo-sample'
    });
  
    
});

  
    function sendMessage(sender,text)
    {
        "greeting":[
    {
      "locale":"default",
      "text":"Hello!"
    }, {
      "locale":"en_US",
      "text":"Timeless apparel for the masses."
    }
  ] 
    }

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
