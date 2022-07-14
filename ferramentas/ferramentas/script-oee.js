function show (){
  var inputAssetName = document.getElementById("asset_name");
  var asset_name = inputAssetName.value; 

  var inputAssetTag = document.getElementById("asset_tag");
  var asset_tag = inputAssetTag.value; 

  var inputInitialDate= document.getElementById("initial_date");
  var initial_date= inputInitialDate.value;

  var inputFinalDate= document.getElementById("final_date");
  var final_date= inputFinalDate.value;

  if(asset_name =="" || asset_tag ==""  || initial_date =="" || final_date =="")
  {
  alert( "Preencha todos os campos para prosseguir.");
  return false;
  }

  let input_area = document.querySelector(".input_area")
  input_area.style.display= 'inline-block';




}

function calcular (){

var input_work_hours = document.getElementById("work_hours");
var input_work_days = document.getElementById("work_days");

var work_hours = input_work_hours.value;
var work_days = input_work_days.value;

var total_time = work_hours * work_days;

console.log(total_time);

var input_preventive_time = document.getElementById("preventive_time");
var input_food_time = document.getElementById("food_time");
var input_non_schedule_time = document.getElementById("non_schedule_time");

var preventive_time = input_preventive_time.value;
var food_time = input_food_time.value*work_days;
var idle_time = input_non_schedule_time.value;

var scheduled_downtime = (parseInt(preventive_time) + parseInt(food_time)); 

console.log(food_time);

console.log(idle_time);

let schedule_time = total_time - idle_time;
console.log(schedule_time);


var downtime_events = 0;
$('.downtime_event').each(function(){
    downtime_events+= parseFloat(this.value);
});

var downtime_events_minutes = 0;
$('.downtime_event_minutes').each(function(){
    downtime_events_minutes+= parseFloat(this.value)/60;
});



console.log(downtime_events);

console.log(downtime_events_minutes);

var total_downtime = (downtime_events + downtime_events_minutes)+scheduled_downtime;

var uptime = schedule_time - total_downtime;

console.log(uptime);

console.log(total_downtime);

var failures = $('.failure').length

var setups = $('.setup').length


//var small_stops = document.querySelector();
//var slow_speed = document.querySelector();
//var scrap_setup = document.querySelector();
//var scrap_process = document.querySelector();



var input_standard_time = document.getElementById("standard_time");
var standard_time = input_standard_time.value;

var input_unittimes = document.getElementById("unittimes");
var unittimes = input_unittimes.value;

if (unittimes == "Por hora"){
  cycle = 1
}
else if (unittimes =="Por minuto"){
  cycle = 60
}

else if (unittimes =="Por segundo"){
  cycle = 3600
}

var speed_cycle = standard_time * cycle;

console.log(cycle);

console.log(speed_cycle);

var input_produced_qtd = document.getElementById("produced_qtd");
var produced_qtd = input_produced_qtd.value;

var input_scrap = document.getElementById("scrap");
var scrap = input_scrap.value;

var performance_efficiency = ((parseInt(produced_qtd) + parseInt(scrap))/uptime)/speed_cycle;

var quality_rate = (produced_qtd - scrap)/produced_qtd;

var availability = (uptime/schedule_time);

var oee = (performance_efficiency*quality_rate*availability)*100
var oee_gauge = oee/100;


var availability_p = availability*100
var performance_efficiency_p = performance_efficiency*100
var quality_rate_p = quality_rate*100

console.log(oee);

var oee_label = document.querySelector('.gauge');
var oee_body = document.querySelector('.gauge__fill')

if (oee <40){
    oee_label.style.color='#ff0000';
    oee_body.style.background='linear-gradient(to top ,#c20000, #ff0000)';
    document.getElementById("oee_status").innerHTML=`<p>Péssimo!</p> <img class="oee_status_icon" src="img/bad.svg"> <div class="tooltips" ><i class="fas fa-question-circle" class="tooltips"></i> <span> OEE menor que 40% = Péssimo; <br> OEE de 41% a 60% = Ruim; <br> OEE de 61% a 85% = Mediano; <br> OEE acima de 85% = Classe Mundial. </span></div>`;
    oee_status.style.color='red'}

else if (oee >=40 && oee<59.9999){
  oee_label.style.color='#ff6200';
  oee_body.style.background='linear-gradient(to top ,#c20000, #ff9500)';
  document.getElementById("oee_status").innerHTML=`<p>Ruim!</p> <img class="oee_status_icon" src="img/neutral.svg"> <div class="tooltips" ><i class="fas fa-question-circle" class="tooltips"></i> <span> OEE menor que 40% = Péssimo; <br> OEE de 41% a 60% = Ruim; <br> OEE de 61% a 85% = Mediano; <br> OEE acima de 85% = Classe Mundial. </span></div>`;
  oee_status.style.color='#ff6200'}

else if (oee >=60 && oee<85){
    oee_label.style.color='#02980c';
    oee_body.style.background='linear-gradient(270deg, rgba(10,213,193,1) 18%, rgba(2,152,12,1) 100%)';
    document.getElementById("oee_status").innerHTML=`<p>Mediano!</p> <img class="oee_status_icon" src="img/medium.svg"> <div class="tooltips" ><i class="fas fa-question-circle" class="tooltips"></i> <span> OEE menor que 40% = Péssimo; <br> OEE de 41% a 60% = Ruim; <br> OEE de 61% a 85% = Mediano; <br> OEE acima de 85% = Classe Mundial. </span></div>`;
    oee_status.style.color='#02980c'}

else if (oee >85){
    oee_label.style.color='#02980c';
    oee_body.style.background='linear-gradient(90deg, rgba(2,152,12,1) 16%, rgba(0,255,29,1) 75%)';
    document.getElementById("oee_status").innerHTML=`<p>Ótimo! Classe Mundial!</p> <img class="oee_status_icon" src="img/star.svg"> <div class="tooltips" ><i class="fas fa-question-circle" class="tooltips"></i> <span> OEE menor que 40% = Péssimo; <br> OEE de 41% a 60% = Ruim; <br> OEE de 61% a 85% = Mediano; <br> OEE acima de 85% = Classe Mundial. </span></div>`;
    oee_status.style.color='green'}    
else {
    oee_label.style.color='#0058a6';
    oee_body.style.background='linear-gradient(to top ,rgb(00, 88, 166),rgb(00, 88, 166))'
    }

document.getElementById("availability_data").innerHTML=`<p>${availability_p.toFixed(2)} %</p>`;
document.getElementById("performance_data").innerHTML=`<p>${performance_efficiency_p.toFixed(2)} %</p>`;
document.getElementById("quality_data").innerHTML=`<p>${quality_rate_p.toFixed(2)} %</p>`;

console.log(failures);

document.getElementById("a_data").innerHTML=`<p> ${availability_p.toFixed(2)}% </p>`;
document.getElementById("p_data").innerHTML=`<p> ${performance_efficiency_p.toFixed(2)}% </p>`;
document.getElementById("q_data").innerHTML=`<p> ${quality_rate_p.toFixed(2)}% </p>`;

document.getElementById("oee_data").innerHTML=`<p>${oee.toFixed(2)}% </p>`;

document.getElementById("uptime").innerHTML=`<p>${uptime.toFixed(2)}</p>`;
document.getElementById("total_time").innerHTML=`<p>${total_time.toFixed(2)}</p>`;
document.getElementById("idle_time").innerHTML=`<p>${idle_time}</p>`;

document.getElementById("a_data2").innerHTML=`<p>${availability_p.toFixed(2)}% </p>`;

document.getElementById("produced_qtd2").innerHTML=`<p>${parseInt(produced_qtd)}</p>`;
document.getElementById("scrap2").innerHTML=`<p>${parseInt(scrap)}</p>`;
document.getElementById("uptime2").innerHTML=`<p>${uptime.toFixed(2)}</p>`;
document.getElementById("speed_cycle").innerHTML=`<p>${speed_cycle}</p>`;

document.getElementById("p_data2").innerHTML=`<p>${performance_efficiency_p.toFixed(2)}% </p>`;

document.getElementById("produced_qtd3").innerHTML=`<p>${parseInt(produced_qtd)}</p>`;
document.getElementById("scrap3").innerHTML=`<p>${parseInt(scrap)}</p>`;
document.getElementById("produced_qtd4").innerHTML=`<p>${parseInt(produced_qtd)}</p>`;

document.getElementById("q_data2").innerHTML=`<p>${quality_rate_p.toFixed(2)} %</p>`;


document.getElementById("b1").innerHTML=`<p>${total_time.toFixed(2)}</p>`;
document.getElementById("b2").innerHTML=`<p>${idle_time}</p>`;
document.getElementById("b4").innerHTML=`<p>${preventive_time}</p>`;
document.getElementById("b5").innerHTML=`<p>${food_time}</p>`;
document.getElementById("b6").innerHTML=`<p>${setups}</p>`;
document.getElementById("b10").innerHTML=`<p>${uptime.toFixed(2)}</p>`;
document.getElementById("b11").innerHTML=`<p>${parseInt(produced_qtd)}</p>`;
document.getElementById("b13").innerHTML=`<p>${parseInt(scrap)}</p>`;
document.getElementById("b9").innerHTML=`<p>${failures}</p>`;

var good_pieces = produced_qtd - scrap;

document.getElementById("b12").innerHTML=`<p>${parseInt(good_pieces)}</p>`;

var input_unit_production = document.getElementById("unit_production");
var unit_production = input_unit_production.value;

document.getElementById("c11").innerHTML=`<p>${(unit_production)}</p>`;
document.getElementById("c12").innerHTML=`<p>${(unit_production)}</p>`;
document.getElementById("c13").innerHTML=`<p>${(unit_production)}</p>`;










//GRÁFICO VELOCÍMETRO OEE
const gaugeElement = document.querySelector(".gauge");


function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `OEE = ${Math.abs(
    value * 100
  ).toFixed(2)}% `;


}

