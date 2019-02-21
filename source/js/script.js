document.querySelector("input[name='caption']").onkeyup = function () {
  document.querySelector('.example').textContent = document.querySelector("input[name='caption']").value;
}
