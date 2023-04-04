let target = document.querySelector("#dynamic");
let deg = 0;

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function blink() {
    target.classList.toggle("active");
}

function rotate() {
    deg = deg - 90;
    document.querySelector(".cube").style.transform = 'rotateX(' + deg + 'deg)';
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);;
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

setInterval(blink, 500);
setInterval(rotate, 1000);