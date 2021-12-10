var gold = require('../controllers/controller.js');
var bodyParser = require('body-parser');

module.exports= function(app){
    app.get('/start',function(request,response){
        gold.index(request,response);
    });

    app.get('/load/:id',function(request,response){
        gold.gameById(request,response);
       
    });

    app.put('/save/',function(request,response){
        console.log('save route')
        gold.Update(request,response)
       
    })


}