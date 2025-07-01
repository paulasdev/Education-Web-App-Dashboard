document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".courses-card div");
  const searchInput = document.getElementById("search-input");

  // Filter by category
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      document.querySelector(".filter-btn.active")?.classList.remove("active");
      button.classList.add("active");

      courseCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "All" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      searchInput.value = "";
    });
  });

  // Search filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    courseCards.forEach((card) => {
      const title = card
        .querySelector(".courseTitle")
        .textContent.toLowerCase();
      const desc = card
        .querySelector("p:last-of-type")
        .textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    document.querySelector(".filter-btn.active")?.classList.remove("active");
  });
});
