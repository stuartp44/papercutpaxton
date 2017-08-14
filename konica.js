function convert(cardNumber) {
	if (cardNumber.length = 10) {
		num = cardNumber.substring(2,10);
	}
	if (cardNumber.length < 10) {
		num = cardNumber.substring(1,9);
	}
return num;
}