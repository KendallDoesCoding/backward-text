function reverse(word) {
  if (isPalindrome(word)) {
    console.log("Palindrome reads the same backwards as forwards");
    return;
  }

  var text = "";

  for (i = 0; i <= word.length; i++) {
    text = word.substring(i, i + 1) + text;
  }

  document.getElementById("reversed-text").innerHTML = text;
}


function copyReversedText() {
  var copiedText = document.getElementById("reversed-text").innerHTML;
  if (copiedText.length > 0) {
    navigator.clipboard.writeText(copiedText);
  } else {
    alert("You must enter text before copying.")
  }
}

function isPalindrome(str) {
  for (i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
}

// form submission invokes function reverse
document.getElementById("text-form").addEventListener("submit", (event) => {
  event.preventDefault();
  var str = document.getElementById("text").value
  reverse(str)
});

// copy button invokes function copy text
document.getElementById("copy-button").addEventListener("click", (event) => {
  event.preventDefault();
  copyReversedText()
});