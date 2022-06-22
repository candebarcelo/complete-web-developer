import 'http';

const server = http.createServer((request, response) => {
    console.log('hi')
})

server.listen(3000); // port number. whenever u go to that port on a browser, it'll run the script.