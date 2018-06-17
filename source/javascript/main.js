app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});