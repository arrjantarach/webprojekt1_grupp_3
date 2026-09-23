fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("banner.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("banner").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
    const btn = document
      .getElementById("button")
      .addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" }),
      );
  });
