function inputFailures (){

var inputAssetName = document.getElementById("asset_name");
var asset_name = inputAssetName.value;  

var inputAssetTag = document.getElementById("asset_tag");
var asset_tag = inputAssetTag.value; 

var  inputfailurenumbers = document.getElementById("failurenumbers");
var quantidade = parseInt(inputfailurenumbers.value) + parseInt(1);





if(quantidade =="" || asset_name =="" || asset_tag =="")
{
alert( "Preencha todos os campos para prosseguir." );
return false;
}



var conteudo="";
for(i = 1; i< quantidade; i++){
    conteudo +=('<div class="inputfalhas">')+('<label class="labels_failures" for="falha'+i+'">Falha '+i+'</label>')+('<input type="text"  class="falha" id="falha'+i+'"name="falha'+i+'"  label="falha'+i+'"/>')+('</div>')+('<input type="text"  class="tef" id="tef'+i+'"name="tef'+i+'"  label="tef'+i+'" required>');
  
    
};

var botao =('<button class="btn_calc" id="btn_calc" onclick="soma()"> Calcular </button>');


document.getElementById("ttef").innerHTML=conteudo;
document.getElementById("btn").innerHTML=botao;

let timeline = document.querySelector(".timeline")
timeline.style.display= 'block';

}

function soma () {

var tttef = 0;
$('.tef').each(function(){
    tttef+= parseFloat(this.value);
});

var tpr = 0;
$('.falha').each(function(){
    tpr+= parseFloat(this.value);
});

console.log(tttef);
console.log(tpr);

var inputfailurenumbers = document.getElementById("failurenumbers");
var quantidade = inputfailurenumbers.value;
var mtbf = tttef / quantidade;
var mttr = tpr / quantidade;
var disponibilidade = mtbf / (mtbf+mttr)*100
var indisponibilidade = 100 - disponibilidade;

console.log(mtbf);
console.log(mttr);
console.log(disponibilidade);

document.getElementById("mtbf").innerHTML=`<p> MTBF= ${mtbf.toFixed(2)} horas</p>`;
document.getElementById("mttr").innerHTML=`<p> MTTR= ${mttr.toFixed(2)} horas</p>`;
document.getElementById("disponibilidade").innerHTML=`<p> Disponibilidade= ${disponibilidade.toFixed(2)}% </p>`;
document.getElementById("indisponibilidade").innerHTML=`<p> Indisponibilidade= ${indisponibilidade.toFixed(2)}% </p>`;


var residual = 100-disponibilidade;
var xlabels_d = ['Tempo Disponível (%)', 'Tempo Indisponível (%)'];
var ydatas_d = [disponibilidade.toFixed(2), residual.toFixed(2)];

var ctx = document.getElementsByClassName("grafico_d");
        
var ChartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: xlabels_d,
        

        datasets: [ {
            data: ydatas_d,
            borderWidth: 6,
            borderColor: 'rgb(219, 0, 0,0)',
            backgroundColor: ['rgb(6, 182, 6)', 'rgb(219, 0, 0)'],

             
            
        }]
    },
    
    
    options: {
        title: {
            display: true,
            fontSize: 20,
            fontStyle: "bold",
            text: "Disponibilidade Inerente (%)",
        },

     
    }

    
    
    
});


let results = document.querySelector(".results")
results.style.display= 'grid';

let footer = document.querySelector(".footer")
footer.style.position= 'relative';

let btn_print = document.querySelector(".btn_print")
btn_print.style.display= 'inline';





}






























