window.onload = function() {
  let inputs = $(":input");
  inputs.slideDown(3000, function() {
    alert("I don't feel so good...");
  });
};