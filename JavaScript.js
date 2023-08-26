function checkAns() {
    var score = parseInt(document.querySelector("#score").textContent,10);
    var ans = this.value;
    switch (ans) {
        case "c1":
            score += 1;
            break;
        case "b2":
            score += 1;
            break;
        case "b3":
            score += 1;
            break;
        case "d4":
            score += 1;
            break;
        case "d5":
            score += 1;
            break;
        default:
            break;
    }
    document.querySelector("#score").textContent = score;
}

function result() {
    var score = parseInt(document.querySelector("#score").textContent,10);
    if (score == 0) {
        var m = "Oops! Better brush up on your Marvel knowledge."
    }
    else if (score < 3) {
        var m = "It's Ok! Better luck again next time!"
    }
    else {
        var m = "Wow! I see a true Marvel fan here!"
    }
    document.querySelector("#msg").textContent = m;
    var x = document.querySelector(".result");
    x.style.width = "auto";
    x.style.height = "400px";
    x.style.fontWeight = "bolder";
    x.style.fontSize = "50px";
    x.style.visibility = "visible";
    document.querySelector("#HomePage").style.visibility = "visible";
    document.querySelector("#Submit").remove();
}

var i=0;
for (i=0;i<20;i++) {
    document.querySelectorAll("input")[i].addEventListener("click",checkAns);
}

document.querySelector("button").addEventListener("click",result);
