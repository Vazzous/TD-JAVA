//Exercice 1.1
var nb_1 = 10;
var nb_2 = 20;
var result1 = nb_1 + nb_2;

function Add(){
	document.getElementById('result-exo-1-1').innerHTML = result1;
}

//Exercice 1.2
var result2 = nb_1 * nb_2;

function Multiplie(){
	document.getElementById('result-exo-1-2').innerHTML = result2;
}

//Exercice 1.3
var nb_3 = 12;
var nb_4 = 5;
var result3 = nb_3 % nb_4;

function Divise(){
	document.getElementById('result-exo-1-3').innerHTML = result3;
}

//Exercice 1.4
function getSoustraction() {
	var premierNombre = document.getElementById("ex1_input1").value;
	var secondNombre = document.getElementById("ex1_input2").value;
	var result4 = premierNombre - secondNombre;
    document.getElementById('result-exo-1-4').innerHTML = result4;
}

//Exercice 1.5
function getMultiplication() {
	var troisiemeNombre = document.getElementById("ex1_input3").value;
	var quatriemeNombre = document.getElementById("ex1_input4").value;
	var result5 = troisiemeNombre * quatriemeNombre;
    document.getElementById('result-exo-1-5').innerHTML = result5;
}

//Exercice 2.1
function getDivision() {
	var nb_5 = document.getElementById("ex2_input1").value;
	var nb_6 = document.getElementById("ex2_input2").value;
	var result6 = nb_5 / nb_6;
    document.getElementById('result-exo-2-1').innerHTML = result6;
}

//Exercice 2.2
function getAddition() {
	var nb_7 = document.getElementById("ex2_input3").value;
	var nb_8 = document.getElementById("ex2_input4").value;
	var result7 = eval(nb_7 + '+' + nb_8);
	//alert(nb_7 + '+' + nb_8);
    document.getElementById('result-exo-2-2').innerHTML = result7;
}

//Exercice 3
var nb_7 = 82;
var nb_8 = 8;
var result8 = nb_7 % nb_8;

function Division() {
	document.getElementById('result-exo-3').innerHTML = result8;
}
window.onload = Division();


//Exercice 4
	var valeur = 0;

function depart(){
	document.getElementById('result-exo-4').innerHTML = valeur;
}
window.onload = depart();
//4.1
function ajoutDix() {
	valeur += 10;
	document.getElementById('result-exo-4').innerHTML = valeur;
}
//4.2
function diviseCinq(){
	valeur /= 5;
	document.getElementById('result-exo-4').innerHTML = valeur;
}
//4.3
function multiplieHuit(){
	valeur *= 8;
	document.getElementById('result-exo-4').innerHTML = valeur;
}
//4.4
function soustraitDeux(){
	 valeur -= 2;
	document.getElementById('result-exo-4').innerHTML = valeur;
}
//4.5
function combinePlusDixMoinsDeux(){
	valeur += 10;
	valeur -=2;
	document.getElementById('result-exo-4').innerHTML = valeur;
}
//4.6
function resetExo4(){
	valeur = 0;
	document.getElementById('result-exo-4').innerHTML = valeur;
}

//Exercice 5
function alea(){
	var nombreRandom = Math.floor(Math.random() * (1000 - 50) + 50);
	document.getElementById('result-exo-5').innerHTML = nombreRandom;
}
window.onload = alea();

//Exercice 6
function unparam(x){
	var calculunparam = x - 2;
	document.getElementById('result-exo-6').innerHTML = calculunparam;
}
unparam(10);
window.onload = unparam(10);

//Exercice 7
function deuxparam(x,y){
	var calculdeuxparam = x - y;
	document.getElementById('result-exo-7').innerHTML = calculdeuxparam;
}
unparam(10,5);
window.onload = deuxparam(10,5);

//Exercice 8
function troisparam(x,y,z){
	var calcultroisparam = x / y;
	var result9 = calcultroisparam % z;
	document.getElementById('result-exo-8').innerHTML = result9;
}
unparam(20,2,6);
window.onload = troisparam(20,2,6);

