let doener = document.getElementById("doener")
let item = document.getElementById("item")
let counter = document.getElementById("counter")
let budgetcounter = document.getElementById("budgetcounter")

let points = 0;
let budget = 0;

let budgetcount = function() {
    budget = budget + 10;
    budgetcounter.innerHTML = budget;
}

let doenerclick = function(e){
        points = points + 1;
        counter.innerHTML = points;
        if(budget >= 190) {
            item.classList.remove("hidden");
        }
}

let minus200 = function(e){
    budget = budget - 200;
    budgetcounter.innerHTML = budget;
    if(budget < 190) {
        item.classList.add("hidden");
    }   
}


doener.addEventListener("click", doenerclick);
item.addEventListener("click", minus200);
doener.addEventListener("click", budgetcount);

/* 
if(budget === 200) {
    item.classList.remove("hidden");
} */
