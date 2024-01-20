const express = require('express');
const cors = require('cors');
const app = express();

function logger(req, _res, next) {
	console.log('Request: ', req.method, req.url);
	next();
}

app.use(cors());
app.use(logger);

app.get('/', (_req, res) => {
	const body = 'Hello from express\nGo to /api/data to see the current time';
	res.send(body);
});

app.get('/api/data', (_req, res) => {
	const current_time = new Date().toISOString();
	res.json({ message: 'Hello from Express!', time: current_time });
});

app.listen(3000, () => console.log('Express API running on port 3000'));
