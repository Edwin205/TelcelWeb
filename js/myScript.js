  

  var photoMB;
  var songMB;
  var videoMb; 
  var internetMb;
  var aplicationMb;
  var emailMb; 
  var documentsMb;

  var photoMB1=0;
  var songMB1=0;
  var videoMb1=0; 
  var internetMb1=0;
  var aplicationMb1=0;
  var emailMb1=0; 
  var documentsMb1=0;

  var photoMB2=0;
  var songMB2=0;
  var videoMb2=0; 
  var internetMb2=0;
  var aplicationMb2=0;
  var emailMb2=0; 
  var documentsMb2=0;

  var photoMB3=0;
  var songMB3=0;
  var videoMb3=0; 
  var internetMb3=0;
  var aplicationMb3=0;
  var emailMb3=0; 
  var documentsMb3=0;

  var photoMB4=0;
  var songMB4=0;
  var videoMb4=0; 
  var internetMb4=0;
  var aplicationMb4=0;
  var emailMb4=0; 
  var documentsMb4=0;

  var photoMB5=0;
  var songMB5=0;
  var videoMb5=0; 
  var internetMb5=0;
  var aplicationMb5=0;
  var emailMb5=0; 
  var documentsMb5=0;




var totalMBValue0;
var totalMBValue1;
var totalMBValue2;
var totalMBValue3;
var totalMBValue4;
var totalMBValue5;

var valorMultiFoto = .50;
var valorMultiFoto1 = .50;
var valorMultiFoto2 = .50;
var valorMultiFoto3 = .50;
var valorMultiFoto4 = .50;
var valorMultiFoto5 = .50;

var valorMultiVideo = 25;
var valorMultiVideo1 = 25;
var valorMultiVideo2 = 25;
var valorMultiVideo3 = 25;
var valorMultiVideo4 = 25;
var valorMultiVideo5 = 25;

var valorMultiCancion = 7;
var valorMultiCancion1 = 7;
var valorMultiCancion2 = 7;
var valorMultiCancion3 = 7;
var valorMultiCancion4 = 7;
var valorMultiCancion5 = 7;

var valorMultiEmail = 0.05;
var valorMultiEmail1 = 0.05;
var valorMultiEmail2 = 0.05;
var valorMultiEmail3 = 0.05;
var valorMultiEmail4 = 0.05;
var valorMultiEmail5 = 0.05;

var valorMultiDocuments = 3;
var valorMultiDocuments1 = 3;
var valorMultiDocuments2 = 3;
var valorMultiDocuments3 = 3;
var valorMultiDocuments4 = 3;
var valorMultiDocuments5 = 3;

var valorMultiAplication = 300;
var valorMultiAplication1 = 300;
var valorMultiAplication2 = 300;
var valorMultiAplication3 = 300;
var valorMultiAplication4 = 300;
var valorMultiAplication5 = 300;

var valorMultiInternet = 1.45;
var valorMultiInternet1 = 1.45;
var valorMultiInternet2 = 1.45;
var valorMultiInternet3 = 1.45;
var valorMultiInternet4 = 1.45;
var valorMultiInternet5 = 1.45;
var usuarioLength =1;



function moveBar(){
    totalMBValue0 = (photoMB + songMB + videoMb + internetMb + aplicationMb + emailMb + documentsMb)*30;
    totalMBValue1 = (photoMB1 + songMB1 + videoMb1 + internetMb1 + aplicationMb1 + emailMb1 + documentsMb1)*30;
    totalMBValue2 = (photoMB2 + songMB2 + videoMb2 + internetMb2 + aplicationMb2 + emailMb2 + documentsMb2)*30;
    totalMBValue3 = (photoMB3 + songMB3 + videoMb3 + internetMb3 + aplicationMb3 + emailMb3 + documentsMb3)*30;
    totalMBValue4 = (photoMB4 + songMB4 + videoMb4 + internetMb4 + aplicationMb4 + emailMb4 + documentsMb4)*30;
    totalMBValue5 = (photoMB5 + songMB5 + videoMb5 + internetMb5 + aplicationMb5 + emailMb5 + documentsMb5)*30;
    var totalUserValue = (totalMBValue0 + totalMBValue1 + totalMBValue2 + totalMBValue3 + totalMBValue4 + totalMBValue5);
    var totalMB = 20000;
    var porcentBar = ( totalUserValue * 100) / totalMB;
    document.getElementById("total-price-bar").style.width = porcentBar + "%";
    

    document.querySelector('#pruebaValor0').innerHTML = Math.round(totalMBValue0)+" MB/mo";

 

    if(totalUserValue<=20001)
    document.querySelector('.cantidadTotal').innerHTML = Math.round(totalUserValue)+" MB/mo";
    
    else 
    document.querySelector('.cantidadTotal').innerHTML = "20000 MB/mo";

  }



  function totalmb1(){
    document.querySelector('#pruebaValor1').innerHTML = Math.round(totalMBValue1)+" MB/mo";
  }

   function totalmb2(){
    document.querySelector('#pruebaValor2').innerHTML = Math.round(totalMBValue2)+" MB/mo";
  }

   function totalmb3(){
    document.querySelector('#pruebaValor3').innerHTML = Math.round(totalMBValue3)+" MB/mo";
  }

   function totalmb4(){
    document.querySelector('#pruebaValor4').innerHTML = Math.round(totalMBValue4)+" MB/mo";
  }

   function totalmb5(){
    document.querySelector('#pruebaValor5').innerHTML = Math.round(totalMBValue5)+" MB/mo";
  }
   


