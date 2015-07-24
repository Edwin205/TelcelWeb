  

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

 var usuarioLength =1;

 
function moveBar(){
    totalMBValue0 = (photoMB + songMB + videoMb + internetMb + aplicationMb + emailMb + documentsMb )*30;
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

  $( "#xDiaFoto" ).prop( "checked", true );
$( "#xDiaCancion" ).prop( "checked", true );



$('#photo-steppe0').inputStepper({
    initialValue:5 ,
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
    photoMB = $('#photo-stepper0').val() *.50;
    moveBar();
})

$('#photo-stepper0').on('decrease', function (e, amount, plugin) {
    photoMB = $('#photo-stepper0').val() *.50;
    moveBar();
});

/*************Usuario0*****************************/
  $('#photo-slide0').slider({
    min: 0,
    max: 10,
    value:8,
    range:"min",
    slide:function(event,ui){
      photoMB = ui.value * .50 ;
      moveBar();
    }
    });

  $('#song-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      songMB = ui.value * 7 ;
      moveBar();
    }
  });

  $('#video-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      videoMb = ui.value * 25 ;
      moveBar();
    }
  });

  $('#internet-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      internetMb = ui.value * .5 ;
      moveBar();
    }
  });
 
  $('#aplication-slide0').slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
      aplicationMb = ui.value * 300 ;
      moveBar();
    }
  });

  $('#email-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      emailMb = ui.value * .05 ;
      moveBar();
    }
  });

  $('#documents-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      documentsMb = ui.value * 3 ;
      moveBar();
    }
  });



   photoMB = $('#photo-stepper0').val() *.50;
   songMB = $( "#song-slide0" ).slider("value")  * 6;
   videoMb = $( "#video-slide0" ).slider("value") * 25;
   internetMb = $( "#internet-slide0" ).slider("value")  * .5;
   aplicationMb = $( "#aplication-slide0" ).slider("value" ) * 300;
   emailMb = $( "#email-slide0" ).slider("value") * .05;
   documentsMb =$( "#documents-slide0" ).slider("value") * 3;

  moveBar();

  

 var max=1;
 var min = 1;

 
