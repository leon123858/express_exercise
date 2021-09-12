/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.render('index', { title: 'Express' });
});

router.post('/', (req: express.Request, res: express.Response) => {
	setTimeout(() => {
		console.log(new Date());
		res.status(200).end('OK');
	}, 1000);
});

export default router;
