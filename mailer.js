const nodemailer = require('nodemailer');
const transportConfig = require('./transportConfig.js');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports.transporter = nodemailer.createTransport(smtpTransport(transportConfig));

module.exports.generateMessage = (recipient, assignment) => {
	const mailOptions = {
		from: 'maxuuell@gmail.com',
		to: `${recipient}`,
		subject: `You've been assigned a sibling!`,
		html: `<p>${assignment}</p>`
	};

	return mailOptions;
};
