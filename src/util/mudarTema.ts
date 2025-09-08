export function mudarTema() {
  const body = document.getElementById("body") as HTMLElement;
  if (body.classList.contains("tema--claro")) {
    body.classList.add("tema--escuro")
    body.classList.remove("tema--claro")
  } else {
    body.classList.add("tema--claro")
    body.classList.remove("tema--escuro")
  }
}