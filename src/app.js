const http = require('http');
const hostname = process.env.HELLO_HOSTNAME;
const port = process.env.HELLO_PORT;

function index() {
	return `
	<hmtl>
	<body>
	<h1>Welcome to the Hackweek!</h1>
	<p>This week we are checking out <a href="https://www.gitpod.io/" target=_blank rel=noopener>Gitpod</a>!</p>
	</body>
	</html>`
}

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('content-type', 'text/html');
	res.end(index());
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
})