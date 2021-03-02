var http = require('http');
var url = require('url');
var fs = require('fs');
var { parse } = require('querystring');

var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	if(pathname === '/about.html'){
		fs.readFile('simpleWeb/about.html', function(err, data){
			if(!err){
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(data);
				res.end();
				console.log(pathname);
				
			}else{
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write('Error Cuy');
				res.end();
				console.log(err);
			}
			
		});
	}else if(pathname === '/galery.html'){
		fs.readFile('simpleWeb/galery.html', function(err, data){
			if(!err){				
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(data);
				res.end();
				console.log(pathname);
			}else{
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write('Error cuy');
				res.end();
				concosole.log(err);
			}
		});
	}else if(pathname === '/home.html'){
			fs.readFile('simpleWeb/home.html', function(err, data){
				if(!err){
					res.writeHead(200, {'Content-Type' : 'text/html'});
					res.write(data);
					res.end();
					console.log(pathname);
				}else{
					res.writeHead(200, {'Content-Type' : 'text/html'});
					res.write("" + err);
					res.end();
				}
			});	
		
	}else if(pathname === "/"){
		fs.readFile('simpleWeb/home.html', function(err, data){
			if(!err){
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(data);
				res.end();
				console.log(pathname);
			}else{
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(""+ err);
				res.end();
			}
				
		});
	}else if(pathname === "/form-submit"){
		fs.readFile('simpleWeb/form-submit.html', function(err, data){
			if(!err){
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(data);
				res.end();
				console.log(pathname);
			}else{
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write('' + err);
				res.end();
			}
		});
	}else if(pathname === "/uploadData"){
		if(req.method === 'POST'){
			collectRequestData(re, result => {
				console.log(result);
				res.end("This is the data ${result.textName}" );
			});
		}
	}else{
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write('something wrong dude');
		res.end();	
	}

});

server.listen(3000);

console.log("Server running at localhost 3000");
