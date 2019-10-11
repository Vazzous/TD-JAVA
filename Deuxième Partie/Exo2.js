var slider = document.getElementById("monprix");
var prix = document.getElementById("prixchoisi");
var test = '';
prix.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	prix.innerHTML = this.value;	
	if (slider.value<10){
		test = 'choix1';
		document.getElementById('debug').innerHTML = test;
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "0.5";
		
	}
	else if(slider.value<50){
		test = 'choix2';
		document.getElementById('debug').innerHTML = test;		
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "1";
	}	
	else if(slider.value<79){
		test = 'choix3';
		document.getElementById('debug').innerHTML = test;		
		document.getElementById('entreprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "1";
		document.getElementById('poorkiddo').style.opacity = "0.5";
	}	
	else{
		test = 'choix4';
		document.getElementById('debug').innerHTML = test;		
		document.getElementById('entreprise').style.opacity = "1";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('poorkiddo').style.opacity = "0.5";
	}
}
