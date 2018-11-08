let doener = document.getElementById("doener")
let item = document.getElementById("item")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let counter = document.getElementById("counter")
let budgetcounter = document.getElementById("budgetcounter")
let price = document.getElementById("price")

var budgetprice = 10

let points = 0;
let budget = 1;

let budgetcount = function() {
    budget = Math.ceil((budget + budgetprice) * 100)/100
    budgetcounter.innerHTML = budget;
    price.innerHTML = budgetprice;
}

let doenerclick = function(e){
        points = points + 1;
        counter.innerHTML = points;
        if(budget >= 1190) {
            item.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 1190) {
                item.classList.add("hidden");
            }
        }, 100);
        if(budget >= 3490) {
            item2.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 3490) {
                item2.classList.add("hidden");
            }
        }, 100);
        if(budget >= 4740) {
            item3.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 4740) {
                item3.classList.add("hidden");
            }
        }, 100);
        if(budget >= 18890) {
            item4.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 18890) {
                item4.classList.add("hidden");
            }
        }, 100);
}

let minus200 = function(e){
    budget = budget - 1200;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 0.3
    price.innerHTML = budgetprice;
}

let minus300 = function(e){
    budget = budget - 3500;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 1
    price.innerHTML = budgetprice;
}

let minus400 = function(e){
    budget = budget - 4750;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 1.5
    price.innerHTML = budgetprice;
}

let minus500 = function(e){
    budget = budget - 18900;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 2
    price.innerHTML = budgetprice;
}


doener.addEventListener("click", doenerclick);
item.addEventListener("click", minus200);
item2.addEventListener("click", minus300);
item3.addEventListener("click", minus400);
item4.addEventListener("click", minus500);
doener.addEventListener("click", budgetcount);

// Stopwatch variables
let time = document.getElementById("stopwatch"),
c=0, s=0, m=0, io=0, itv=null;

// Stopwatch functions
$("#doener").one("click", timerstart);

function padd(n) { // Zero padd minutes and seconds
    return n<10 ? "0"+n : n;
  }
  
function count() {
    c = ++c%100;
    if(!c) {
        s = ++s%60;
      if(!s) m=++m%60;
    }
    time.innerHTML = padd(m) +":"+ padd(s) +":"+ padd(c);
  }

  function timerstart() {
    io = !io;
    return itv = setInterval(count, 10); 
}

var miete;
miete = setInterval(function(){
    if (s == 3) {
        budget = budget - 5;
        budgetcounter.innerHTML = budget;
        s = 0;
    }
}, 1);

var gameoverscreen;
let gameover = document.getElementById("gameover");
gameoverscreen = setInterval(function() {
    if (budget <= 0) {
        clearInterval(itv);
        clearInterval(miete);
        gameover.classList.remove("hidden");
    }
}, 1);