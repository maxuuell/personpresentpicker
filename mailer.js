const nodemailer = require('nodemailer');
const { transportString } = require('./transportString.js');

module.exports.transporter = nodemailer.createTransport(transportString);

module.exports.generateMessage = (recipientEmail, recipientName, assignment) => {
	const mailOptions = {
		from: '',
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
	<p style="text-align: center; font-size: 1.3em;">As your secret sibling gift recipient for Christmas, 2018</p>
	<p style="font-size: 2em; text-align: center">🎅 Check out these gift ideas to get you started 🎅</p>
	<div style="text-align: center">
		<a href="https://www.uncommongoods.com/product/avocado-huggers-set-of-2">
			<img src="https://www.uncommongoods.com/images/items/42800/42844_1_360px.jpg" style="width: 32%">
		</a>
		<a href="https://www.etsy.com/listing/614369680/nicolas-cage-face-sequin-pillow-sequin?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_b-home_and_living-home_decor-decorative_pillows&utm_custom1=0082997c-0e85-4c71-8065-7ad90dd80da6&utm_content=go_270949115_21143305475_69017137475_aud-301856855958:pla-106556003795_m__614369680&gclid=CjwKCAiAl7PgBRBWEiwAzFhmmttuGYu62V-T5xwBhgiO2y46qZXrXD-lYj89vHi2xZRoteYLCA9NzhoCBE4QAvD_BwE#">
			<img src="https://i.etsystatic.com/17673367/r/il/257ec5/1619125741/il_570xN.1619125741_8mux.jpg" style="width: 32%">
		</a>
		<a href="https://www.etsy.com/listing/208335276/2019-pooping-pooches-dog-calendar-white?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_ts1-b-paper_and_party_supplies-paper-calendars_and_planners-other&utm_custom1=0082997c-0e85-4c71-8065-7ad90dd80da6&utm_content=go_920092749_46185764775_218701557041_aud-459688891435:pla-315469720974_m__208335276&gclid=CjwKCAiAl7PgBRBWEiwAzFhmmtmyamSERs_P5meGcE3zQASyd8cD0J_PfTa8e-0EISjcBGhty3CMIxoCUvcQAvD_BwE">
			<img src="https://i.etsystatic.com/8810350/r/il/946688/1646742399/il_570xN.1646742399_8mi1.jpg" style="width: 32%">
		</a>
		<a href="https://www.findmeagift.co.uk/gifts/tiny-hands.html">
			<img src="https://resources1.findmeagift.com/site_media/images/products/p_main/big059-tiny-hands-joke-gift.jpg" style="width: 32%">
		</a>
		<a href="https://www.urbanoutfitters.com/shop/wacky-wavy-mini-tube-guy">
			<img src="https://images.urbanoutfitters.com/is/image/UrbanOutfitters/49079114_060_b?$redesign-zoom-5x$" style="width: 32%">
		</a>
		<a href="https://www.offthewagonshop.com/collections/bigfoots-sloths/products/copy-of-grump-mens-socks">
			<img src="https://cdn.shopify.com/s/files/1/0072/1432/products/12718_1024x1024.jpg?v=1542120063" style="width: 32%">
		</a>
	</div>
	<p>I am sure you are curious how the sibling gift drawing went down, so I made the code available for anyone to see and use!  Just check out my github repository <a href="https://github.com/maxuuell/personpresentpicker">here</a>, where you can fork, and clone it yourself!</p>
</body>
</html>
`
	};

	return mailOptions;
};



