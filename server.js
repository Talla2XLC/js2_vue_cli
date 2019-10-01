const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const cors = require('cors');

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(cors({
	origin: 'http://localhost:8080',
	credentials: true
}));

app.listen(3000, () => {
	console.log('server is running');
});

app.get('/api/products', (req, res) => {
	fs.readFile('catalog.json', 'utf-8', (err, data) => {
		res.send(data);
	})
});

app.get('/api/products/:id', (req, res) => {
	fs.readFile('catalog.json', 'utf-8', (err, data) => {
		const id = req.params.id;
		const catalog = JSON.parse(data);
		const item = catalog.find((currentGood) => {
			return currentGood.id === id;
		});
		res.send(item);
	})
});

app.get('/api/cart', (req, res) => {
	fs.readFile('cart.json', 'utf-8', (err, data) => {
		res.send(data);
	})
});

app.post('/api/products/:id', (req, res) => {
	fs.readFile('catalog.json', 'utf-8', (err, data) => {
		const id = req.params.id;
		const catalog = JSON.parse(data);
		const item = catalog.find((currentGood) => {
			return currentGood.id === id;
		});
		item.count = 1;
		
		fs.readFile('cart.json', 'utf-8', (err, data) => {
			const cart = JSON.parse(data);
			cart_item = cart.find((currentGood) => {
				return currentGood.id === item.id;
			});
			if (cart_item) {
				cart_item.count++;
			} else {
				cart.push(item);
			}

			fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
				if (err) {
					res.send(JSON.stringify({
						result: 0
					}))
				} else {
					res.send(JSON.stringify(cart))
				}
			})
		})
	})
});

app.delete('/api/cart/:id', (req, res) => {
	fs.readFile('cart.json', 'utf-8', (err, data) => {
		const id = req.params.id;
		const cart = JSON.parse(data);
		const good = cart.find((currentGood) => {
			return currentGood.id === id;
		});
		const goodId = cart.indexOf(good);
		cart.splice(goodId, 1);
		fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
			if (err) {
				res.send(JSON.stringify({
					result: 0
				}))
			} else {
				res.send(JSON.stringify(cart))
			}
		})
	})
});

/*



app.delete('/removeFromCart', (req, res) => {
	fs.readFile('cart.json', 'utf-8', (err, data) => {
		const cart = JSON.parse(data);
		const good = cart.find((currentGood) => {
			return currentGood.id === req.body.id;
		});
		const goodId = cart.indexOf(good);

		cart.splice(goodId, 1);
		fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
			if (err) {
				res.send(JSON.stringify({
					result: 0
				}))
			} else {
				res.send(JSON.stringify(cart))
			}
		})
	})
});

app.post('/minusOneItem', (req, res) => {
	fs.readFile('cart.json', 'utf-8', (err, data) => {
		const cart = JSON.parse(data);
		const good = cart.find((currentGood) => {
			return currentGood.id === req.body.id;
		});

		good.qty -= 1;
		fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
			if (err) {
				res.send(JSON.stringify({
					result: 0
				}))
			} else {
				res.send(JSON.stringify(cart))
			}
		})
	})
});

app.post('/plusOneItem', (req, res) => {
	fs.readFile('cart.json', 'utf-8', (err, data) => {
		const cart = JSON.parse(data);
		const good = cart.find((currentGood) => {
			return currentGood.id === req.body.id;
		});

		good.qty += 1;
		fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
			if (err) {
				res.send(JSON.stringify({
					result: 0
				}))
			} else {
				res.send(JSON.stringify(cart))
			}
		})
	})
});

app.post('/addStat', (req, res) => {
	fs.readFile('stats.json', 'utf-8', (err, data) => {
		const stats = JSON.parse(data);
		const new_stat = req.body;

		stats.push(new_stat);
		fs.writeFile('stats.json', JSON.stringify(stats), (err) => {
			if (err) {
				res.send(JSON.stringify({
					result: 0
				}))
			} else {
				res.send(JSON.stringify({
					result: 1
				}))
			}
		})
	})
});
*/