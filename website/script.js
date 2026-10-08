(function () {
  var config = window.SITE_CONFIG || {};
  var siteName = config.siteName || "izen.lol";
  var inviteUrl = config.discordInviteUrl || "#";
  var supportUrl = config.supportServerUrl || "#";

  document.querySelectorAll("[data-site-name]").forEach(function (node) {
    node.textContent = siteName;
  });

  document.querySelectorAll("[data-discord-invite]").forEach(function (node) {
    node.setAttribute("href", inviteUrl);
  });

  document.querySelectorAll("[data-support-url]").forEach(function (node) {
    node.setAttribute("href", supportUrl);
  });

  var activePath = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(function (node) {
    if (node.getAttribute("href") === activePath) {
      node.classList.add("active");
    }
  });

  var savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
  });

  var searchInput = document.querySelector("[data-supported-search]");
  if (searchInput) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-supported-card]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll("[data-supported-group]"));
    var resultText = document.querySelector("[data-supported-status]");

    var updateFilter = function () {
      var query = searchInput.value.trim().toLowerCase();
      var visibleCount = 0;

      cards.forEach(function (card) {
        var text = card.getAttribute("data-search") || "";
        var match = !query || text.indexOf(query) !== -1;
        card.classList.toggle("hidden", !match);
        if (match) {
          visibleCount += 1;
        }
      });

      groups.forEach(function (group) {
        var visibleCards = group.querySelectorAll("[data-supported-card]:not(.hidden)").length;
        group.classList.toggle("hidden", visibleCards === 0);
      });

      if (resultText) {
        resultText.textContent = query
          ? "Showing " + visibleCount + " matching services."
          : "Showing all supported services.";
      }
    };

    searchInput.addEventListener("input", updateFilter);
    updateFilter();
  }
})();
