var loop = true;
while(loop == true){
	var naam = prompt("Wat is de naam?");
	if (naam == "stop"){
		loop = false;
	}
	var leeftijd = prompt("Wat is de leeftijd?");
	if(naam == "stop"){
		loop = false;
	}
	if(naam != "stop"){
		document.write(naam);
		document.write(" ");
	}
	if(naam != "stop"){
		document.write(leeftijd);
		document.write("<br>");
	}
}
