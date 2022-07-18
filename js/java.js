'use strict';

const formEL= document.getElementById("formID");
const perentEL = document.getElementById("foodtable");

let foodID=0;

function Food(name,type,price){
    this.id= foodID++;
    this.name = name;
    this.type = type;
    this.price = price;


}
formEL.addEventListener("submit", handelSubmit);

function handelSubmit(event){
  event.preventDefault();
  
let name = event.target.foodName.value;
let type = event.target.foods.value;
let price = event.target.price.value;
let food = new Food(name,type,price);
food.render();
savedata();



}
function savedata(){
  let strifyedData =JSON.stringify(Food);
  localStorage.setItem("food",strifyedData);

}
savedata();

function getdata(){


  let retrivedData= localStorage.getItem("foods");
  let parsedData=JSON.parse(retrivedData);
}
getdata();

Food.prototype.render=function(){

    let trEL= document.createElement("tr");
    trEL.innerHTML=`
    <td>${this.id}</td>
    <td>${this.name}</td>
    <td>${this.type}</td>
    <td>${this.price}</td>
    `;

     perentEL.appendChild(trEL);

    

};


 













