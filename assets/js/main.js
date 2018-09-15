let doener = document.getElementById("doener")
let item = document.getElementById("item")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let counter = document.getElementById("counter")
let budgetcounter = document.getElementById("budgetcounter")
var budgetprice = 10

let points = 0;
let budget = 0;

let budgetcount = function() {
    budget = budget + budgetprice;
    budgetcounter.innerHTML = budget;
}

let doenerclick = function(e){
        points = points + 1;
        counter.innerHTML = points;
        if(budget >= 190) {
            item.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 190) {
                item.classList.add("hidden");
            }
        }, 100);
        if(budget >= 290) {
            item2.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 290) {
                item2.classList.add("hidden");
            }
        }, 100);
        if(budget >= 390) {
            item3.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 390) {
                item3.classList.add("hidden");
            }
        }, 100);
}

let minus200 = function(e){
    budget = budget - 200;
    budgetcounter.innerHTML = budget;
    budgetprice = 11
}

let minus300 = function(e){
    budget = budget - 300;
    budgetcounter.innerHTML = budget;
    budgetprice = 13
}

let minus400 = function(e){
    budget = budget - 400;
    budgetcounter.innerHTML = budget;
    budgetprice = 15
}


doener.addEventListener("click", doenerclick);
item.addEventListener("click", minus200);
item2.addEventListener("click", minus300);
item3.addEventListener("click", minus400);
doener.addEventListener("click", budgetcount);