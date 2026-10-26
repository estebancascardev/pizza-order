const orderList = document.querySelector("form");
const stepOne = document.querySelector("#start");
const stepTwo = document.querySelector("#process");
const stepThree = document.querySelector("#end");
const stepFourth = document.querySelector("#final");
const stepError = document.querySelector("#error");
const button = document.querySelector("#submit");

const random = () => {
    return Math.random() < 0.8; 
};

const pizzaOrderStart = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Pedido realizado, entregando su bebida") : reject("Pedido fallido");}, 2000);
});

const pizzaOrderProcess = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Bebida entregada, espere un momento por la pizza") : reject("Pedido fallido");}, 4000);
});

const pizzaOrderFinish = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Pizza entregada, espere por su postre") : reject("Pedido fallido");}, 6000);
});

const pizzaOrder = () => new Promise((resolve, reject) => {
    setTimeout(()=>{random() ? resolve("Postre entregado, disfrute su comida") : reject("Pedido fallido");}, 8000);
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
            return pizzaOrder(processFinish)
        }).then(processFinal =>{
            console.log(processFinal)
            stepFourth.innerHTML = processFinal;
        }).catch(processFail=>{
            console.log(processFail);
            stepError.innerHTML = processFail;
        });
});