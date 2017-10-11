const nodemailer = require('nodemailer');
const { transportString } = require('./transportString.js');

module.exports.transporter = nodemailer.createTransport(transportString);

module.exports.generateMessage = (recipientEmail, recipientName, assignment) => {
	const mailOptions = {
		from: 'maxuuell@gmail.com',
		to: `${recipientEmail}`,
		subject: `🎉 🎁 Your sibling drawing is here! 🎁 🎉`,
		html: `<!DOCTYPE html>
<html>
<head>
	<title>All the presents!!</title>
</head>
<meta charset='utf-8'>
<body>
	<h1 style="text-align: center; font-size: 3em; margin: 0 0 10px 0;">${recipientName}!</h1>
	<p style="text-align: center; font-size: 1.3em; margin: 0 0 10px 0;">You drew</p>
	<h1 style="text-align: center; font-size: 3em; margin: 0 0 10px 0;">${assignment}</h1>
	<p style="text-align: center; font-size: 1.3em;">As your secret sibling gift recipient for Christmas, 2017</p>
	<p style="font-size: 2em; text-align: center">🎅 Check out these gift ideas to get you started 🎅</p>
	<div style="text-align: center">
		<a href="https://www.uncommongoods.com/product/yoga-joes">
			<img src="https://www.uncommongoods.com/images/items/43200/43212_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.uncommongoods.com/product/taco-dreams-mobile">
			<img src="https://www.uncommongoods.com/images/items/42400/42444_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.uncommongoods.com/product/tear-free-onion-goggles">
			<img src="https://www.uncommongoods.com/images/items/43100/43142_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.uncommongoods.com/product/plush-organs">
			<img src="https://www.uncommongoods.com/images/items/21300/21337_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.uncommongoods.com/product/my-cinema-lightbox-vintage-edition">
			<img src="https://www.uncommongoods.com/images/items/43900/43953_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.uncommongoods.com/product/decision-paperweight">
			<img src="https://www.uncommongoods.com/images/items/12900/12965_1_360px.jpg" style="width: 32%">
		</a>
	</div>
	<p>I am sure you are curious how the sibling gift drawing went down, so I made the code available for anyone to see and use!  Just check out my github repository <a href="https://github.com/maxuuell/personpresentpicker">here</a>, where you can fork, and clone it yourself!</p>
</body>
</html>
`
	};

	return mailOptions;
};