setGaugeValue(gaugeElement, oee_gauge);

//BARRA DE PROGRESSO 

const progress = document.querySelector('.availability_progress-done');

progress.style.height = availability_p  + '%';
progress.style.opacity = 1;

const progress2 = document.querySelector('.performance_progress-done');

progress2.style.height = performance_efficiency_p + '%';
progress2.style.opacity = 1;

const progress3 = document.querySelector('.quality_progress-done');
progress3.style.height = quality_rate_p + '%';
progress3.style.opacity = 1;


const progress_loss1 = document.querySelector('.availability_progress_loss-done');
progress_loss1.style.width = availability_p  + '%';
progress_loss1.style.opacity = 1;

const progress_loss2 = document.querySelector('.performance_progress_loss');
progress_loss2.style.width = availability_p  + '%';

const progress_loss3 = document.querySelector('.performance_progress_loss-done');
progress_loss3.style.width = performance_efficiency_p  + '%';
progress_loss3.style.opacity = 1;

var quality_width = availability * performance_efficiency_p;

const progress_loss4 = document.querySelector('.quality_progress_loss');
progress_loss4.style.width = quality_width  + '%';
progress_loss4.style.opacity = 1;

                                                                                                                                                                                                                                                                                                                                                                                                                                   
var quality_width_done = quality_rate_p;

