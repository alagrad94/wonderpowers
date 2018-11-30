document.querySelector("#activate-flight").addEventListener("click", god);
document.querySelector("#activate-mindreading").addEventListener("click", god);
document.querySelector("#activate-xray").addEventListener("click", god);
document.querySelector("#activate-all").addEventListener("click", toggleAll);
document.querySelector("#deactivate-all").addEventListener("click", toggleAll);

function god () {
    whichButton = event.target.id.split("-")[1];
    console.log(whichButton);
    document.querySelector(`#${whichButton}`).classList.remove("disabled");
    document.querySelector(`#${whichButton}`).classList.add("enabled");
};

function toggleAll () {
    let powers = document.querySelectorAll(".power");
    for (let i = 0; i < powers.length; i++) {
        const power = powers[i];
        if (event.target.id === "activate-all") {
            power.classList.remove("disabled");
            power.classList.add("enabled");

        } else if (event.target.id === "deactivate-all") {
            power.classList.remove("enabled");
            power.classList.add("disabled");
        }
    }
};

// function flightHandler () {
//     document.querySelector("#flight").classList.remove("disabled");
//     document.querySelector("#flight").classList.add("enabled");
// };

// function mindreadingHandler () {
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled");
// };

// function xrayHandler () {
//     document.querySelector("#xray").classList.remove("disabled");
//     document.querySelector("#xray").classList.add("enabled");
// };

// function activateAll () {
//     flightHandler();
//     mindreadingHandler();
//     xrayHandler();
// };