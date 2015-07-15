   
$(document).ready(function(){
  
  /*************Usuario0*****************************/
  $('#photo-slide0').jRange({
    from: 0,
    to: 10,
    step: 1,
    scale: [0,10],
    format: '%s',
    width: "auto",
    showLabels: false,
    onstatechange:function(value){
      photoMB = value * .819 ;
      moveBar();
    }
    });

  $('#song-slide0').jRange({
    from: 0,
    to: 10,
    step: 1,
    scale: [0,10],
    format: '%s',
    width: "auto",
    showLabels: false,
    onstatechange:function(value){
      songMB = value * 7 ;
      moveBar();
    }
  });

  $('#video-slide0').jRange({
  from: 0,
  to: 90,
  step: 1,
  scale: [0,90],
  format: '%s',
  width: "auto",
  showLabels: false,
    onstatechange:function(value){
      videoMb = value * 8 ;
      moveBar();
    }
  });

  $('#internet-slide0').jRange({
  from: 0,
  to: 100,
  step: 1,
  scale: [0,100],
  format: '%s',
  width: "auto",
  showLabels: false,
    onstatechange:function(value){
      internetMb = value * 1.45 ;
      moveBar();
    }
   });

  $('#aplication-slide0').jRange({
  from: 0,
  to: 30,
  step: 1,
  scale: [0,30],
  format: '%s',
  width: "auto",
  showLabels: false,
   onstatechange:function(value){
      aplicationMb = value * 5 ;
      moveBar();
    }
  });

  $('#email-slide0').jRange({
  from: 0,
  to: 100,
  step: 1,
  scale: [0,100],
  format: '%s',
  width: "auto",
  showLabels: false, 
   onstatechange:function(value){
      emailMb = value * .249 ;
      moveBar();
    }
  });

  $('#documents-slide0').jRange({
  from: 0,
  to: 20,
  step: 1,
  scale: [0,20],
  format: '%s',
  width: "auto",
  showLabels: false,
  onstatechange:function(value){
      documentsMb = value * 4 ;
      moveBar();
    }

  });

  


  var photoMB = document.getElementById("photo-slide0").value * .819;
  var songMB = document.getElementById("song-slide0").value * 7;
  var videoMb = document.getElementById("video-slide0").value * 8;
  var internetMb = 0;
  var aplicationMb =  0;
  var emailMb = 0;
  var documentsMb =0;

  moveBar();

  function moveBar(){
    var totalMBValue = (photoMB + songMB + videoMb + internetMb + aplicationMb + emailMb +documentsMb )*30;
    console.log(totalMBValue, photoMB, songMB);
    var totalMB = 20000;
    var porcentBar = (totalMBValue * 100) / totalMB;
    document.getElementById("total-price-bar").style.width = porcentBar + "%";


 

    if(totalMBValue<=20001)
    document.querySelector('.cantidadTotal').innerHTML = Math.round(totalMBValue)+" MB/mo";
    
    else 
    document.querySelector('.cantidadTotal').innerHTML = "20000 MB/mo";

  }


});

   var usuarioLenght =0;

   function crear(){
    if(usuarioLenght<6){
  $('#photo-slide'+usuarioLenght).jRange({
    from: 0,
    to: 10,
    step: 1,
    scale: [0,10],
    format: '%s',
    width: "auto",
    showLabels: true,
    onstatechange:function(value){
     
    }
    });

  $('#song-slide'+usuarioLenght).jRange({
    from: 0,
    to: 10,
    step: 1,
    scale: [0,10],
    format: '%s',
    width: "auto",
    showLabels: false,
    onstatechange:function(value){
      
    }
  });

  $('#video-slide'+usuarioLenght).jRange({
  from: 0,
  to: 90,
  step: 1,
  scale: [0,90],
  format: '%s',
  width: "auto",
  showLabels: false,
    onstatechange:function(value){
    
    }
  });

  $('#internet-slide'+usuarioLenght).jRange({
  from: 0,
  to: 100,
  step: 1,
  scale: [0,100],
  format: '%s',
  width: "auto",
  showLabels: false,
    onstatechange:function(value){
      
    }
   });

  $('#aplication-slide'+usuarioLenght).jRange({
  from: 0,
  to: 30,
  step: 1,
  scale: [0,30],
  format: '%s',
  width: "auto",
  showLabels: false,
   onstatechange:function(value){
      
    }
  });

  $('#email-slide'+usuarioLenght).jRange({
  from: 0,
  to: 100,
  step: 1,
  scale: [0,100],
  format: '%s',
  width: "auto",
  showLabels: false, 
   onstatechange:function(value){
      
    }
  });

  $('#documents-slide'+usuarioLenght).jRange({
  from: 0,
  to: 20,
  step: 1,
  scale: [0,20],
  format: '%s',
  width: "auto",
  showLabels: true,
  onstatechange:function(value){
          }

  });
  }
}


function aumentar(){
  $("#nuevo").trigger('click');
}

function uAumenta(){
  if(usuarioLenght<6){
  usuarioLenght+=1;
  }

  console.log(usuarioLenght);
}

function Usuario(){
  this.id;
  this.nombre = "Usuario";
}

var usuarioLenght;



/******************************************************
******************************************************
******************************************************
******************************************************/

var telcelApp = angular.module('telcel',[]);

telcelApp.controller('calculadoraDatos', ['$scope', '$http', function($scope, $http) {
    $scope.valor = 2;
    $scope.userSelected = 0;

    $scope.usuarios = [];
    usuarioLenght = $scope.usuarios.length;

    var userDefault = new Usuario();
    userDefault.nombre = "Mi usuario";
    userDefault.id = 0;

    $scope.usuarios.push(userDefault);

    $scope.nuevo = function(){
      if($scope.usuarios.length<6){
      var nuevoUsuario = new Usuario();
      nuevoUsuario.id = $scope.usuarios.length;      
      $scope.usuarios.push(nuevoUsuario);
    }
      else
        alert("Solo se puede agregar un maximo de 6 usuarios");
    };

    $scope.seleccionarOtro = function(_id){
      $scope.userSelected = _id;
      var x = 0;
      for (var i = $scope.usuarios.length - 1; i >= 0; i--) {
        x += $scope.usuarios[i].id;

      };

    };

}]);


