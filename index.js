function reverse(form) {
  var str = form.rev.value;
  if (str === "") {
    alert("Please enter a value first")
    return;
  }
  if (isPalindrome(str)) {
    console.log("Palindrome reads the same backwards as forwards");
    return;
  }

  var text = "";

  for (i = 0; i <= str.length; i++) {
    text = str.substring(i, i + 1) + text;
  }

  document.getElementById("reversed-text").innerHTML = text;
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
