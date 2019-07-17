function copyText(str) {
  var dummyContent = str;
  var dummy = $('<input>').val(dummyContent).appendTo('body').select()
  document.execCommand('copy')
  alert("Copied to clipboard!")
}
