let request = require('request');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Simple IP Checker')
readline.question('IP : ', ip => {
    request.get(`https://tools.keycdn.com/geo.json?host=${ip}`, function(err, response, body) {
	console.log(`${response && response.statusCode}\n${body}`)
    readline.close();
  });
})