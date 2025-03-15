function reverse(form) {
  var str = form.rev.value;
  var copyButton = document.getElementById("copy-button");
  var resultText = document.getElementById("reversed-text");
  
  if (str === "") {
    alert("Please enter a value first")
    copyButton.disabled = true;
    return;
  }

  if (isPalindrome(str)) {
    console.log("Palindrome reads the same backwards as forwards");
    resultText.innerHTML = "This word is the same when reversed.";
    copyButton.disabled = true;
    return;
  }

  var text = "";

  for (i = 0; i <= str.length; i++) {
    text = str.substring(i, i + 1) + text;
  }

  resultText.innerHTML = text;
  copyButton.disabled = false;
}
function stopRefresh(event) {
  event.preventDefault();
  var reverseButton = document.getElementById("reverse-button");
  reverseButton.click();  
}

function copyReversedText() {

  var copiedText = document.getElementById("reversed-text").innerHTML;

  navigator.clipboard.writeText(copiedText);
}

function isPalindrome(str) {
  for (i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
