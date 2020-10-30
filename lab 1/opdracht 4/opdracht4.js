function tafel1(){
	for(var i = 1; i <=10; i++){
		document.write(i + " x 1 = " + i + "<br>");
	}
	document.write("<br>");
}

function tafel2(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 2);
		document.write(i + " x 2 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel3(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 3);
		document.write(i + " x 3 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel4(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 4);
		document.write(i + " x 4 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel5(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 5);
		document.write(i + " x 5 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel6(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 6);
		document.write(i + " x 6 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel7(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 7);
		document.write(i + " x 7 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel8(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 8);
		document.write(i + " x 8 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel9(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 9);
		document.write(i + " x 9 = " + ans + "<br>");
	}
	document.write("<br>");
}

function tafel10(){
	for(var i = 1; i <=10; i++){
		var ans = (i * 10);
		document.write(i + " x 10 = " + ans + "<br>");
	}
	document.write("<br>");
}


var loop = true;
while (loop == true){
var vraag = prompt("Hoeveel tafels wilt u weten?(1 t/m 10)");
if(vraag == 1){
	tafel1();
	loop = false;
}

else if(vraag == 2){
	tafel1();
	tafel2();
	loop = false;
}

else if(vraag == 3){
	tafel1();
	tafel2();
	tafel3();
	loop = false;
}

else if(vraag == 4){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	loop = false;
}

else if(vraag == 5){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	loop = false;
}

else if(vraag == 6){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	tafel6();
	loop = false;
}

else if(vraag == 7){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	tafel6();
	tafel7();
	loop = false;
}

else if(vraag == 8){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	tafel6();
	tafel7();
	tafel8();
	loop = false;
}

else if(vraag == 9){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	tafel6();
	tafel7();
	tafel8();
	tafel9();
	loop = false;
}

else if(vraag == 10){
	tafel1();
	tafel2();
	tafel3();
	tafel4();
	tafel5();
	tafel6();
	tafel7();
	tafel8();
	tafel9();
	tafel10();
	loop = false;

}

else if(vraag > 10){
	alert("vul alleen een getul van 1 t/m 10 in.");
}

else if(vraag < 1){
	alert("Vul alleen een getal van 1 t/m 10 in.");
}

else{
	alert("Vul alleen een getal van 1 t/m 10 in.");
}
}