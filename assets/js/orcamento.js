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
  
  var aluno = {};
var listaAlunos = [];

function validarForm() {
    return $('#nomeAluno').valid() &&
           $("#primeiroBi").valid() &&
           $("#segundoBi").valid() &&
           $("#terceiroBi").valid() &&
           $("#quartoBi").valid();
}

function feedbackFormValidacao() {

    if ($('#nomeAluno').valid()) {
        $('#nomeAluno').removeClass('is-invalid');
    } else {
        $('#nomeAluno').addClass('is-invalid');
    }
}

function adicionarAluno() {

    var formValido = validarForm();

    if (formValido) {
        aluno.nome = $("#nomeAluno").val();
        aluno.nota2 = parseInt($("#segundoBi").val());
        aluno.nota3 = parseInt($("#terceiroBi").val());
        aluno.nota4 = parseInt($("#quartoBi").val());
        aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
        aluno.media = calcularMedia(aluno.total);
        aluno.situacao = calcularSituacao(aluno.media);

        adicionarLinhaTabela(aluno);

        aluno = {};
        $(":input").val("");

    } else {
        feedbackFormValidacao();
    }
}

function calcularTotal(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}

function calcularMedia(valor) {
    return valor / 4;
}

function calcularSituacao(media) {
    const MEDIA_APROVACAO = 7;

    if (media >= MEDIA_APROVACAO) {
        return "<span class='badge badge-success'>APROVADO</span>";
    } else {
        return "<span class='badge badge-danger'>REPROVADO</span>";
    }
}

function adicionarLinhaTabela(objeto) {
    var tabela = document.querySelector("table");
    var tr = tabela.insertRow();
    tr.innerHTML = "<td>" + objeto.nome + "</td>" +
        "<td>" + objeto.nota1 + "</td>" +
        "<td>" + objeto.nota2 + "</td>" +
        "<td>" + objeto.nota3 + "</td>" +
        "<td>" + objeto.nota4 + "</td>" +
        "<td>" + objeto.total + "</td>" +
        "<td>" + objeto.media + "</td>" +
        "<td>" + objeto.situacao + "</td>";
}

function deletarLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    //document.getElementById('tableAlunos').deleteRow(index)
}


function adicionarNaTabela(aluno) {
    console.log();
    var table = document.querySelector("table");
    var tr = table.insertRow();


    tr.innerHTML = "<td>" + aluno.nome + "</td><td>" + aluno.nota1 + "</td><td><button type='button' onclick='deletarLinha(this)'>excluir</td>";

}