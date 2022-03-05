function reverse(form) {
  var text = "";
  var str = form.rev.value;
  for (i = 0; i <= str.length; i++) text = str.substring(i, i + 1) + text;
  form.rev.value = text;
}