function sliders(){
 /*************Usuario1*****************************/
  $('#photo-stepper1').on('increase', function (e, amount, plugin) {
      photoMB1 = $('#photo-stepper1').val() *.50;
      moveBar();
      totalmb1();
  });

  $('#photo-stepper1').on('decrease', function (e, amount, plugin) {
      photoMB1 = $('#photo-stepper1').val() *.50;
      moveBar();
      totalmb1();
  });

  $('#song-slide1').slider({
    slide:function(event,ui){
      songMB1 = ui.value * 7;
      moveBar();
      totalmb1();

    }
  });

  $('#video-slide1').slider({
    slide:function(event,ui){
      videoMb1 = ui.value *25;
      moveBar();
      totalmb1();
    }
  });

  $('#internet-slide1').slider({
    slide:function(event,ui){
      internetMb1 = ui.value * .5;
      moveBar();
      totalmb1();
    }
  });
 
  $('#aplication-slide1').slider({
    slide:function(event,ui){
      aplicationMb1 = ui.value * 300;
      moveBar();
      totalmb1();

    }
  });

  $('#email-slide1').slider({
    slide:function(event,ui){
      emailMb1 = ui.value * .05;
      moveBar();
      totalmb1();
    }
  });

  $('#documents-slide1').slider({
    slide:function(event,ui){
      documentsMb1 = ui.value * 3;
      moveBar();
      totalmb1();
    }
  });

  /*************Usuario2*****************************/
  $('#photo-slide2').slider({
    slide:function(event,ui){
      photoMB2 = ui.value * .50 ;
      moveBar();
      totalmb2();
    }
    });

  $('#song-slide2').slider({
    slide:function(event,ui){
      songMB2 = ui.value * 7;
      moveBar();
      totalmb2();

    }
  });

  $('#video-slide2').slider({
    slide:function(event,ui){
      videoMb2 = ui.value *25;
      moveBar();
      totalmb2();
    }
  });

  $('#internet-slide2').slider({
    slide:function(event,ui){
      internetMb2 = ui.value * .5;
      moveBar();
      totalmb2();
    }
  });
 
  $('#aplication-slide2').slider({
    slide:function(event,ui){
      aplicationMb2 = ui.value * 300;
      moveBar();
      totalmb2();

    }
  });

  $('#email-slide2').slider({
    slide:function(event,ui){
      emailMb2 = ui.value * .05;
      moveBar();
      totalmb2();
    }
  });

  $('#documents-slide2').slider({
    slide:function(event,ui){
      documentsMb2 = ui.value * 3;
      moveBar();
      totalmb2();
    }
  });

  /*************Usuario3*****************************/
  $('#photo-slide3').slider({
    slide:function(event,ui){
      photoMB3 = ui.value * .50 ;
      moveBar();
      totalmb3();
    }
    });

  $('#song-slide3').slider({
    slide:function(event,ui){
      songMB3 = ui.value * 7;
      moveBar();
      totalmb3();
    }
  });

  $('#video-slide3').slider({
    slide:function(event,ui){
      videoMb3 = ui.value *25;
      moveBar();
      totalmb3();
    }
  });

  $('#internet-slide3').slider({
    slide:function(event,ui){
      internetMb3 = ui.value * .5;
      moveBar();
      totalmb3();
    }
  });
 
  $('#aplication-slide3').slider({
    slide:function(event,ui){
      aplicationMb3 = ui.value * 300;
      moveBar();
      totalmb3();

    }
  });

  $('#email-slide3').slider({
    slide:function(event,ui){
      emailMb3 = ui.value * .05;
      moveBar();
      totalmb3();
    }
  });

  $('#documents-slide3').slider({
    slide:function(event,ui){
      documentsMb3 = ui.value * 3;
      moveBar();
      totalmb3();
    }
  });


  /*************Usuario4*****************************/
  $('#photo-slide4').slider({
    slide:function(event,ui){
      photoMB4 = ui.value * .50 ;
      moveBar();
      totalmb4();
    }
    });

  $('#song-slide4').slider({
    slide:function(event,ui){
      songMB4 = ui.value * 7;
      moveBar();
      totalmb4();
    }
  });

  $('#video-slide4').slider({
    slide:function(event,ui){
      videoMb4 = ui.value *25;
      moveBar();
      totalmb4();
    }
  });

  $('#internet-slide4').slider({
    slide:function(event,ui){
      internetMb4 = ui.value * .5;
      moveBar();
      totalmb4();
    }
  });
 
  $('#aplication-slide4').slider({
    slide:function(event,ui){
      aplicationMb4 = ui.value * 300;
      moveBar();
      totalmb4();

    }
  });

  $('#email-slide4').slider({
    slide:function(event,ui){
      emailMb4 = ui.value * .05;
      moveBar();
      totalmb4();
    }
  });

  $('#documents-slide4').slider({
    slide:function(event,ui){
      documentsMb4 = ui.value * 3;
      moveBar();
      totalmb4();
    }
  });


  /*************Usuario5*****************************/
  $('#photo-slide5').slider({
    slide:function(event,ui){
      photoMB5 = ui.value * .50 ;
      moveBar();
      totalmb5();
    }
    });

  $('#song-slide5').slider({
    slide:function(event,ui){
      songMB5 = ui.value * 7;
      moveBar();
      totalmb5();
    }
  });

  $('#video-slide5').slider({
    slide:function(event,ui){
      videoMb5 = ui.value *25;
      moveBar();
      totalmb5();
    }
  });

  $('#internet-slide5').slider({
    slide:function(event,ui){
      internetMb5 = ui.value * .5;
      moveBar();
      totalmb5();
    }
  });
 
  $('#aplication-slide5').slider({
    slide:function(event,ui){
      aplicationMb5 = ui.value * 300;
      moveBar();
      totalmb5();

    }
  });

  $('#email-slide5').slider({
    slide:function(event,ui){
      emailMb5 = ui.value * .05;
      moveBar();
      totalmb5();
    }
  });

  $('#documents-slide5').slider({
    slide:function(event,ui){
      documentsMb5 = ui.value * 3;
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
    initialValue:2 ,
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
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
     
    }
  });

  $('#video-slide'+usuarioLength).slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
     
    }
  });

  $('#internet-slide'+usuarioLength).slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
      
    }
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
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
     
    }
  });

  $('#documents-slide'+usuarioLength).slider({
    min: 0,
    max: 10,
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


