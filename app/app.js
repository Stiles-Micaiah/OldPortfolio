function copyText(str) {
  var dummyContent = str;
  var dummy = $('<input>').val(dummyContent).appendTo('body').select();
  document.execCommand('copy');
  alert("Copied to clipboard!");
}
function searchRepo(query) {
  event.preventDefault();
  window.open("https://github.com/Stiles-Micaiah?utf8=✓&tab=repositories&q=" + query.value + "&type=&language=");
  console.log(query);
}