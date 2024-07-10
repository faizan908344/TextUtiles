function showMessage() {
    var myText = document.getElementById("inputText").value;
    document.getElementById("displayText").innerHTML = myText;
    document.getElementById("displaySummary").style.display = "block";

    var wordSplit = myText.split(/\s+/);
    var totalWordCount = wordSplit.length;
    document.getElementById("wordCount").innerText = "The Total No of words in this message is: " + totalWordCount;

    var letterSplit = myText.replace(/\s+/g, '');
    var totalLetterCount = letterSplit.length;
    document.getElementById("letterCount").innerText = "The Total No of letters in this message is: " + totalLetterCount;

    document.getElementById("inputText").value= " ";
}

function textToUppercase() {
    var myText = document.getElementById("displayText").innerText;
    var uppercaseText = myText.toUpperCase();
    document.getElementById("upperTextTransform").innerHTML = uppercaseText;
    document.getElementById("textUppercase").style.display = "block";
}

function textToLowercase() {
    var myText = document.getElementById("displayText").innerText;
    var lowercaseText = myText.toLowerCase();
    document.getElementById("lowerTextTransform").innerHTML = lowercaseText;
    document.getElementById("textLowercase").style.display = "block";
}