const orderList = document.querySelector("form");
const stepOne = document.querySelector("#start");
const stepTwo = document.querySelector("#process");
const stepThree = document.querySelector("#end");
const stepError = document.querySelector("#error");
const button = document.querySelector("#submit");

const random = () => {
    return Math.random() < 0.8; 
};

const pizzaOrderStart = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Pedido realizado") : reject("Pedido fallido");}, 2000);
});

const pizzaOrderProcess = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Pedido en proceso, espere un momento") : reject("Pedido fallido");}, 4000);
});

const pizzaOrderFinish = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Pedido finalizado, disfrute su pizza") : reject("Pedido fallido");}, 6000);
});

orderList.addEventListener("submit", async e =>{
    e.preventDefault();
    button.setAttribute("disabled", "true");
    pizzaOrderStart()
        .then(response => {
            console.log(response);
            stepOne.innerHTML = response;
            return pizzaOrderProcess(response);
        }).then(processResponse => {
            console.log(processResponse);
            stepTwo.innerHTML = processResponse;
            return pizzaOrderFinish(processResponse);
        }).then(processFinish => {
            console.log(processFinish);
            stepThree.innerHTML = processFinish;
        }).catch(processFail=>{
            console.log(processFail);
            stepError.innerHTML = processFail;
        });
});