const progress_loss5 = document.querySelector('.quality_progress_loss-done');
progress_loss5.style.width = quality_width_done + '%';
progress_loss5.style.opacity = 1;

const progress_loss7 = document.querySelector('.oee_progress_loss-done');
progress_loss7.style.width =  + oee + '%';
progress_loss7.style.opacity = 1;

const mark_a = document.querySelector('.mark_a');
mark_a.style.marginLeft = availability_p  + '%';


const mark_p = document.querySelector('.mark_p');
mark_p.style.marginLeft= performance_efficiency_p  + '%';

const mark_q = document.querySelector('.mark_q');
mark_q.style.marginLeft = quality_width_done  + '%';

const oee_label_loss = document.querySelector('.oee_label_loss');
const oee_label_loss2 = document.querySelector('.oee_label_loss2');

if (oee <40){
  progress_loss7.style.background='linear-gradient(to top ,#c20000, #ff0000)';
  oee_label_loss.style.color='red';
  oee_label_loss2.style.color='red'}

else if (oee >=40 && oee<59.9999){
  progress_loss7.style.background='linear-gradient(to top ,#c20000, #ff9500)';
  oee_label_loss2.style.color='#ff6200';
  oee_label_loss.style.color='#ff6200'}

else if (oee >=60 && oee<85){
  progress_loss7.style.background='linear-gradient(270deg, rgba(10,213,193,1) 18%, rgba(2,152,12,1) 100%)';
  oee_label_loss2.style.color='#02980c';
  oee_label_loss.style.color='#02980c'}

