$(document).ready(function() {

  /*TODO:
  - operation law.
  - decimale button.
  - gamble button.
  */
  var temp = 0;
  var nombre = [];
  //nombre.push(0.0);
  var display = [];
  var operation = [];
  //operation.push("+");
  var reponse = 0.0;
  var boolOperation = true;
  var regNombre = /[0-9]/;
  var regOperation = /[%\/\*\-\+]/;
  var regAc = /AC/;
  var regEgale = /=/;
  var regDecimale = /\./;
  $("button").click(function(btn) {

    btn = $(btn.target).text();
    //si bouton est un nombre
    if (regNombre.test(btn)) {
      temp = parseFloat(btn);

      display.push(temp);
      $("#afficheur").text(display.join(''));
      boolOperation = false;
    }
    if(regDecimale.test(btn)){
      try{
      if(display.indexOf(".") != -1)throw "Only 1 decimal my friend";
      display.push(btn);
      $("#afficheur").text(display.join(''));
      boolOperation = false;
      }catch(e){
        console.log(e);
      }

    }
    if (regOperation.test(btn)) {
      try {

        if (boolOperation) throw "erroe";
        operation.push(btn);

        nombre.push(parseFloat($("#afficheur").text()));
        if (operation.length != nombre.length) throw "very bad equation";
        $("#afficheur").text("");
        display = [];
        var string = "";
        for (var i = 0; i < nombre.length; i++) {
          string = string + " " + nombre[i] + " " + operation[i];
        }
        $("#memoire").text(string);
        boolOperation = true;
      } catch (e) {
        console.log(e);
      }
    }
    if (regAc.test(btn)) {
      boolOperation = true;
      temp = 0;
      nombre = [];
      //nombre.push(0.0);
      display = [];
      operation = [];
      //operation.push("+");
      reponse = 0.0;
      $("#afficheur").text(display.join(''));
      $("#memoire").text('');
    }
    if (regEgale.test(btn)) {
      try {

        if (operation.length != nombre.length) throw "very bad equation";
        var tempOperande = operation[0];
        nombre.push(parseFloat($("#afficheur").text()));
        for (var i = 0; i < operation.length; i++) {

          tempOperande = operation[i];
          switch (tempOperande) {
            case "+":
              reponse = nombre[i] + nombre[i + 1];
              nombre[i + 1] = reponse;

              break;
            case "-":
              reponse = nombre[i] - nombre[i + 1];
              nombre[i + 1] = reponse;
              break;
            case "*":
              reponse = nombre[i] * nombre[i + 1];
              nombre[i + 1] = reponse;
              break;
            case "/":
              try {

                if (nombre[i + 1] == 0) throw "hummmm what are you thinking";
                reponse = nombre[i] / nombre[i + 1];
                nombre[i + 1] = reponse;
                break;
              } catch (e) {
                console.log(e);

              } finally {
                $("#btnAC").trigger('click');
              }

            case "%":
              try {

                if (nombre[i + 1] == 0) throw "hummmm what are you thinking";
                reponse = nombre[i] % nombre[i + 1];
                nombre[i + 1] = reponse;
                break;
              } catch (e) {
                console.log(e);
              }

          }
        }
        boolOperation = false;
        if (isNaN(reponse)) throw "NaNaNaNaNa";
        $("#afficheur").text(reponse);
        nombre = [];
        operation = [];
      } catch (e) {
        console.log(e);
      }
    }
    if(btn == ""){
              $("#afficheur").text(Math.floor((Math.random() * 1000) + 1));
    }
  });
});