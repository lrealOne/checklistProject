const elementos = [
  { tag: "p", texto: "TEXTO1" },
  { tag: "div", texto: "TEXT02" },
  { tag: "footer", texto: "TEXT03" },
  { tag: "section", texto: "TEXT03" },
];

const container = document.querySelector(".container");
let div = document.createElement("div");

for (let i = 0; i < elementos.length ; i++) {
  let { tag, texto } = elementos[i];
  let newTag = document.createElement(tag);
  div.appendChild(newTag)
  newTag.innerHTML = texto;
}

container.appendChild(div)
