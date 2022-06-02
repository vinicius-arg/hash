const moveInputs = document.querySelectorAll(".game__input");
const p1TurnShower = document.querySelector(".p1-info__turn");
const p2TurnShower = document.querySelector(".p2-info__turn");

const xIMG = "./assets/images/x.svg";
const oIMG = "./assets/images/o.svg";
let turn = xIMG;

const changeTurn = () => {
    if (turn == xIMG) {
        turn = oIMG;
    } else {
        turn = xIMG;
    }
}

for (input of moveInputs) {
    input.addEventListener("click", function () {
        if (!this.style.backgroundImage) {
            this.style.backgroundImage = 
            `url(${turn})`;
            changeTurn();
            if (turn == xIMG) {
                p1TurnShower.classList.add("p1-info__turn--enabled");
                p2TurnShower.classList.remove("p2-info__turn--enabled");
            } else {
                p2TurnShower.classList.add("p2-info__turn--enabled");
                p1TurnShower.classList.remove("p1-info__turn--enabled");
            }
        } else {

        }
    });
}