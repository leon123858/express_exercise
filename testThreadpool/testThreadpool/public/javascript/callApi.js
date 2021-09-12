for (let i = 0; i < 13; i++)
	fetch('/', {
		method: 'POST',
		headers: {
			'user-agent': 'vscode-restclient',
		},
		body: 'content-type: application/json{}',
	})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.error(err);
		});
