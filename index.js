document.getElementById("button1").onclick = function() {
    let counter = document.getElementById("counter");
    let count = parseInt(counter.textContent);
    counter.textContent = count - 1;
};

document.getElementById("button2").onclick = function() {
    document.getElementById("counter").textContent = "0";
};

document.getElementById("button3").onclick = function() {
    let counter = document.getElementById("counter");
    let count = parseInt(counter.textContent);
    counter.textContent = count + 1;
};
