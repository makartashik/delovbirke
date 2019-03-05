document.querySelector("input[name='caption']").onkeyup = function () {
  document.querySelector('.example, .example-ribbon, .example-sticker').textContent = document.querySelector("input[name='caption']").value;
};

// document.querySelector("input[name='caption-ribbon']").onkeyup = function () {
//   document.querySelector('.example-ribbon').textContent = document.querySelector("input[name='caption-ribbon']").value;
// };
