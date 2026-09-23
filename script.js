fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
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