$(document).ready(function(){


  document.querySelector('#outPutSongs0').innerHTML = "1" +" Canciones";


$( "#xDiaFoto0" ).prop( "checked", true );
$( "#xDiaCancion0" ).prop( "checked", true );
$( "#xDiaAplication0" ).prop( "checked", true );
$( "#xDiaDocuments0" ).prop( "checked", true );
$( "#xDiaEmail0" ).prop( "checked", true );
$( "#xDiaInternet0" ).prop( "checked", true );

   $('#xDiaFoto0').click(function(){
    valorMultiFoto = .5;
    valorMultiVideo = 25;
    photoMB = $('#photo-stepper0').val() * valorMultiFoto;
    videoMb = $('#video-stepper0').val() * valorMultiVideo;
    moveBar();
    
   });

    $('#xSemanaFoto0').click(function(){
      valorMultiFoto = .07;
      valorMultiVideo = 3.34;
     photoMB = $('#photo-stepper0').val() * valorMultiFoto;
     videoMb = $('#video-stepper0').val() * valorMultiVideo;
     moveBar();
   
   });

     $('#xMesFoto0').click(function(){
      valorMultiFoto = .0167;
      valorMultiVideo = .8334;
      photoMB = $('#photo-stepper0').val() * valorMultiFoto;
      videoMb = $('#video-stepper0').val() * valorMultiVideo;
      moveBar();
   });

    

    $('#xDiaFoto1').click(function(){
    valorMultiFoto1 = .5;
    valorMultiVideo1 = 25;
    photoMB1 = $('#photo-stepper1').val() * valorMultiFoto1;
    videoMb1 = $('#video-stepper1').val() * valorMultiVideo1;
    moveBar();
    totalmb1();
    
   });

    $('#xSemanaFoto1').click(function(){
      valorMultiFoto1 = .07;
      valorMultiVideo1 = 3.34;
     photoMB1 = $('#photo-stepper1').val() * valorMultiFoto1;
     videoMb1 = $('#video-stepper1').val() * valorMultiVideo1;
     moveBar();
      totalmb1();
   
   });

     $('#xMesFoto1').click(function(){
      valorMultiFoto1 = .0167;
      valorMultiVideo1 = .8334;
      photoMB1 = $('#photo-stepper1').val() * valorMultiFoto1;
      videoMb1 = $('#video-stepper1').val() * valorMultiVideo1;
      moveBar();
      totalmb1();
   });

    
    $('#xDiaCancion0').click(function(){
    valorMultiCancion = 7 ;  
    songMB = $( "#song-slide0" ).slider("value")  *  valorMultiCancion ;
    moveBar();
   });

    $('#xSemanaCancion0').click(function(){
    valorMultiCancion = .93333333333;  
      songMB = $( "#song-slide0" ).slider("value")  *  valorMultiCancion ;
      moveBar();
   });

    $('#xMesCancion0').click(function(){
    valorMultiCancion = .2334 ;  
      songMB = $( "#song-slide0" ).slider("value")  * valorMultiCancion ;
      moveBar();
   });

     $('#xDiaCancion1').click(function(){
    valorMultiCancion1 = 7 ;  
    songMB1 = $( "#song-slide1" ).slider("value")  *  valorMultiCancion1 ;
    moveBar();
    totalmb1();
   });

    $('#xSemanaCancion1').click(function(){
    valorMultiCancion1 = .93333333333;  
      songMB1 = $( "#song-slide1" ).slider("value")  *  valorMultiCancion1 ;
      moveBar();
      totalmb1();
   });

    $('#xMesCancion1').click(function(){
    valorMultiCancion1 = .2334 ;  
      songMB1 = $( "#song-slide1" ).slider("value")  * valorMultiCancion1 ;
      moveBar();
      totalmb1();
   });


     $('#xDiaAplication0').click(function(){
    valorMultiAplication = 300 ;  
    aplicationMb = $( "#aplication-slide0" ).slider("value")  *  valorMultiAplication ;
    moveBar();
   });

    $('#xSemanaAplication0').click(function(){
      valorMultiAplication = 40;  
      aplicationMb = $( "#aplication-slide0" ).slider("value")  *  valorMultiAplication ;
      moveBar();
   });

    $('#xMesAplication0').click(function(){
    valorMultiAplication = 10;  
      aplicationMb = $( "#aplication-slide0" ).slider("value")  * valorMultiAplication ;
      moveBar();
   });

     $('#xDiaAplication1').click(function(){
    valorMultiAplication1 = 300 ;  
    aplicationMb1 = $( "#aplication-slide1" ).slider("value")  *  valorMultiAplication1 ;
    moveBar();
    totalmb1();
   });

    $('#xSemanaAplication1').click(function(){
      valorMultiAplication1 = 40;  
      aplicationMb1 = $( "#aplication-slide1" ).slider("value")  *  valorMultiAplication1 ;
      moveBar();
      totalmb1();
   });

    $('#xMesAplication1').click(function(){
    valorMultiAplication1 = 10;  
      aplicationMb1 = $( "#aplication-slide1" ).slider("value")  * valorMultiAplication1 ;
      moveBar();
      totalmb1();
   });


    $('#xDiaDocuments0').click(function(){
    valorMultiDocuments = 3 ;  
    documentsMb = $( "#documents-slide0" ).slider("value")  *  valorMultiDocuments ;
    moveBar();
   });

    $('#xSemanaDocuments0').click(function(){
      valorMultiDocuments = 0.4;  
      documentsMb = $( "#documents-slide0" ).slider("value")  *  valorMultiDocuments ;
      moveBar();
   });

    $('#xMesDocuments0').click(function(){
    valorMultiDocuments = 0.1;  
      documentsMb = $( "#documents-slide0" ).slider("value")  * valorMultiDocuments ;
      moveBar();
   });

     $('#xDiaDocuments1').click(function(){
    valorMultiDocuments1 = 3 ;  
    documentsMb1 = $( "#documents-slide1" ).slider("value")  *  valorMultiDocuments1 ;
    moveBar();
    totalmb1();
   });

    $('#xSemanaDocuments1').click(function(){
      valorMultiDocuments1 = 0.4;  
      documentsMb1 = $( "#documents-slide1" ).slider("value")  *  valorMultiDocuments1;
      moveBar();
      totalmb1();
   });

    $('#xMesDocuments1').click(function(){
    valorMultiDocuments1 = 0.1;  
      documentsMb1 = $( "#documents-slide1" ).slider("value")  * valorMultiDocuments1 ;
      moveBar();
      totalmb1();
   });

    $('#xDiaEmail0').click(function(){
    valorMultiEmail = 0.05;  
    emailMb = $( "#email-slide0" ).slider("value")  *  valorMultiEmail ;
    moveBar();
   });

    $('#xSemanaEmail0').click(function(){
      valorMultiEmail = 0.007;  
      emailMb = $( "#email-slide0" ).slider("value")  *  valorMultiEmail ;
      moveBar();
   });

    $('#xMesEmail0').click(function(){
    valorMultiEmail = 0.0017;  
      emailMb = $( "#email-slide0" ).slider("value")  * valorMultiEmail ;
      moveBar();
   });

      $('#xDiaEmail1').click(function(){
    valorMultiEmail1 = 0.05;  
    emailMb1 = $( "#email-slide1" ).slider("value")  *  valorMultiEmail1 ;
    moveBar();
    totalmb1();
   });

    $('#xSemanaEmail1').click(function(){
      valorMultiEmail1 = 0.007;  
      emailMb1 = $( "#email-slide1" ).slider("value")  *  valorMultiEmail1 ;
      moveBar();
      totalmb1();
   });

    $('#xMesEmail1').click(function(){
    valorMultiEmail1 = 0.0017;  
      emailMb1 = $( "#email-slide1" ).slider("value")  * valorMultiEmail1 ;
      moveBar();
      totalmb1();
   });

      $('#xDiaInternet0').click(function(){
    valorMultiInternet = 1.45;  
    internetMb =  $('#internet-stepper0').val()  *  valorMultiInternet ;
    moveBar();
   });

    $('#xSemanaInternet0').click(function(){
      valorMultiInternet = 0.193;  
      internetMb =  $('#internet-stepper0').val()  *  valorMultiInternet ;
      moveBar();
   });

    $('#xMesInternet0').click(function(){
    valorMultiInternet = 0.0483;  
      internetMb =  $('#internet-stepper0').val()  * valorMultiInternet ;
      moveBar();
   });

       $('#xDiaInternet1').click(function(){
    valorMultiInternet1 = 1.45;  
    internetMb1 =  $('#internet-stepper1').val()  *  valorMultiInternet1 ;
    moveBar();
    totalmb1();
   });

    $('#xSemanaInternet1').click(function(){
      valorMultiInternet1 = 0.193;  
      internetMb1 =  $('#internet-stepper1').val()  *  valorMultiInternet1 ;
      moveBar();
      totalmb1();
   });

    $('#xMesInternet1').click(function(){
    valorMultiInternet1 = 0.0483;  
      internetMb1 =  $('#internet-stepper1').val()  * valorMultiInternet1 ;
      moveBar();
      totalmb1();
   });




/*************Usuario0*****************************/
  
$('#photo-steppe0').inputStepper({
    initialValue:1,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});

$('#photo-stepper0').on('increase', function (e, amount, plugin) {
    photoMB = $('#photo-stepper0').val() * valorMultiFoto;
    moveBar();
})

$('#photo-stepper0').on('decrease', function (e, amount, plugin) {
    photoMB = $('#photo-stepper0').val() * valorMultiFoto;
    moveBar();
});

 
  
$('#video-steppe0').inputStepper({
    initialValue:1 ,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});

$('#video-stepper0').on('increase', function (e, amount, plugin) {
    videoMb = $('#video-stepper0').val() * valorMultiVideo;
    moveBar();
})

$('#video-stepper0').on('decrease', function (e, amount, plugin) {
    videoMb = $('#video-stepper0').val() * valorMultiVideo;
    moveBar();
});

  $('#internet-steppe0').inputStepper({
    initialValue:0 ,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});

$('#internet-stepper0').on('increase', function (e, amount, plugin) {
    internetMb = $('#internet-stepper0').val() * valorMultiInternet;
    moveBar();
})

$('#internet-stepper0').on('decrease', function (e, amount, plugin) {
    internetMb = $('#internet-stepper0').val() * valorMultiInternet;
    moveBar();
});

 $('#song-slide0').slider({
    min: 0,
    max: 50,
    value:1,
    range:"min",
    slide:function(event,ui){
      songMB = ui.value * valorMultiCancion ;
      document.querySelector('#outPutSongs0').innerHTML = ui.value +" Canciones";
      moveBar();
    }
  });
 
  $('#aplication-slide0').slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
      aplicationMb = ui.value * valorMultiAplication ;
      document.querySelector('#outPutAplications0').innerHTML = ui.value +" Aplicaciones";
      moveBar();
    }
  });

  $('#email-slide0').slider({
    min: 0,
    max: 200,
    value:0,
    range:"min",
    slide:function(event,ui){
      emailMb = ui.value * valorMultiEmail ;
      document.querySelector('#outPutEmails0').innerHTML = ui.value +" Correos";
      moveBar();
    }
  });

  $('#documents-slide0').slider({
    min: 0,
    max: 50,
    value:0,
    range:"min",
    slide:function(event,ui){
      documentsMb = ui.value * valorMultiDocuments ;
      document.querySelector('#outPutDocuments0').innerHTML = ui.value +" Documentos";
      moveBar();
    }
  });



   photoMB = $('#photo-stepper0').val() *.50;
   songMB = $( "#song-slide0" ).slider("value")  * 7;
   videoMb = $( "#video-stepper0" ).val() * 25;
   internetMb = $('#internet-stepper0').val() * .5;
   aplicationMb = $( "#aplication-slide0" ).slider("value" ) * 300;
   emailMb = $( "#email-slide0" ).slider("value") * .05;
   documentsMb =$( "#documents-slide0" ).slider("value") * 3;

  moveBar();

  

 var max=1;
 var min = 1;

 
