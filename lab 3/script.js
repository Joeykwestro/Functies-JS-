function drankjes(){
	var loop = true;
	while(loop == true){
		var drank = prompt("Welke bestelling wilt u toevoegen?");
		drank = drank.toLowerCase();
		if(drank == "fris"){
			var fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
		}
		else if(drank == "bier"){
			var bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
		}
		else if(drank == "wijn"){
			var wijn = prompt("Hoeveel wijn wilt u aan uw bestelling toevoegen?");
		}
		else if(drank == "stop"){
			loop = false;
		}
		else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}
	}
	document.write("Uw Bestelling:");
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
	else{
		alert("U heeft nog niet besteld.");
	}
}
drankjes();
