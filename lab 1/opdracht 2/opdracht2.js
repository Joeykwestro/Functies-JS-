function incresement() {
	var num3 = 0
	var nummer = 0
	var button1 = document.createElement("button");
	button1.innerHTML = "+1";

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button1);

	button1.addEventListener ("click", function() {
		document.write(nummer)
	});
	document.write(num3 + nummer);
}

incresement();