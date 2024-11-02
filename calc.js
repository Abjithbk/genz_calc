function getInput() {
    return parseFloat(document.getElementById("screen").value) || 0;
}

function setInput(value) {
    document.getElementById("screen").value = value;
}

function skibidi() {
    let num = getInput();
    setInput((num ** 2) / 7);
}

function fanumTax() {
    let num = getInput();
    setInput(num + (num * 0.18)); 
}

function slayy() {
    let num = getInput().toString();
    setInput(num.split("").reverse().join(""));
}

function glowUp() {
    let num = getInput().toString();
    setInput(num.replace(".", ""));
}

function yeeet() {
    
    document.getElementById("screen").value = "Yeeehh perfect 10 ";
}

function deadInside() {
    setInput(0);
}

function cancel() {
    const messages = ["The Answer is \"IDK Bro......\" ","Error,I am only a calculator NOOTT AA THERAAPPISTTT....","Operation Cancelled Due To Lack of vibes","Not Enough AURA,So No Answer"];
    const ranidx=Math.floor(Math.random()*messages.length);
    document.getElementById("screen").value = messages[ranidx];
}
function buttonClick(val) {
    document.getElementById("screen").value+=val
}
function clearDisplay() {
    document.getElementById("screen").value = " "
}
