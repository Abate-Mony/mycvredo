window.onload = function () {
  const toggleBtn = [...document.querySelectorAll(".toggle-theme-container")];
  const rElm = document.querySelector(":root");
  var rs = getComputedStyle(rElm);
  toggleBtn.forEach((btn, index, arr) => {
    btn.addEventListener("click", (e) => {
        // if(index==0)
        console.log(e.target.style.backgroundColor)
        const color=e.target.style.backgroundColor

      rElm.style.setProperty("--clr-pr", `${color}`);
    });
  });
};
