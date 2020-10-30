function drankjes(){
	var loop = true;
	while(loop == true){
		var ans = prompt("Welke bestelling wilt u toevoegen?");
		ans = ans.toLowerCase();
		if(ans == "fris"){
			var fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
		}
		else if(ans == "bier"){
			var bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
		}
		else if(ans == "wijn"){
			var wijn = prompt("Hoeveel wijn wilt u aan uw bestelling toevoegen?");
		}
		else if(ans == "snack"){
			var loop2 = true;
			while (loop2 == true){
			var snack = prompt("Hoeveel bitterballen wilt u toevoegen?(8 of 16)");
			if (snack == "8"){
				var aantal1 = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
				var kosten1 = (snack * 4);
				loop2 = false;
			}
			else if(snack == "16"){
				var aantal2 = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
				var kosten2 = (snack * 7);
				loop2 = false;
			}
			else{
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling");
			}
		}
		}
		else if(ans == "stop"){
			loop = false;
		}
		else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}
	}
	document.write("Uw Bestelling:<br><br>");
	if(fris != NaN){
		var kostenfris = (fris * 2);
		document.write(fris + " fris = " + kostenfris + ",- <br>");
	}
	if(bier != NaN){
		var kostenbier = (bier * 3);
		document.write(bier + " bier = " + kostenbier + ",- <br>");
	}
	if(wijn != NaN){
		var kostenwijn = (wijn * 2.50);
		document.write(wijn + " wijn = " + kostenwijn + ",- <br>");
	}
	if(snack != NaN){
		var kostensnack = (kosten1 + kosten2);
		document.write(aantal1 + " bitterbalschaal 8 stuks = " + kosten1 + "<br>");
		document.write(aantal2 + " bitterbalschaal 16 stuks = " + kosten2 + "<br>")
	}
	else{
		alert("U heeft nog niet besteld.");
	}
}
drankjes();

function snacks(){
	var loop2 = true;
	while (loop2 == true){

	}
}