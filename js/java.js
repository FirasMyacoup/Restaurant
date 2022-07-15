'use strict';

function food(FoodID,Name,Type,Price){
    this.FoodID=FoodID;
    this.Name=Name;
    this.Type=Type;
    this.Price=Price;


}

food.prototype.printfood=function(){

    const n1= document.createElement("p");
    n1.textContent=`<p>${this.foodName}:${this.price} $$</p>`;

}

const form = document.getElementById("formID");
 
form.addEventListener('submit', handelsubmit);

function handelsubmit(event){
event.preventdefault();


let foodName= event.target.foodName.value;
let foods= event.target.foods.value;
let price= event.target.price.value;





const newfood=new food("1",foodName,foods,price);
newfood.printfood();


}

