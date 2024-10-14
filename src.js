function setUserQuote() {
    const userQuote = document.getElementById('userQuote').value;
    if (userQuote.trim() !== "") {
        document.getElementById('quoteText').innerText = userQuote;
    } else {
        alert("Please enter a quote.");
    }
}


function applyStyle() {
    const bgColor = document.getElementById('bgColor').value;
    const fgColor = document.getElementById('fgColor').value;
    const fontSize = document.getElementById('fontSize').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    const quoteBox = document.getElementById('quoteBox');
    quoteBox.style.backgroundColor = bgColor;
    quoteBox.style.color = fgColor;
    quoteBox.style.fontSize = fontSize + 'px';
    quoteBox.style.width = width + 'px';
    quoteBox.style.height = height + 'px';
}