else if (oee >85){
  progress_loss7.style.background='linear-gradient(90deg, rgba(2,152,12,1) 16%, rgba(0,255,29,1) 75%)';
  oee_label_loss2.style.color='green';
  oee_label_loss.style.color='green'}    
else {
  
  }



document.getElementById("availability_data_loss").innerHTML=`<p>${availability_p.toFixed(2)} %</p>`;
document.getElementById("performance_data_loss").innerHTML=`<p>${performance_efficiency_p.toFixed(2)} %</p>`;
document.getElementById("quality_data_loss").innerHTML=`<p>${quality_rate_p.toFixed(2)} %</p>`;
document.getElementById("oee_data_loss").innerHTML=`<p>${oee.toFixed(2)} %</p>`;

let unavailability = 100 - availability_p;
let unperformance = 100 - performance_efficiency_p;
let quality_losses = 100 - quality_rate_p;
let inefficiency = 100 - oee;

document.getElementById("unavailability").innerHTML=`<p>${unavailability.toFixed(2)} %</p>`;
document.getElementById("unperformance").innerHTML=`<p>${unperformance.toFixed(2)} %</p>`;
document.getElementById("quality_losses").innerHTML=`<p>${quality_losses.toFixed(2)} %</p>`;
document.getElementById("inefficiency").innerHTML=`<p>${inefficiency.toFixed(2)} %</p>`; 




let second_container = document.querySelector(".second_container")
second_container.style.display= 'block';

let chart_1 = document.querySelector(".chart_1")
chart_1.style.display= 'grid';

let chart_2 = document.querySelector(".chart_2")
chart_2.style.display= 'grid';

let btn_print = document.querySelector(".btn_print")
btn_print.style.display= 'inline';


}



// ADICIONA VÁRIAS MAIS EVENTOS DE DOWNTIME AO CLICAR NO BOTÃO "+" E REMOVE AO CLICAR NO BOTÃO "-"
var cont = 1;
 //https://api.jquery.com/click/
$("#add-campo").click(function () {
cont++;
//https://api.jquery.com/append/
$("#downtime_group").append('<div class="form-group"  id="campo' + cont + '"> <label class="label_downtime_list"> ' + cont + '</label> <input class="downtime_event" type="number" name="titulo[]" placeholder="Horas"> <input class="downtime_event_minutes" max="60" type="number" name="titulo[]" placeholder="Minutos"> <input list="downtime_classes" class="input_list" name="downtime_classes" id="downtime_class" placeholder="Tipo de Parada"> <datalist id="downtime_classes"> <option class="failure" value="Manutenção Corretiva"> <option class="setup" value="Parada Para Set-Up"> </datalist> <button type="button" id="' + cont + '" class="btn-remove"> - </button> </div>');

                
 });

            
$('#downtime_group').on('click', '.btn-remove', function () {
var button_id = $(this).attr("id");
$('#campo' + button_id + '').remove();
});





         
            
