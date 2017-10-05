const nodemailer = require('nodemailer');
const { transportString } = require('./transportString.js');

module.exports.transporter = nodemailer.createTransport(transportString);

module.exports.generateMessage = (recipient, assignment) => {
	const mailOptions = {
		from: 'maxuuell@gmail.com',
		to: `${recipient}`,
		subject: `You've been assigned a sibling!`,
		html: `<p>${assignment}</p>`
	};

	return mailOptions;
};