function sliders(){

/*************Usuario1*****************************/
  $('#photo-stepper1').on('increase', function (e, amount, plugin) {
    photoMB1 = $('#photo-stepper1').val() * valorMultiFoto1;
    moveBar();
    totalmb1();
})

$('#photo-stepper1').on('decrease', function (e, amount, plugin) {
    photoMB1 = $('#photo-stepper1').val() * valorMultiFoto1;
    moveBar();
    totalmb1();
});

$('#video-stepper1').on('increase', function (e, amount, plugin) {
    videoMb1 = $('#video-stepper1').val() * valorMultiVideo1;
    moveBar();
    totalmb1();
})

$('#video-stepper1').on('decrease', function (e, amount, plugin) {
    videoMb1 = $('#video-stepper1').val() * valorMultiVideo1;
    moveBar();
    totalmb1();
});

$('#internet-stepper1').on('increase', function (e, amount, plugin) {
    internetMb1 = $('#internet-stepper1').val() * .5;
    moveBar();
    totalmb1();
})

$('#internet-stepper1').on('decrease', function (e, amount, plugin) {
    internetMb1 = $('#internet-stepper1').val() * .5;
    moveBar();
    totalmb1();
});

  $('#song-slide1').slider({
    slide:function(event,ui){
      songMB1 = ui.value * valorMultiCancion1;
       document.querySelector('#outPutSongs1').innerHTML = ui.value +" Canciones";
      moveBar();
      totalmb1();

    }
  });

 
 
  $('#aplication-slide1').slider({
    slide:function(event,ui){
      aplicationMb1 = ui.value * valorMultiAplication1;
      document.querySelector('#outPutAplications1').innerHTML = ui.value +" Aplicaciones";
      moveBar();
      totalmb1();

    }
  });

  $('#email-slide1').slider({
    slide:function(event,ui){
      emailMb1 = ui.value * valorMultiEmail1;
      document.querySelector('#outPutEmails1').innerHTML = ui.value +" Correos";
      moveBar();
      totalmb1();
    }
  });

  $('#documents-slide1').slider({
    slide:function(event,ui){
      documentsMb1 = ui.value * valorMultiDocuments1;
      document.querySelector('#outPutDocuments1').innerHTML = ui.value +" Documentos";
      moveBar();
      totalmb1();
    }
  });

  /*************Usuario2*****************************/
   $('#xDiaInternet2').click(function(){
    valorMultiInternet2 = 1.45;  
    internetMb2 =  $('#internet-stepper2').val()  *  valorMultiInternet2 ;
    moveBar();
    totalmb2();
   });

    $('#xSemanaInternet2').click(function(){
      valorMultiInternet2 = 0.193;  
      internetMb2 =  $('#internet-stepper2').val()  *  valorMultiInternet2 ;
      moveBar();
      totalmb2();
   });

    $('#xMesInternet2').click(function(){
    valorMultiInternet2 = 0.0483;  
      internetMb2 =  $('#internet-stepper2').val()  * valorMultiInternet2 ;
      moveBar();
      totalmb2();
   });

     $('#xDiaDocuments2').click(function(){
    valorMultiDocuments2 = 3 ;  
    documentsMb2 = $( "#documents-slide2" ).slider("value")  *  valorMultiDocuments2 ;
    moveBar();
    totalmb2();
   });

    $('#xSemanaDocuments2').click(function(){
      valorMultiDocuments2 = 0.4;  
      documentsMb2 = $( "#documents-slide2" ).slider("value")  *  valorMultiDocuments2;
      moveBar();
      totalmb2();
   });

    $('#xMesDocuments2').click(function(){
    valorMultiDocuments2 = 0.1;  
      documentsMb2 = $( "#documents-slide2" ).slider("value")  * valorMultiDocuments2 ;
      moveBar();
      totalmb2();
   });

    $('#xDiaEmail2').click(function(){
    valorMultiEmail2 = 0.05;  
    emailMb2 = $( "#email-slide2" ).slider("value")  *  valorMultiEmail2 ;
    moveBar();
    totalmb2();
   });

    $('#xSemanaEmail2').click(function(){
      valorMultiEmail2 = 0.007;  
      emailMb2 = $( "#email-slide2" ).slider("value")  *  valorMultiEmail2 ;
      moveBar();
      totalmb2();
   });

    $('#xMesEmail2').click(function(){
    valorMultiEmail2 = 0.0017;  
      emailMb2 = $( "#email-slide2" ).slider("value")  * valorMultiEmail2 ;
      moveBar();
      totalmb2();
   });

   $('#xDiaFoto2').click(function(){
    valorMultiFoto2 = .5;
    valorMultiVideo2 = 25;
    photoMB2 = $('#photo-stepper2').val() * valorMultiFoto2;
    videoMb2 = $('#video-stepper2').val() * valorMultiVideo2;
    moveBar();
    totalmb2();
    
   });

    $('#xSemanaFoto2').click(function(){
      valorMultiFoto2 = .07;
      valorMultiVideo2 = 3.34;
     photoMB2 = $('#photo-stepper2').val() * valorMultiFoto2;
     videoMb2 = $('#video-stepper2').val() * valorMultiVideo2;
     moveBar();
      totalmb2();
   
   });

     $('#xMesFoto2').click(function(){
      valorMultiFoto2 = .0167;
      valorMultiVideo2 = .8334;
      photoMB2 = $('#photo-stepper2').val() * valorMultiFoto2;
      videoMb2 = $('#video-stepper2').val() * valorMultiVideo2;
      moveBar();
       totalmb2();
   });

      $('#xDiaCancion2').click(function(){
    valorMultiCancion2 = 7 ;  
    songMB2 = $( "#song-slide2" ).slider("value")  *  valorMultiCancion2 ;
    moveBar();
    totalmb2();
   });

    $('#xSemanaCancion2').click(function(){
    valorMultiCancion2 = .93333333333;  
      songMB2 = $( "#song-slide2" ).slider("value")  *  valorMultiCancion2 ;
      moveBar();
      totalmb2();
   });

    $('#xMesCancion2').click(function(){
    valorMultiCancion2 = .2334 ;  
      songMB2 = $( "#song-slide2" ).slider("value")  * valorMultiCancion2 ;
      moveBar();
      totalmb2();
   });

     $('#xDiaAplication2').click(function(){
    valorMultiAplication2 = 300 ;  
    aplicationMb2 = $( "#aplication-slide2" ).slider("value")  *  valorMultiAplication2 ;
    moveBar();
    totalmb2();
   });

    $('#xSemanaAplication2').click(function(){
      valorMultiAplication2 = 40;  
      aplicationMb2 = $( "#aplication-slide2" ).slider("value")  *  valorMultiAplication2 ;
      moveBar();
      totalmb2();
   });

    $('#xMesAplication2').click(function(){
    valorMultiAplication2 = 10;  
      aplicationMb2 = $( "#aplication-slide2" ).slider("value")  * valorMultiAplication2 ;
      moveBar();
      totalmb2();
   });


 
  $('#photo-stepper2').on('increase', function (e, amount, plugin) {
    photoMB2 = $('#photo-stepper2').val() * valorMultiFoto2;
    moveBar();
    totalmb2();
})

$('#photo-stepper2').on('decrease', function (e, amount, plugin) {
    photoMB2 = $('#photo-stepper2').val() * valorMultiFoto2;
    moveBar();
    totalmb2();
});

$('#video-stepper2').on('increase', function (e, amount, plugin) {
    videoMb2 = $('#video-stepper2').val() * valorMultiVideo2;
    moveBar();
    totalmb2();
})

$('#video-stepper2').on('decrease', function (e, amount, plugin) {
    videoMb2 = $('#video-stepper2').val() * valorMultiVideo2;
    moveBar();
    totalmb2();
});

$('#internet-stepper2').on('increase', function (e, amount, plugin) {
    internetMb2 = $('#internet-stepper2').val() * valorMultiInternet2;
    moveBar();
    totalmb2();
})

$('#internet-stepper2').on('decrease', function (e, amount, plugin) {
    internetMb2 = $('#internet-stepper2').val() * valorMultiInternet2;
    moveBar();
    totalmb2();
});

  $('#song-slide2').slider({
    slide:function(event,ui){
      songMB2 = ui.value * valorMultiCancion2;
       document.querySelector('#outPutSongs2').innerHTML = ui.value +" Canciones";
      moveBar();
      totalmb2();

    }
  });


 
  $('#aplication-slide2').slider({
    slide:function(event,ui){
      aplicationMb2 = ui.value * valorMultiAplication2;
      document.querySelector('#outPutAplications2').innerHTML = ui.value +" Aplicaciones";
      moveBar();
      totalmb2();

    }
  });

  $('#email-slide2').slider({
    slide:function(event,ui){
      emailMb2 = ui.value * valorMultiEmail2;
      document.querySelector('#outPutEmails2').innerHTML = ui.value +" Correos";
      moveBar();
      totalmb2();
    }
  });

  $('#documents-slide2').slider({
    slide:function(event,ui){
      documentsMb2 = ui.value * valorMultiDocuments2;
      document.querySelector('#outPutDocuments2').innerHTML = ui.value +" Documentos";
      moveBar();
      totalmb2();
    }
  });

  /*************Usuario3*****************************/

     $('#xDiaInternet3').click(function(){
    valorMultiInternet3 = 1.45;  
    internetMb3 =  $('#internet-stepper3').val()  *  valorMultiInternet3 ;
    moveBar();
    totalmb3();
   });

    $('#xSemanaInternet3').click(function(){
      valorMultiInternet3 = 0.193;  
      internetMb3 =  $('#internet-stepper3').val()  *  valorMultiInternet3 ;
      moveBar();
      totalmb3();
   });

    $('#xMesInternet3').click(function(){
    valorMultiInternet3 = 0.0483;  
      internetMb3 =  $('#internet-stepper3').val()  * valorMultiInternet3 ;
      moveBar();
      totalmb3();
   });

     $('#xDiaDocuments3').click(function(){
    valorMultiDocuments3 = 3 ;  
    documentsMb3 = $( "#documents-slide3" ).slider("value")  *  valorMultiDocuments3 ;
    moveBar();
    totalmb3();
   });

    $('#xSemanaDocuments3').click(function(){
      valorMultiDocuments3 = 0.4;  
      documentsMb3 = $( "#documents-slide3" ).slider("value")  *  valorMultiDocuments3;
      moveBar();
      totalmb3();
   });

    $('#xMesDocuments3').click(function(){
    valorMultiDocuments3 = 0.1;  
      documentsMb3 = $( "#documents-slide3" ).slider("value")  * valorMultiDocuments3 ;
      moveBar();
      totalmb3();
   });

    $('#xDiaEmail3').click(function(){
    valorMultiEmail3 = 0.05;  
    emailMb3 = $( "#email-slide3" ).slider("value")  *  valorMultiEmail3 ;
    moveBar();
    totalmb3();
   });

    $('#xSemanaEmail3').click(function(){
      valorMultiEmail3 = 0.007;  
      emailMb3 = $( "#email-slide3" ).slider("value")  *  valorMultiEmail3 ;
      moveBar();
      totalmb3();
   });

    $('#xMesEmail3').click(function(){
    valorMultiEmail3 = 0.0017;  
      emailMb3 = $( "#email-slide3" ).slider("value")  * valorMultiEmail3 ;
      moveBar();
      totalmb3();
   });
   
    $('#xDiaAplication3').click(function(){
    valorMultiAplication3 = 300 ;  
    aplicationMb3 = $( "#aplication-slide3" ).slider("value")  *  valorMultiAplication3 ;
    moveBar();
    totalmb3();
   });

    $('#xSemanaAplication3').click(function(){
      valorMultiAplication3 = 40;  
      aplicationMb3 = $( "#aplication-slide3" ).slider("value")  *  valorMultiAplication3 ;
      moveBar();
      totalmb3();
   });

    $('#xMesAplication3').click(function(){
    valorMultiAplication3 = 10;  
      aplicationMb3 = $( "#aplication-slide3" ).slider("value")  * valorMultiAplication3 ;
      moveBar();
      totalmb3();
   });


  $('#xDiaFoto3').click(function(){
    valorMultiFoto3 = .5;
    valorMultiVideo3 = 25;
    photoMB3 = $('#photo-stepper3').val() * valorMultiFoto3;
    videoMb3 = $('#video-stepper3').val() * valorMultiVideo3;
    moveBar();
    totalmb3();
    
   });

    $('#xSemanaFoto3').click(function(){
      valorMultiFoto3 = .07;
      valorMultiVideo3 = 3.34;
     photoMB3 = $('#photo-stepper3').val() * valorMultiFoto3;
     videoMb3 = $('#video-stepper3').val() * valorMultiVideo3;
     moveBar();
      totalmb3();
   
   });

     $('#xMesFoto3').click(function(){
      valorMultiFoto3 = .0167;
      valorMultiVideo3 = .8334;
      photoMB3 = $('#photo-stepper3').val() * valorMultiFoto3;
      videoMb3 = $('#video-stepper3').val() * valorMultiVideo3;
      moveBar();
       totalmb3();
   });


   $('#xDiaCancion3').click(function(){
    valorMultiCancion3 = 7 ;  
    songMB3 = $( "#song-slide3" ).slider("value")  *  valorMultiCancion3 ;
    moveBar();
    totalmb3();
   });

    $('#xSemanaCancion3').click(function(){
    valorMultiCancion3 = .93333333333;  
      songMB3 = $( "#song-slide3" ).slider("value")  *  valorMultiCancion3 ;
      moveBar();
      totalmb3();
   });

    $('#xMesCancion3').click(function(){
    valorMultiCancion3 = .2334 ;  
      songMB3 = $( "#song-slide3" ).slider("value")  * valorMultiCancion3 ;
      moveBar();
      totalmb3();
   });


   $('#photo-stepper3').on('increase', function (e, amount, plugin) {
    photoMB3 = $('#photo-stepper3').val() * valorMultiFoto3;
    moveBar();
    totalmb3();
})

$('#photo-stepper3').on('decrease', function (e, amount, plugin) {
    photoMB3 = $('#photo-stepper3').val() * valorMultiFoto3;
    moveBar();
    totalmb3();
});

$('#video-stepper3').on('increase', function (e, amount, plugin) {
    videoMb3 = $('#video-stepper3').val() * valorMultiVideo3;
    moveBar();
    totalmb3();
})

$('#video-stepper3').on('decrease', function (e, amount, plugin) {
    videoMb3 = $('#video-stepper3').val() * valorMultiVideo3;
    moveBar();
    totalmb3();
});

$('#internet-stepper3').on('increase', function (e, amount, plugin) {
    internetMb3 = $('#internet-stepper3').val() * valorMultiInternet3;
    moveBar();
    totalmb3();
})

$('#internet-stepper3').on('decrease', function (e, amount, plugin) {
    internetMb3 = $('#internet-stepper3').val() * valorMultiInternet3;
    moveBar();
    totalmb3();
});

  $('#song-slide3').slider({
    slide:function(event,ui){
      songMB3 = ui.value * valorMultiCancion3;
       document.querySelector('#outPutSongs3').innerHTML = ui.value +" Canciones";
      moveBar();
      totalmb3();
    }
  });


 
  $('#aplication-slide3').slider({
    slide:function(event,ui){
      aplicationMb3 = ui.value * valorMultiAplication3;
      document.querySelector('#outPutAplications3').innerHTML = ui.value +" Aplicaciones";
      moveBar();
      totalmb3();

    }
  });

  $('#email-slide3').slider({
    slide:function(event,ui){
      emailMb3 = ui.value * valorMultiEmail3;
      document.querySelector('#outPutEmails3').innerHTML = ui.value +" Correos";
      moveBar();
      totalmb3();
    }
  });

  $('#documents-slide3').slider({
    slide:function(event,ui){
      documentsMb3 = ui.value * valorMultiDocuments3;
      document.querySelector('#outPutDocuments3').innerHTML = ui.value +" Documentos";
      moveBar();
      totalmb3();
    }
  });


  /*************Usuario4*****************************/
   $('#xDiaInternet4').click(function(){
    valorMultiInternet4 = 1.45;  
    internetMb4 =  $('#internet-stepper4').val()  *  valorMultiInternet4 ;
    moveBar();
    totalmb4();
   });

    $('#xSemanaInternet4').click(function(){
      valorMultiInternet4 = 0.193;  
      internetMb4 =  $('#internet-stepper4').val()  *  valorMultiInternet4 ;
      moveBar();
      totalmb4();
   });

    $('#xMesInternet4').click(function(){
    valorMultiInternet4 = 0.0483;  
      internetMb4 =  $('#internet-stepper4').val()  * valorMultiInternet4 ;
      moveBar();
      totalmb4();
   });

   $('#xDiaDocuments4').click(function(){
    valorMultiDocuments4 = 3 ;  
    documentsMb4 = $( "#documents-slide4" ).slider("value")  *  valorMultiDocuments4 ;
    moveBar();
    totalmb4();
   });

    $('#xSemanaDocuments4').click(function(){
      valorMultiDocuments4 = 0.4;  
      documentsMb4 = $( "#documents-slide4" ).slider("value")  *  valorMultiDocuments4;
      moveBar();
      totalmb4();
   });

    $('#xMesDocuments4').click(function(){
    valorMultiDocuments4 = 0.1;  
      documentsMb4 = $( "#documents-slide4" ).slider("value")  * valorMultiDocuments4 ;
      moveBar();
      totalmb4();
   });

  $('#xDiaEmail4').click(function(){
    valorMultiEmail4 = 0.05;  
    emailMb4 = $( "#email-slide4" ).slider("value")  *  valorMultiEmail4 ;
    moveBar();
    totalmb4();
   });

    $('#xSemanaEmail4').click(function(){
      valorMultiEmail4 = 0.007;  
      emailMb4 = $( "#email-slide4" ).slider("value")  *  valorMultiEmail4 ;
      moveBar();
      totalmb4();
   });

    $('#xMesEmail4').click(function(){
    valorMultiEmail4 = 0.0017;  
      emailMb4 = $( "#email-slide4" ).slider("value")  * valorMultiEmail4 ;
      moveBar();
      totalmb4();
   });

   $('#xDiaAplication4').click(function(){
    valorMultiAplication4 = 300 ;  
    aplicationMb4 = $( "#aplication-slide4" ).slider("value")  *  valorMultiAplication4 ;
    moveBar();
    totalmb4();
   });

    $('#xSemanaAplication4').click(function(){
      valorMultiAplication4 = 40;  
      aplicationMb4 = $( "#aplication-slide4" ).slider("value")  *  valorMultiAplication4 ;
      moveBar();
      totalmb4();
   });

    $('#xMesAplication4').click(function(){
    valorMultiAplication4 = 10;  
      aplicationMb4 = $( "#aplication-slide4" ).slider("value")  * valorMultiAplication4 ;
      moveBar();
      totalmb4();
   });
 

  $('#xDiaFoto4').click(function(){
    valorMultiFoto4 = .5;
    valorMultiVideo4 = 25;
    photoMB4 = $('#photo-stepper4').val() * valorMultiFoto4;
    videoMb4 = $('#video-stepper4').val() * valorMultiVideo4;
    moveBar();
    totalmb4();
    
   });

    $('#xSemanaFoto4').click(function(){
      valorMultiFoto4 = .07;
      valorMultiVideo4 = 3.34;
     photoMB4 = $('#photo-stepper4').val() * valorMultiFoto4;
     videoMb4 = $('#video-stepper4').val() * valorMultiVideo4;
     moveBar();
      totalmb4();
   
   });

     $('#xMesFoto4').click(function(){
      valorMultiFoto4 = .0167;
      valorMultiVideo4 = .8334;
      photoMB4 = $('#photo-stepper4').val() * valorMultiFoto4;
      videoMb4 = $('#video-stepper4').val() * valorMultiVideo4;
      moveBar();
       totalmb4();
   });


      $('#xDiaCancion4').click(function(){
    valorMultiCancion4 = 7 ;  
    songMB4 = $( "#song-slide4" ).slider("value")  *  valorMultiCancion4 ;
    moveBar();
    totalmb4();
   });

    $('#xSemanaCancion4').click(function(){
    valorMultiCancion4 = .93333333333;  
      songMB4 = $( "#song-slide4" ).slider("value")  *  valorMultiCancion4 ;
      moveBar();
      totalmb4();
   });

    $('#xMesCancion4').click(function(){
    valorMultiCancion4 = .2334 ;  
      songMB4 = $( "#song-slide4" ).slider("value")  * valorMultiCancion4 ;
      moveBar();
      totalmb4();
   });


   $('#photo-stepper4').on('increase', function (e, amount, plugin) {
    photoMB4 = $('#photo-stepper4').val() * valorMultiFoto4;
    moveBar();
    totalmb4();
})

$('#photo-stepper4').on('decrease', function (e, amount, plugin) {
    photoMB4 = $('#photo-stepper4').val() * valorMultiFoto4;
    moveBar();
    totalmb4();
});

$('#video-stepper4').on('increase', function (e, amount, plugin) {
    videoMb4 = $('#video-stepper4').val() * valorMultiVideo4;
    moveBar();
    totalmb4();
})

$('#video-stepper4').on('decrease', function (e, amount, plugin) {
    videoMb4 = $('#video-stepper4').val() * valorMultiVideo4;
    moveBar();
    totalmb4();
});

$('#internet-stepper4').on('increase', function (e, amount, plugin) {
    internetMb4 = $('#internet-stepper4').val() * valorMultiInternet4;
    moveBar();
    totalmb4();
})

$('#internet-stepper4').on('decrease', function (e, amount, plugin) {
    internetMb4 = $('#internet-stepper4').val() * valorMultiInternet4;
    moveBar();
    totalmb4();
});

  $('#song-slide4').slider({
    slide:function(event,ui){
      songMB4 = ui.value * valorMultiCancion4;
       document.querySelector('#outPutSongs4').innerHTML = ui.value +" Canciones";
      moveBar();
      totalmb4();
    }
  });

 
  $('#aplication-slide4').slider({
    slide:function(event,ui){
      aplicationMb4 = ui.value * valorMultiAplication4;
      document.querySelector('#outPutAplications4').innerHTML = ui.value +" Aplicaciones";
      moveBar();
      totalmb4();

    }
  });

  $('#email-slide4').slider({
    slide:function(event,ui){
      emailMb4 = ui.value * valorMultiEmail4;
      document.querySelector('#outPutEmails4').innerHTML = ui.value +" Correos";
      moveBar();
      totalmb4();
    }
  });

  $('#documents-slide4').slider({
    slide:function(event,ui){
      documentsMb4 = ui.value * valorMultiDocuments4;
      document.querySelector('#outPutDocuments4').innerHTML = ui.value +" Documentos";
      moveBar();
      totalmb4();
    }
  });


  /*************Usuario5*****************************/
   $('#xDiaInternet5').click(function(){
    valorMultiInternet5 = 1.45;  
    internetMb5 =  $('#internet-stepper5').val()  *  valorMultiInternet5 ;
    moveBar();
    totalmb5();
   });

    $('#xSemanaInternet5').click(function(){
      valorMultiInternet5 = 0.193;  
      internetMb5 =  $('#internet-stepper5').val()  *  valorMultiInternet5 ;
      moveBar();
      totalmb5();
   });

    $('#xMesInternet5').click(function(){
    valorMultiInternet5 = 0.0483;  
      internetMb5 =  $('#internet-stepper5').val()  * valorMultiInternet5 ;
      moveBar();
      totalmb5();
   });

     $('#xDiaDocuments5').click(function(){
    valorMultiDocuments5 = 3 ;  
    documentsMb5 = $( "#documents-slide5" ).slider("value")  *  valorMultiDocuments5 ;
    moveBar();
    totalmb5();
   });

    $('#xSemanaDocuments5').click(function(){
      valorMultiDocuments5 = 0.4;  
      documentsMb5 = $( "#documents-slide5" ).slider("value")  *  valorMultiDocuments5;
      moveBar();
      totalmb5();
   });

    $('#xMesDocuments5').click(function(){
    valorMultiDocuments5 = 0.1;  
      documentsMb5 = $( "#documents-slide5" ).slider("value")  * valorMultiDocuments5 ;
      moveBar();
      totalmb5();
   });

     $('#xDiaEmail5').click(function(){
    valorMultiEmail5 = 0.05;  
    emailMb5 = $( "#email-slide5" ).slider("value")  *  valorMultiEmail5 ;
    moveBar();
    totalmb5();
   });

    $('#xSemanaEmail5').click(function(){
      valorMultiEmail5 = 0.007;  
      emailMb5 = $( "#email-slide5" ).slider("value")  *  valorMultiEmail5 ;
      moveBar();
      totalmb5();
   });

    $('#xMesEmail5').click(function(){
    valorMultiEmail5 = 0.0017;  
      emailMb5 = $( "#email-slide5" ).slider("value")  * valorMultiEmail5 ;
      moveBar();
      totalmb5();
   });

   $('#xDiaAplication5').click(function(){
    valorMultiAplication5 = 300 ;  
    aplicationMb5 = $( "#aplication-slide5" ).slider("value")  *  valorMultiAplication5 ;
    moveBar();
    totalmb5();
   });

    $('#xSemanaAplication5').click(function(){
      valorMultiAplication5 = 40;  
      aplicationMb5 = $( "#aplication-slide5" ).slider("value")  *  valorMultiAplication5 ;
      moveBar();
      totalmb5();
   });

    $('#xMesAplication5').click(function(){
    valorMultiAplication5 = 10;  
      aplicationMb5 = $( "#aplication-slide5" ).slider("value")  * valorMultiAplication5 ;
      moveBar();
      totalmb5();
   });

  $('#xDiaFoto5').click(function(){
    valorMultiFoto5 = .5;
    valorMultiVideo5 = 25;
    photoMB5 = $('#photo-stepper5').val() * valorMultiFoto5;
    videoMb5 = $('#video-stepper5').val() * valorMultiVideo5;
    moveBar();
    totalmb5();
    
   });

    $('#xSemanaFoto5').click(function(){
      valorMultiFoto5 = .07;
      valorMultiVideo5 = 3.34;
     photoMB5 = $('#photo-stepper5').val() * valorMultiFoto5;
     videoMb5 = $('#video-stepper5').val() * valorMultiVideo5;
     moveBar();
      totalmb5();
   
   });

     $('#xMesFoto5').click(function(){
      valorMultiFoto5 = .0167;
      valorMultiVideo5 = .8334;
      photoMB5 = $('#photo-stepper5').val() * valorMultiFoto5;
      videoMb5 = $('#video-stepper5').val() * valorMultiVideo5;
      moveBar();
       totalmb5();
   });

      $('#xDiaCancion5').click(function(){
    valorMultiCancion5 = 7 ;  
    songMB5 = $( "#song-slide5" ).slider("value")  *  valorMultiCancion5 ;
    moveBar();
    totalmb5();
   });

    $('#xSemanaCancion5').click(function(){
    valorMultiCancion5 = .93333333333;  
      songMB5 = $( "#song-slide5" ).slider("value")  *  valorMultiCancion5 ;
      moveBar();
      totalmb5();
   });

    $('#xMesCancion5').click(function(){
    valorMultiCancion5 = .2334 ;  
      songMB5 = $( "#song-slide5" ).slider("value")  * valorMultiCancion5 ;
      moveBar();
      totalmb5();
   });


   $('#photo-stepper5').on('increase', function (e, amount, plugin) {
    photoMB5 = $('#photo-stepper5').val() * valorMultiFoto5;
    moveBar();
    totalmb5();
})

$('#photo-stepper5').on('decrease', function (e, amount, plugin) {
    photoMB5 = $('#photo-stepper5').val() * valorMultiFoto5;
    moveBar();
    totalmb5();
});

$('#video-stepper5').on('increase', function (e, amount, plugin) {
    videoMb5 = $('#video-stepper5').val() * valorMultiVideo5;
    moveBar();
    totalmb5();
})

$('#video-stepper5').on('decrease', function (e, amount, plugin) {
    videoMb5 = $('#video-stepper5').val() * valorMultiVideo5;
    moveBar();
    totalmb5();
});

$('#internet-stepper5').on('increase', function (e, amount, plugin) {
    internetMb5 = $('#internet-stepper5').val() * valorMultiInternet5;
    moveBar();
    totalmb5();
})

$('#internet-stepper5').on('decrease', function (e, amount, plugin) {
    internetMb5 = $('#internet-stepper5').val() * valorMultiInternet5;
    moveBar();
    totalmb5();
});
 

  $('#song-slide5').slider({
    slide:function(event,ui){
       document.querySelector('#outPutSongs5').innerHTML = ui.value +" Canciones";
      songMB5 = ui.value * valorMultiCancion5;
      moveBar();
      totalmb5();
    }
  });
 
  $('#aplication-slide5').slider({
    slide:function(event,ui){
      aplicationMb5 = ui.value * valorMultiAplication5;
      document.querySelector('#outPutAplications5').innerHTML = ui.value +" Aplicaciones";
      moveBar();
      totalmb5();

    }
  });

  $('#email-slide5').slider({
    slide:function(event,ui){
      emailMb5 = ui.value * valorMultiEmail5;
       document.querySelector('#outPutEmails5').innerHTML = ui.value +" Correos";
      moveBar();
      totalmb5();
    }
  });

  $('#documents-slide5').slider({
    slide:function(event,ui){
      documentsMb5 = ui.value * valorMultiDocuments5;
      document.querySelector('#outPutDocuments5').innerHTML = ui.value +" Documentos";
      moveBar();
      totalmb5();
    }
  });

}



 function ocultar(){
      $( "#nuevo"+max).hide();
      max+=1;
  }
 
 ocultar();


