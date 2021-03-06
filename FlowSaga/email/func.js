const fdk=require('@fnproject/fdk');
const request = require('request');


fdk.handle(function(input){

   var options = {
       uri: process.env.EMAIL_API_URL
   };

   return new Promise(function(resolve, reject) {
       request.post(options, function(err, resp, body) {
          if (!err && resp.statusCode === 200) {
             resolve(JSON.parse(body));
           } else {
             reject("email error!!"); 
           }
       })
   })


})

