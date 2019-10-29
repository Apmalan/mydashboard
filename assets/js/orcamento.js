const materialSelect = document.getElementById("material-select");

const materialList = ["Lapis", "Borracha", "Cola", "Caneta"];

materialList.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialSelect.options[materialSelect.options.length] = option;
  });

 

$("#nomeAluno").focusout(function(){
  validation()
  });

  $("#idvalorPagar").focusout(function(){
    validation()
    });

function validation(){
    if($("#nomeAluno").valid() && $("#idvalorPagar").valid()){
         // campos vazios
       $("#add1").prop("disabled", true);
       
     }else{
         $("#add1").prop("disabled", false);
         
     }
  
  }
  
  function inserirDados(){
      
  }