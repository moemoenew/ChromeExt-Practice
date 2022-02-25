window.onload = () => {
  const btn = document.createElement("button");
  btn.id = "btnDark";
  btn.textContent = "Dark Mode";
  btn.addEventListener("click", () => enableDarkMode());
  document.querySelector("#end").prepend(btn);
};

function enableDarkMode() {
  document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "black";
}