function mostrar(){
  $( "#nuevo"+min).show();
  min+=1;
}


   $('#agregar').click(function(){
    ocultar();
    mostrar();
    sliders();
    totalmb1();
    totalmb2();
    totalmb3();
    totalmb4();
    totalmb5();
});

});


  

   function crear(){
    if(usuarioLength<6){
  $('#photo-steppe'+usuarioLength).inputStepper({
    initialValue:0 ,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});

  $('#song-slide'+usuarioLength).slider({
    min: 0,
    max: 50,
    value:0,
    range:"min",
    slide:function(event,ui){
     
    }
  });

   $('#video-steppe'+usuarioLength).inputStepper({
    initialValue:0 ,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});

    $('#internet-steppe'+usuarioLength).inputStepper({
    initialValue:0 ,
    min: 0,
    max: Infinity,
    selectorInput: 'input',
    selectorButtonIncrease: '[data-input-stepper-increase]',
    selectorButtonDecrease: '[data-input-stepper-decrease]',
    dataAttributeIncrease: 'input-stepper-increase',
    dataAttributeDecrease: 'input-stepper-decrease',
    classNameDisabled: 'is-disabled'
});
 
  $('#aplication-slide'+usuarioLength).slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
      
    }
  });

  $('#email-slide'+usuarioLength).slider({
    min: 0,
    max: 200,
    value:0,
    range:"min",
    slide:function(event,ui){
     
    }
  });

  $('#documents-slide'+usuarioLength).slider({
    min: 0,
    max: 50,
    value:0,
    range:"min",
    slide:function(event,ui){
      
    }
  });

  }
}




