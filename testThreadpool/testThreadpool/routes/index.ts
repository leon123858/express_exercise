/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get(
	'/',
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		console.log('In');
		next();
	},
	(req: express.Request, res: express.Response) => {
		setTimeout(() => {
			// Disable caching for content files
			console.log(new Date());
			res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
			res.header('Pragma', 'no-cache');
			res.header('Expires', '0');
			res.render('index', { title: 'Express' });
		}, 5000);
	}
);

router.post('/', (req: express.Request, res: express.Response) => {
	setTimeout(() => {
		console.log(new Date());
		res.status(200).end('OK');
	}, 3000);
});

export default router;
