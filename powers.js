document.querySelector("#activate-flight").addEventListener("click", flightHandler);
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandler);
document.querySelector("#activate-xray").addEventListener("click", xrayHandler);
document.querySelector("#activate-all").addEventListener("click", activateAll);
document.querySelector("#deactivate-all").addEventListener("click", deactivateAll);

function flightHandler () {
    document.querySelector("#flight").classList.remove("disabled");
    document.querySelector("#flight").classList.add("enabled");
};

function mindreadingHandler () {
    document.querySelector("#mindreading").classList.remove("disabled");
    document.querySelector("#mindreading").classList.add("enabled");
};

function xrayHandler () {
    document.querySelector("#xray").classList.remove("disabled");
    document.querySelector("#xray").classList.add("enabled");
};

function activateAll () {
    flightHandler();
    mindreadingHandler();
    xrayHandler();
};

function deactivateAll () {
    let powers = document.querySelectorAll(".power");
    for (let i = 0; i < powers.length; i++) {
        const power = powers[i];
        power.classList.remove("enabled");
        power.classList.add("disabled");
        
    }
};