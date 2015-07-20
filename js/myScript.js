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

 var usuarioLength =1;

 
function moveBar(){
    var totalMBValue = (photoMB + songMB + videoMb + internetMb + aplicationMb + emailMb + documentsMb )*30;
    var totalMBValue1= (photoMB1 + songMB1 + videoMb1 + internetMb1 + aplicationMb1 + emailMb1 + documentsMb1)*30;
    var totalUserValue = (totalMBValue + totalMBValue1);
    var totalMB = 20000;
    var porcentBar = ( totalUserValue * 100) / totalMB;
    document.getElementById("total-price-bar").style.width = porcentBar + "%";


 

    if(totalMBValue<=20001)
    document.querySelector('.cantidadTotal').innerHTML = Math.round(totalUserValue)+" MB/mo";
    
    else 
    document.querySelector('.cantidadTotal').innerHTML = "20000 MB/mo";

  }

$(document).ready(function(){

/*************Usuario0*****************************/
  $('#photo-slide0').slider({
    min: 0,
    max: 10,
    value:8,
    range:"min",
    slide:function(event,ui){
      photoMB = ui.value * .819 ;
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
      videoMb = ui.value * 8 ;
      moveBar();
    }
  });

  $('#internet-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      internetMb = ui.value * 1.45 ;
      moveBar();
    }
  });
 
  $('#aplication-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      aplicationMb = ui.value * 5 ;
      moveBar();
    }
  });

  $('#email-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      emailMb = ui.value * .249 ;
      moveBar();
    }
  });

  $('#documents-slide0').slider({
    min: 0,
    max: 10,
    value:5,
    range:"min",
    slide:function(event,ui){
      documentsMb = ui.value * 4 ;
      moveBar();
    }
  });



   photoMB = $( "#photo-slide0" ).slider("value") *.839;
   songMB = $( "#song-slide0" ).slider("value")  * 7;
   videoMb = $( "#video-slide0" ).slider("value") * 8;
   internetMb = $( "#internet-slide0" ).slider("value")  * 1.45;
   aplicationMb = $( "#aplication-slide0" ).slider("value" ) * 5;
   emailMb = $( "#email-slide0" ).slider("value") * .249;
   documentsMb =$( "#documents-slide0" ).slider("value") * 4;

  moveBar();

  

 var max=1;
 var min = 1;
 var user=1;

 
function sliders(){
 /*************Usuario1*****************************/
  $('#photo-slide'+user).slider({
    slide:function(event,ui){
      photoMB1 = ui.value * .819 ;
      moveBar();
    }
    });

  $('#song-slide'+user).slider({
    slide:function(event,ui){
      songMB1 = ui.value * 7;
      moveBar();
    }
  });

  $('#video-slide'+user).slider({
    slide:function(event,ui){
      videoMb1 = ui.value *18;
      moveBar();
    }
  });

  $('#internet-slide'+user).slider({
    slide:function(event,ui){
      internetMb1 = ui.value * 1.45;
      moveBar();
    }
  });
 
  $('#aplication-slide'+user).slider({
    slide:function(event,ui){
      aplicationMb1 = ui.value * 5;
      moveBar();

    }
  });

  $('#email-slide'+user).slider({
    slide:function(event,ui){
      emailMb1 = ui.value * .249;
      moveBar();
    }
  });

  $('#documents-slide'+user).slider({
    slide:function(event,ui){
      documentsMb1 = ui.value * 4;
      moveBar();
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
});

});


  

   function crear(){
    if(usuarioLength<6){
  $('#photo-slide'+usuarioLength).slider({
    min: 0,
    max: 10,
    value:0,
    range:"min",
    slide:function(event,ui){
    
    }
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
  this.nombre = "Usuario";
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
        console.log("maximo");
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


