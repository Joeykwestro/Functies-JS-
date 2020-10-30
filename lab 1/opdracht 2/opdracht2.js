function addition(){
	var ans = (10 + 12);
	document.write("10 + 12 = ");
	document.write(ans);
}



function subtraction(){
	var ans = (58 - 34);
	document.write("58 - 34 = ");
	document.write(ans);
}



function multiplication(){
	var ans = (6 * 7);
	document.write("6 x 7 = ");
	document.write(ans);
}


function division(){
	var ans = (144 / 12);
	document.write("144 / 12 = ");
	document.write(ans);
}


function incresement(){
	var num = prompt("hoeveel keer wilt u 1 bij 0 optellen?");
	document.write("0");
	for(var i = 1; i <= num; i++){
		document.write(" + 1");
		document.write();
	}
	document.write(" = ");
	document.write(num);
}


function decresement(){
	var num = prompt("hoeveel keer wilt u 1 bij 1000 aftrekken?");
	document.write("1000");
	for(var i = 1; i <= num; i++){
		document.write(" - 1");
		document.write();
	}
	document.write(" = ");
	var ans = (1000 - num);
	document.write(ans);
}

addition();
document.write("<br>");
subtraction();
document.write("<br>");
multiplication();
document.write("<br>");
division();
document.write("<br>");
incresement();
document.write("<br>");
decresement();