function uAumenta(){
  if(usuarioLength<6){
  usuarioLength+=1;

  }
}

function Usuario(){
  this.id;
  this.nombre = "Contacto";

}



/******************************************************
******************************************************
******************************************************
******************************************************/

var telcelApp = angular.module('telcel',[]);



telcelApp.controller('calculadoraDatos', ['$scope', '$http', function($scope, $http) {
    
    $scope.valor = 2;
    $scope.userSelected = 0;

    $scope.usuarios = [];
    usuarioLength = $scope.usuarios.length;

    var userDefault = new Usuario();
    userDefault.nombre = "Mis datos";
    userDefault.id = 0;

    $scope.usuarios.push(userDefault);

  

    $scope.nuevo = function(){
      if($scope.usuarios.length<6){
        $scope.seleccionarUltimo(usuarioLength);
      var nuevoUsuario = new Usuario();
      nuevoUsuario.id = $scope.usuarios.length;      
      $scope.usuarios.push(nuevoUsuario);

    }
      else
        console.log("Maximo usuarios");
    };
  
  
    $scope.primero = function(){
      var nuevoUsuario = new Usuario();
      nuevoUsuario.id = $scope.usuarios.length;      
      $scope.usuarios.push(nuevoUsuario);
    };

    $scope.primero();
  
    
    $scope.seleccionarOtro = function(_id){
      $scope.userSelected = _id;
      var x = 0;
      for (var i = $scope.usuarios.length - 1; i >= 0; i--) {
        x += $scope.usuarios[i].id;
    
      }

    };
   
   $scope.seleccionarUltimo = function(_id){
      $scope.userSelected = _id;
      var x = 0;
      for (var i = $scope.usuarios.length - 1; i >= 0; i--) {
        x += $scope.usuarios[i].id;

      }

    };
    

    
}]);