//Exercice 9
function convertToPound(){
	var nb_kg = document.getElementById("ex9_input1").value;
	var kgToPound = nb_kg * 2.20462;
	document.getElementById('result1-exo-9').innerHTML = kgToPound;
}
function convertToKg(){
	var nb_pounds = document.getElementById("ex9_input2").value;
	var poundToKg = nb_pounds * 0.453592;
	document.getElementById('result2-exo-9').innerHTML = poundToKg;
}

//Exercice 10 
var phrase = '';

function iterateWords(){
	var newMot = document.getElementById("ex10_input").value;
	phrase = phrase + newMot;
	document.getElementById('result-exo-10').innerHTML = phrase;
}
function resetWords(){
	phrase = '';
	document.getElementById('result-exo-10').innerHTML = phrase;
}

//Exercice 11
		// cote entre 1.05 et 177 952
var cote = Math.floor(Math.random() * (1000 - 1.05) + 1.05);

function cotePari(){
	document.getElementById('result1-exo-11').innerHTML = cote;
}
function calculPari(){
	var valeurPari = document.getElementById("ex11_input").value;
	var benef = cote * valeurPari;
	document.getElementById('result2-exo-11').innerHTML = benef;
}

//Exercice 12
function convertEnH(){
	var nb_km = document.getElementById("ex12_input1").value;
	var heure = Math.floor(nb_km / 1000);
	var min = Math.floor(((nb_km % 1000) / 1000) * 60);
	var temps = heure + 'h' + min;
	document.getElementById('result1-exo-12').innerHTML = temps;
}
function convertEnKm(){
	var nb_H = document.getElementById("ex12_input2").value;
	var distance = nb_H * 1000;
	document.getElementById('result2-exo-12').innerHTML = distance;
}

//Exercice 13 
function affiche(){
	var larg = (window.innerWidth);
	var haut = (window.innerHeight);
	var taille = larg + " de large et "+haut+" de haut";
	document.getElementById('result-exo-13').innerHTML = taille;
}
window.onload = affiche();

//Exercice 15
function multiple(){
	var tonNb = document.getElementById("ex15_input").value;
	var modTrois = tonNb % 3;
	var modSept = tonNb % 7;
	var result10 = "Votre nombre ";

	if (modTrois == 0){

		result10 += "est multiple de 3";
		document.getElementById('result-exo-15').innerHTML = result10;

	} else if (modSept == 0){

		result10 += "est multiple de 7";
		document.getElementById('result-exo-15').innerHTML = result10;

	} else{

		result10 += "n'est pas multiple de 3 ou de 7"
		document.getElementById('result-exo-15').innerHTML = result10;
	}
}

//Exercice 9 (16)
function miniJeu(){
	var nb_mj = document.getElementById("ex16_input").value;
	var nb_alea = Math.floor(Math.random() * (100 - 1) + 1);

	var result11 = "Votre nombre ";
	var result11bis = "Bravo, vous avez trouvé le bon nombre";

	alert(nb_alea);
	if (nb_mj > nb_alea){

		result11 += "est trop grand";
		document.getElementById('result-exo-16').innerHTML = result11;

	} else if (nb_mj < nb_alea){

		result11 += "est trop petit";
		document.getElementById('result-exo-16').innerHTML = result11;
	} else {

		document.getElementById('result-exo-16').innerHTML = result11bis;

	}
}

//Exercice 10 (17)
	//10.1 - Conversion de degrés en Fahrenheit
function convertEnF(){
	var nb_d = document.getElementById("ex17_input1").value;
	var fht = (nb_d * (9/5)) + 32;
	document.getElementById('result1-exo-17').innerHTML = fht;
}
	//10.2 - Conversion d'euros en Dolar
function convertEnD(){
	var nb_e = document.getElementById("ex17_input2").value;
	var dlr = nb_e * 1.11;
	document.getElementById('result2-exo-17').innerHTML = dlr;
}
	//10.3 - Conversion de livres en euros
function convertEnE(){
	var nb_l = document.getElementById("ex17_input3").value;
	var eur = nb_l * 1.13;
	document.getElementById('result3-exo-17').innerHTML = eur;
}

//Tableau 