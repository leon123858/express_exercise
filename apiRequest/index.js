//mail
const fetch = require('node-fetch');
const schedule = require('node-schedule');
const dotenv = require('dotenv').config();

for (let i = 0; i < 50; i++) {
	console.log('start!');
	fetch('http://127.0.0.1:1337/', { method: 'GET' }).then((res) => {
		if (res.status == 200) {
			const time = new Date();
			console.log('success ' + i + ' : ' + time);
		} else {
			const time = new Date();
			console.log('error : ' + time);
		}
	});
}

// const { dayOfWeek = 3, hour = 12, minute = 0, videoURL, mailURL } = process.env;

// console.log('start schedule');

// // 定义规则
// let rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = parseInt(dayOfWeek);
// rule.hour = parseInt(hour);
// rule.minute = parseInt(minute);
// rule.second = 0;
// //rule.second = [0, 1, 2, 3, 10, 20, 30, 40, 50, 51, 52, 53];
// // 启动任务
// let job = schedule.scheduleJob(rule, () => {
// 	console.log(new Date());
// 	try {
// 		fetch(videoURL).then((res) => {
// 			if (res.status == 200) {
// 				console.log('video: ' + res.status);
// 				fetch(mailURL).then((r) => {
// 					if (r.status == 200) {
// 						console.log('main: ' + r.status);
// 					} else {
// 						console.log('Wrong:' + r.status);
// 					}
// 				});
// 			} else {
// 				console.log('Wrong:' + res.status);
// 			}
// 		});
// 	} catch (err) {
// 		console.log('connect err');
// 	}
// });
