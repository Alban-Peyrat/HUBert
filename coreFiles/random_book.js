$('document').ready(function(){
	
//Paramétrage et chargement du JSON
	var listeBibID = JSON.parse(bibID)
  bibIDlist = ';';
  for (var z = 0; z < listeBibID.length; z++){
		bibIDlist += listeBibID[z].biblioitemnumber + ";";
  };

 //Fonction lors du clic
$("#randomBook").click(function() {
	
//Récupération du seed
  var d = new Date();
  var n = d.getTime();
  
 //Préparation du seed pour devenir un numéro de notice
  var n = n.toString();
  var p1 = n.substring(11, 13);
  var p1 = p1 += n.substring(9, 11);
  var p1 = p1 += n.substring(7, 9);
  var p1 = parseInt(p1) + 6;
  
  //Première boucle
    for (i = 0; i < 1000; i++) {
 //Comparaison numéro de notice généré avec la liste
		if (bibIDlist.indexOf(";" + p1 + ";") > -1){
 //Correspondance numéro généré - liste
			p1 = p1.toString();
			p2 = "https://www.archires.archi.fr/fr/catalogue/" + p1;
			window.open(p2);
			i = 1111;
		}else {
			p1 = parseInt(parseInt(p1, 10)*0.99);
	    };
	};
  
  //Si la première boucle échoue
  if (i == 1000) {
	  var p1 = n.substring(11, 13);
	  var p1 = p1 += n.substring(7, 9);
      var p1 = p1 += n.substring(9, 11);
	  var p1 = parseInt(p1) + 6;
	  
    //Deuxième boucle
	  for (i = 0; i < 1000; i++) {
	 //Comparaison numéro de notice généré avec la liste
		  if (bibIDlist.indexOf( ";" + p1 + ";") > -1){
	 //Correspondance numéro généré - liste
			p1 = p1.toString();
			p2 = "https://www.archires.archi.fr/fr/catalogue/" + p1;
			window.open(p2);
			i = 1111;
	 //Pas de correspondance : modification du numéro généré
		  }else {
		  p1 = parseInt(parseInt(p1, 10)*0.99);
		  };  
	  };
  };
});
});