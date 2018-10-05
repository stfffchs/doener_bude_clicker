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
let budget = 0;

let budgetcount = function() {
    budget = budget + budgetprice;
    budgetcounter.innerHTML = budget;
    price.innerHTML = budgetprice;
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
        if(budget >= 490) {
            item4.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 490) {
                item4.classList.add("hidden");
            }
        }, 100);
}

let minus200 = function(e){
    budget = budget - 200;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 1
    price.innerHTML = budgetprice;
}

let minus300 = function(e){
    budget = budget - 300;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 3
    price.innerHTML = budgetprice;
}

let minus400 = function(e){
    budget = budget - 400;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 5
    price.innerHTML = budgetprice;
}

let minus500 = function(e){
    budget = budget - 500;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 10
    price.innerHTML = budgetprice;
}


doener.addEventListener("click", doenerclick);
item.addEventListener("click", minus200);
item2.addEventListener("click", minus300);
item3.addEventListener("click", minus400);
item4.addEventListener("click", minus500);
doener.addEventListener("click", budgetcount);