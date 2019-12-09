app.get('/web-panel', function(req,res){
    res.render("dropdown-web-panel", {id : req.query['id'], mode : req.query['mode'] });
});