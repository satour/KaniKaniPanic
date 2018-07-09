let formation = [KANI, KANI_DEKAI, KANI_HAYAI, KANI_CHOTT_HAYAI]

for (var i = formation.length - 1; i >= 0; i--){
  let rand = Math.floor( Math.random() * ( i + 1 ) );
  [formation[i], formation[rand]] = [formation[rand], formation[i]]
}

document.getElementById("kani_1").innerHTML = formation[0];
document.getElementById("kani_2").innerHTML = formation[1];
document.getElementById("kani_3").innerHTML = formation[2];
document.getElementById("kani_4").innerHTML = formation[3];

let cd = setInterval('count_down();',1000);
setTimeout('clearInterval(cd);document.getElementById("kani_zone").innerHTML = BUTTON_REPLAY;',10000);

function count_down(){
  let t = document.getElementById("time");
  t.innerHTML = parseInt(t.innerHTML, 10) - 1;
};

function hit(el){
  let cp = document.getElementById("point_o");
  cp.innerHTML = parseInt(cp.innerHTML, 10) + 1;;
};