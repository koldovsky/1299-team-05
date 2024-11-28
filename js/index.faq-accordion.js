const itemTitles = document.querySelectorAll(".accordion__item-title");

itemTitles.forEach((itemTitle) => {
  itemTitle.addEventListener("click", () => {
    itemTitles.forEach((otherTitle) => {
      const otherContent = otherTitle.nextElementSibling;
      const otherIcon = otherTitle.querySelector(".accordion__item-title--icon");

      if (otherTitle !== itemTitle) {
        otherContent.classList.remove("active");
        otherIcon.style.transform = "rotate(0deg)";
      }
    });

    const itemContent = itemTitle.nextElementSibling;
    const itemIcon = itemTitle.querySelector(".accordion__item-title--icon");

    itemContent.classList.toggle("active");
    if (itemContent.classList.contains("active")) {
      itemIcon.style.transform = "rotate(180deg)";
    } else {
      itemIcon.style.transform = "rotate(0deg)";
    }
  });
});
