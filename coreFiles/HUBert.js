$('document').ready(function(){
//Ajoute aux listes à puce leur puce 
$('i').addClass('fas fa-angle-right');
//Affiche la liste des liens utiles lorsqu'on clique dessus et change la puce
 $("#liensUtiles").click(function(){
   $("#liensUtilesListe").toggle("slide", {direction: "up"});
   $("#liensUtiles").toggleClass("liToggled")
   $("#liensUtiles").toggleClass("liToggle")
   $("#liensUtiles > i").toggleClass("fa-angle-right");
   $("#liensUtiles > i").toggleClass("fa-angle-down");
 });
});