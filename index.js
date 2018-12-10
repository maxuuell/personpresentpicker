const { transporter, generateMessage } = require('./mailer.js');
// participants are an array of objects, such as
// [
// 	{
// 		name: "Steve",
// 		emails: ["fakeSteve@email.com"]
// 	}, {
// 		name: "Jan and Bill",
// 		emails: ["fakeJan@email.com", "fakeBill@email.com"]
//   }
// ]
const { participants } = require('./participants.js');

const getRandomNum = (length) => Math.floor(Math.random() * length)

const blackHat = (participants) => {
	const copy = participants.slice();
	const result = [];

	for (let i = 0; i < participants.length; i++) {
		let randomNum = getRandomNum(copy.length);
		while (copy[randomNum] === participants[i]) {
			randomNum = getRandomNum(copy.length);
		}

		result.push([participants[i], copy[randomNum]]);
		copy.splice(randomNum, 1);
	}

	return result;

}

const sendMail = (siblingMap) => {
	for (tuple of siblingMap) {
		for (value of tuple[0].emails) {
			transporter.sendMail(generateMessage(value, tuple[0].name, tuple[1].name), (error, info) => {
				if (error) {
		        	console.log(error);
		    	}
			});
			
		}
	}
}

sendMail(blackHat(participants));