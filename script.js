
document.addEventListener("click", function (event) {
  const openMenus = document.querySelectorAll(".menu-dropdown[open]");

  openMenus.forEach(function (menu) {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedMenuLink = event.target.closest(".dropdown-list a");

    if (!clickedInsideMenu || clickedMenuLink) {
      menu.open = false;
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".menu-dropdown[open]").forEach(function (menu) {
      menu.open = false;
    });
  }
});
