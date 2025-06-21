const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", handleChange);

const handleStyle = {
  Element: btn,
  backgroundColor(value) {
    this.Element.style.backgroundColor = value;
  },
  height(value) {
    this.Element.style.height = value + "px";
  },
  width(value) {
    this.Element.style.width = value + "px";
  },
  texto(value) {
    this.Element.innerText = value;
  },
  color(value) {
    this.Element.style.color = value;
  },
  border(value) {
    this.Element.style.border = value;
  },
  borderRadius(value) {
    this.Element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.Element.style.fontFamily = value;
  },
  fontSize(value) {
    this.Element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showCss();
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
