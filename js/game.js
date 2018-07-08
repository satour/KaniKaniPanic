document.getElementById("kani_1").innerHTML = KANI;
document.getElementById("kani_2").innerHTML = KANI_DEKAI;
document.getElementById("kani_3").innerHTML = KANI_HAYAI;
document.getElementById("kani_4").innerHTML = KANI_CHOTT_HAYAI;

let cd = setInterval('count_down();',1000);
setTimeout('clearInterval(cd);document.getElementById("kani_zone").innerHTML = BUTTON_REPLAY;',10000);

function count_down(){
  let t = document.getElementById("time");
  t.innerHTML = parseInt(t.innerHTML, 10) - 1;
};

function hit(el){
  let cp = document.getElementById("point_o");
  cp.innerHTML = parseInt(cp.innerHTML, 10) + 1;;
  console.log(el);
};