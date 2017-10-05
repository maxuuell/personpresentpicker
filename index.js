const { transporter, generateMessage } = require('./mailer.js');

const participants = [
	{
		name: "Jeremy and Kendalyn",
		email: "email@email.com"
	}, {
		name: "Chandler Scott",
		email: "email@email.com"
	}, {
		name: "Taylor Scott",
		email: "email@email.com"
	}, {
		name: "Jessica and Adam",
		email: "email@email.com"
	}, {
		name: "Madison Scott",
		email: "email@email.com"
	}, {
		name: "Kimby and Maxwell",
		email: "email@email.com"
	}
]

const blackHat = (participants) => {
	console.log(participants);
}

blackHat("Hello World");

transporter.sendMail(generateMessage("maxuuell@gmail.com", "kimbo"), (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
